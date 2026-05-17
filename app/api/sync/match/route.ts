import { NextRequest, NextResponse } from "next/server";
import { fetchAndNormalizeMatch } from "../../../lib/api-football";
import { supabase } from "../../../lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fixtureId, secret } = body;

    if (secret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!fixtureId) {
      return NextResponse.json({ error: "fixtureId is required" }, { status: 400 });
    }

    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not configured" }, { status: 500 });
    }

    // 1. Fetch data from API-Football
    const matchData = await fetchAndNormalizeMatch(fixtureId);

    // 2. Map data to Supabase schema format
    const dbPayload = {
      id: matchData.id,
      tournament: matchData.tournament,
      year: matchData.year,
      stage: matchData.stage,
      date: matchData.date,
      venue: matchData.venue,
      city: matchData.city,
      status: matchData.status,
      penalty_score: matchData.penaltyScore || null,
      meta_description: matchData.metaDescription || "",
      tactical_analysis: matchData.tacticalAnalysis || "",
      historical_significance: matchData.historicalSignificance || "",
      
      home_name: matchData.home?.name,
      home_flag: matchData.home?.flag,
      home_formation: matchData.home?.formation,
      home_color: matchData.home?.color,
      home_color_dim: matchData.home?.colorDim,
      home_score: matchData.home?.score,
      home_xg: matchData.xG?.home,
      home_possession: matchData.possession?.home,
      home_players: matchData.home?.players || [],
      
      away_name: matchData.away?.name,
      away_flag: matchData.away?.flag,
      away_formation: matchData.away?.formation,
      away_color: matchData.away?.color,
      away_color_dim: matchData.away?.colorDim,
      away_score: matchData.away?.score,
      away_xg: matchData.xG?.away,
      away_possession: matchData.possession?.away,
      away_players: matchData.away?.players || [],
      
      timeline: matchData.timeline || [],
      stats: matchData.stats || [],
      key_moments: matchData.keyMoments || [],
      top_performers: matchData.topPerformers || [],
    };

    // 3. Upsert to Supabase
    const { error } = await supabase.from("matches").upsert(dbPayload, { onConflict: "id" });

    if (error) {
      console.error("Supabase upsert error:", error);
      throw error;
    }

    return NextResponse.json({ success: true, matchId: matchData.id });
  } catch (err: unknown) {
    console.error("Sync error:", err);
    const message = err instanceof Error ? err.message : "Match sync failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
