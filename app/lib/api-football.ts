import { Match, MatchStat, TimelineEvent, TopPerformer } from "./matches";

const API_KEY = process.env.API_FOOTBALL_KEY;
const API_HOST = "v3.football.api-sports.io";
const BASE_URL = `https://${API_HOST}`;

async function fetchFromApi(endpoint: string) {
  if (!API_KEY) {
    throw new Error("API_FOOTBALL_KEY is not configured.");
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": API_HOST,
      "x-rapidapi-key": API_KEY,
      "x-apisports-key": API_KEY,
    },
  });

  if (!response.ok) {
    throw new Error(`API-Football request failed: ${response.statusText}`);
  }

  const data = await response.json();
  return data.response;
}

/**
 * Fetches and aggregates all data for a specific fixture from API-Football
 * and normalizes it into our application's `Match` interface.
 */
export async function fetchAndNormalizeMatch(
  fixtureId: number
): Promise<Partial<Match>> {
  // We fetch fixtures, statistics, lineups, and events concurrently
  const [fixtures, statistics, lineups, events] = await Promise.all([
    fetchFromApi(`/fixtures?id=${fixtureId}`),
    fetchFromApi(`/fixtures/statistics?fixture=${fixtureId}`),
    fetchFromApi(`/fixtures/lineups?fixture=${fixtureId}`),
    fetchFromApi(`/fixtures/events?fixture=${fixtureId}`),
  ]);

  if (!fixtures || fixtures.length === 0) {
    throw new Error("Fixture not found");
  }

  const fixture = fixtures[0];
  const homeTeamId = fixture.teams.home.id;
  const awayTeamId = fixture.teams.away.id;

  const homeStats = statistics?.find((s: any) => s.team.id === homeTeamId)?.statistics || [];
  const awayStats = statistics?.find((s: any) => s.team.id === awayTeamId)?.statistics || [];

  const homeLineup = lineups?.find((l: any) => l.team.id === homeTeamId);
  const awayLineup = lineups?.find((l: any) => l.team.id === awayTeamId);

  const getStat = (statsArray: any[], type: string) => {
    const stat = statsArray.find((s: any) => s.type === type);
    if (!stat || stat.value === null) return 0;
    if (typeof stat.value === "string" && stat.value.includes("%")) {
      return parseInt(stat.value.replace("%", ""), 10);
    }
    return stat.value;
  };

  const homePossession = getStat(homeStats, "Ball Possession") || 50;
  const awayPossession = getStat(awayStats, "Ball Possession") || 50;
  const homeXG = parseFloat(getStat(homeStats, "expected_goals") || "0");
  const awayXG = parseFloat(getStat(awayStats, "expected_goals") || "0");

  const normalizedTimeline: TimelineEvent[] = (events || []).map((e: any) => {
    let type: TimelineEvent["type"] = "goal";
    if (e.type === "Goal") {
      if (e.detail === "Penalty") type = "pen_goal";
      else if (e.detail === "Missed Penalty") type = "pen_miss";
      else if (e.detail === "Own Goal") type = "own_goal";
    } else if (e.type === "Card") {
      type = e.detail === "Yellow Card" ? "yellow" : "red";
    } else if (e.type === "subst") {
      type = "sub";
    }

    return {
      minute: `${e.time.elapsed}${e.time.extra ? "+" + e.time.extra : ""}´`,
      side: e.team.id === homeTeamId ? "home" : "away",
      player: e.player.name,
      type,
      description: e.assist?.name ? `Assist: ${e.assist.name}` : e.detail,
    };
  });

  const normalizedStats: MatchStat[] = [
    {
      label: "Shots on Target",
      home: getStat(homeStats, "Shots on Goal"),
      away: getStat(awayStats, "Shots on Goal"),
      homeWidth: 50, // These would normally be calculated based on max values
      awayWidth: 50,
    },
    {
      label: "Total Passes",
      home: getStat(homeStats, "Total passes"),
      away: getStat(awayStats, "Total passes"),
      homeWidth: 50,
      awayWidth: 50,
    },
  ];

  // Map API data to our internal Match schema
  return {
    id: `fixture-${fixtureId}`,
    tournament: fixture.league.name,
    year: fixture.league.season,
    stage: fixture.league.round,
    date: new Date(fixture.fixture.date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }),
    venue: fixture.fixture.venue.name,
    city: fixture.fixture.venue.city,
    status: fixture.fixture.status.short === "PEN" ? "PSO" : fixture.fixture.status.short === "AET" ? "AET" : "FT",
    home: {
      name: fixture.teams.home.name,
      flag: fixture.teams.home.logo, // URL instead of emoji, frontend will need to handle this
      formation: homeLineup?.formation || "4-3-3",
      color: `#${homeLineup?.team?.colors?.player?.primary || "FFFFFF"}`, // Assuming API might provide colors or we generate it
      colorDim: `rgba(255,255,255,0.1)`,
      players: homeLineup?.startXI?.map((p: any) => p.player.name) || [],
      score: fixture.goals.home || 0,
    },
    away: {
      name: fixture.teams.away.name,
      flag: fixture.teams.away.logo,
      formation: awayLineup?.formation || "4-3-3",
      color: `#${awayLineup?.team?.colors?.player?.primary || "000000"}`,
      colorDim: `rgba(0,0,0,0.1)`,
      players: awayLineup?.startXI?.map((p: any) => p.player.name) || [],
      score: fixture.goals.away || 0,
    },
    xG: { home: homeXG, away: awayXG },
    possession: { home: homePossession, away: awayPossession },
    timeline: normalizedTimeline,
    stats: normalizedStats,
    // AI fields to be generated later by Cloud Run
    tacticalAnalysis: "AI Analysis Pending...",
    keyMoments: [],
    historicalSignificance: "Data aggregated from API.",
    topPerformers: [],
  };
}
