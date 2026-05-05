import { Match } from "./matches";
import { openai } from "./openai";

export interface AIAnalysisResponse {
  metaDescription: string;
  tacticalAnalysis: string;
  historicalSignificance: string;
}

export async function generateTacticalAnalysis(match: Match): Promise<AIAnalysisResponse> {
  if (!openai) {
    throw new Error("OpenAI client not initialized (missing API key)");
  }

  // Build the payload string to feed the AI
  const matchContext = `
Match: ${match.home.name} vs ${match.away.name}
Tournament: ${match.tournament} ${match.year} - ${match.stage}
Score: ${match.home.score} - ${match.away.score}
Status: ${match.status} ${match.penaltyScore ? `(Pens: ${match.penaltyScore})` : ''}

Possession: ${match.home.name} ${match.possession.home}% - ${match.possession.away}% ${match.away.name}
xG: ${match.home.name} ${match.xG.home} - ${match.xG.away} ${match.away.name}

Formations:
${match.home.name}: ${match.home.formation}
${match.away.name}: ${match.away.formation}

Timeline Events:
${match.timeline.map((t) => `Minute ${t.minute}: ${t.side} - ${t.type} (${t.player}${t.description ? ` - ${t.description}` : ''})`).join('\n')}

Top Performers:
${match.topPerformers.map((p) => `${p.name} (${p.side}) - Rating: ${p.rating}, Position: ${p.position}, Note: ${p.note}`).join('\n')}
  `;

  const prompt = `
You are a world-class football tactician and sports journalist writing for "WorldCupTactics".
Analyze the following football match data and provide a detailed tactical report.

Match Data:
${matchContext}

Your response MUST be in raw JSON format (without markdown backticks) with the following exact keys:
1. "metaDescription": A punchy, SEO-optimized description (max 150 characters) summarizing the match result and key tactical narrative.
2. "tacticalAnalysis": A comprehensive tactical report formatted in Markdown. It should have the following sections (use H3 headers '###'):
   - ### Formation & Approach (Analyze the starting shapes and intentions)
   - ### Key Battles (Highlight 1-2 crucial individual or unit matchups)
   - ### The Turning Point (Discuss the critical moment, goal, or substitution)
   - ### Final Verdict (A short summary of why the winning team won, or why it was a draw)
3. "historicalSignificance": A 1-2 sentence summary of what this match means for football history.

Do not include any text outside the JSON object.
`;

  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL || "gpt-4o",
    messages: [
      { role: "system", content: "You are an expert football tactician and data analyst." },
      { role: "user", content: prompt }
    ],
    temperature: 0.7,
    response_format: { type: "json_object" },
  });

  const content = response.choices[0].message.content;
  if (!content) {
    throw new Error("No content received from OpenAI");
  }

  const parsed: AIAnalysisResponse = JSON.parse(content);
  return parsed;
}
