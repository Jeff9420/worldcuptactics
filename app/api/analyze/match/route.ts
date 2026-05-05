import { NextRequest, NextResponse } from "next/server";
import { supabase } from "../../../lib/supabase";
import { generateTacticalAnalysis } from "../../../lib/ai-generator";
import { getMatch } from "../../../lib/matches";

export const maxDuration = 60; // Max allowed for Vercel Hobby on standard functions (or up to 300 on Pro). 

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { matchId, secret } = body;

    // 1. Security Check
    if (secret !== process.env.CRON_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!matchId) {
      return NextResponse.json({ error: "matchId is required" }, { status: 400 });
    }

    if (!supabase) {
      return NextResponse.json({ error: "Supabase client not configured" }, { status: 500 });
    }

    // 2. Fetch the full Match object from Supabase (or fallback)
    const match = await getMatch(matchId);
    if (!match) {
      return NextResponse.json({ error: "Match not found" }, { status: 404 });
    }

    // 3. Generate AI Analysis
    console.log(`Starting AI analysis for match: ${matchId}`);
    const aiResult = await generateTacticalAnalysis(match);

    // 4. Update the Database
    const { error } = await supabase
      .from("matches")
      .update({
        meta_description: aiResult.metaDescription,
        tactical_analysis: aiResult.tacticalAnalysis,
        historical_significance: aiResult.historicalSignificance,
      })
      .eq("id", matchId);

    if (error) {
      console.error("Supabase update error:", error);
      throw error;
    }

    console.log(`Successfully generated and saved AI analysis for match: ${matchId}`);
    return NextResponse.json({ success: true, matchId });
  } catch (err: any) {
    console.error("AI Analysis error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
