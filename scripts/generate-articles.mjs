/**
 * 2026世界杯预热文章生成脚本
 * 用法: OPENAI_API_KEY=xxx OPENAI_BASE_URL=https://openrouter.ai/api/v1 OPENAI_MODEL=openai/gpt-4o-mini node scripts/generate-articles.mjs
 */

import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_FILE = path.join(__dirname, "../app/lib/articles.ts");
const OUTPUT_DIR = path.join(__dirname, "output-articles");

const ARTICLES_TO_GENERATE = [
  {
    slug: "germany-2026-world-cup-squad-analysis",
    title: "Germany at the 2026 World Cup: Can the Machine Be Rebuilt?",
    excerpt: "Two consecutive group stage exits. A painful rebuild. Now Germany arrive at 2026 with something to prove. A tactical breakdown of their squad, system, and realistic chances.",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 9,
    metaDescription: "Germany's 2026 World Cup squad analysis — tactics, key players, formation, and whether they can finally end their recent tournament failures.",
    relatedMatchIds: ["germany-vs-brazil-2014-sf", "germany-vs-brazil-2014-final", "germany-vs-south-korea-2018-group"],
    keyPoints: "Focus on: Germany's humiliating 2018 and 2022 group stage exits, the Hansi Flick era rebuild, key players (Musiala, Wirtz, Havertz, ter Stegen), their 4-2-3-1 system vs 3-4-2-1 hybrid, the pressing game under new management, historical precedent of Germany rebuilding (2006 after 2000 failure), realistic chance of winning vs just reaching semis, playing on home continent for first time since 2006."
  },
  {
    slug: "portugal-2026-world-cup-squad-analysis",
    title: "Portugal 2026: The Post-Ronaldo Era Begins",
    excerpt: "Ronaldo will be 41. The question is no longer whether Portugal can win with him — it's whether they can win without relying on him. The most complex squad dynamic at the 2026 World Cup.",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 9,
    metaDescription: "Portugal 2026 World Cup squad analysis — how Roberto Martínez handles the Ronaldo question, Bernardo Silva's role, Bruno Fernandes, and Portugal's real ceiling.",
    relatedMatchIds: ["uruguay-vs-portugal-2018-r16", "portugal-vs-switzerland-2022-r16", "morocco-vs-portugal-2022-qf"],
    keyPoints: "Focus on: Ronaldo at 41 — ceremonial captain or genuine starter?, the generational shift with Gonçalo Ramos replacing him, Bruno Fernandes as the real playmaker, Bernardo Silva's world-class quality, Rafael Leão's pace on the left, Portugal's consistent QF/SF exits and why they haven't won a World Cup, the Roberto Martínez tactical system (played extremely well at Euro 2024), how they approach without Cristiano as the focal point, Portugal's realistic ceiling at 2026."
  },
  {
    slug: "morocco-2026-world-cup-squad-analysis",
    title: "Morocco 2026: Can Africa's Heroes Do It Again?",
    excerpt: "In 2022, Morocco became the first African nation to reach a World Cup semifinal. They return in 2026 with the same coach, most of the same squad, and now the burden of expectation. Can lightning strike twice?",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 8,
    metaDescription: "Morocco 2026 World Cup analysis — Regragui's tactical system, key players Hakimi and Ziyech, and whether the Atlas Lions can go further than their historic 2022 run.",
    relatedMatchIds: ["morocco-vs-spain-2022-r16", "morocco-vs-portugal-2022-qf", "france-vs-morocco-2022-sf"],
    keyPoints: "Focus on: Regragui's low-block defensive masterclass in 2022, how the system works (deep 4-3-3/4-1-4-1 defensive shape), Achraf Hakimi as the best right back in the world, Hakim Ziyech's creative role, Sofyan Amrabat as the defensive anchor, the psychological shift — now they come as a known quantity not a surprise, Africa's increased allocation (9 spots) giving more confidence, can they go further than semifinals?, the cultural significance for the Arab world and Africa."
  },
  {
    slug: "netherlands-2026-world-cup-squad-analysis",
    title: "Netherlands 2026: The Rebuild After Koeman's Foundation",
    excerpt: "The Netherlands reached the 2022 quarterfinals with a pragmatic, results-first style. With a new generation arriving — Xavi Simons, Tijjani Reijnders — can they finally add substance to Dutch flair?",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 8,
    metaDescription: "Netherlands 2026 World Cup squad analysis — key players, tactical system, Virgil van Dijk as captain, and whether this Dutch generation can match Total Football's legacy.",
    relatedMatchIds: ["netherlands-vs-argentina-2022-qf", "west-germany-vs-netherlands-1974-final", "spain-vs-netherlands-2014-group"],
    keyPoints: "Focus on: Van Gaal's pragmatic 2022 system vs the Total Football legacy, Ronald Koeman's evolution of the squad, the generational transition (Virgil van Dijk as captain/leader, Xavi Simons as the creative spark, Reijnders' emergence), Memphis Depay's fading influence, Cody Gakpo's role, Dumfries at right wingback, Netherlands' historical near-misses (1974, 1978, 2010 finals), whether this squad has the tactical quality and mental resilience to win a World Cup."
  },
  {
    slug: "japan-2026-world-cup-dark-horse-analysis",
    title: "Japan 2026: Asia's Most Dangerous Dark Horse",
    excerpt: "Japan eliminated Germany and Spain in 2022. They have more European-based players than ever. Under Hajime Moriyasu, they've built the most tactically sophisticated Asian team in World Cup history. Don't sleep on them.",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 8,
    metaDescription: "Japan 2026 World Cup analysis — why Japan are genuine dark horses, their high-pressing system, key players in European leagues, and how far they can realistically go.",
    relatedMatchIds: ["germany-vs-japan-2022-group", "croatia-vs-japan-2022-r16", "spain-vs-costa-rica-2022-group"],
    keyPoints: "Focus on: Japan's shock victories over Germany and Spain in 2022, the tactical DNA (high-press, compact 4-2-3-1 that shifts to 3-4-3 in attack), the European-based squad (virtually every starter plays in Europe's top leagues), key players (Mitoma, Kubo, Doan, Endo), Moriyasu's tactical flexibility and controversial substitution patterns that proved genius, Japan's ceiling (can they go beyond QF?), Asia's expanded allocation (8 spots), the psychological challenge of being expected rather than the underdog."
  },
  {
    slug: "2026-world-cup-group-of-death",
    title: "The 2026 World Cup's Group of Death: Who Has the Hardest Draw?",
    excerpt: "With 48 teams and 12 groups, every group is a potential minefield. We analyze which nations face the most brutal opening rounds — and which favorites could be eliminated before the knockout stages.",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 9,
    metaDescription: "2026 World Cup group of death analysis — which teams face the hardest draws, potential upset groups, and which favorites are most at risk of early elimination.",
    relatedMatchIds: ["spain-vs-netherlands-2014-group", "germany-vs-japan-2022-group", "saudi-arabia-vs-argentina-2022-group"],
    keyPoints: "Focus on: The 48-team format creates 12 groups of 4 — more chances for upsets, the seeding system (FIFA rankings-based), potential death groups involving 2-3 strong European teams, historical precedent of favorites going out early (France 2002, Germany 2018, Argentina 2022 Group Stage), the importance of the group stage in the new format (top 2 plus 8 best 3rd place teams advance), which continental blocks have the most depth (UEFA most dangerous), identifying the 3-4 groups where elite teams could be eliminated, tactical considerations of teams managing group stage energy for knockouts."
  },
  {
    slug: "2026-world-cup-48-teams-tactical-impact",
    title: "48 Teams: How the New World Cup Format Changes Football Tactics",
    excerpt: "The 2026 World Cup will feature 48 teams for the first time. More matches, more upsets, more recovery time between games. We break down exactly what this means tactically — and why smaller nations now have a genuine path to the final.",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 8,
    metaDescription: "How the 48-team 2026 World Cup format changes tactics, squad management, and which teams benefit most from the new structure.",
    relatedMatchIds: ["cameroon-vs-argentina-1990-group", "saudi-arabia-vs-argentina-2022-group", "south-korea-vs-italy-2002-r16"],
    keyPoints: "Focus on: The format change from 32 to 48 teams (12 groups of 4, top 2 + 8 best 3rd place qualify), 104 total matches vs 64 in 2022, why rest and rotation becomes more important, how smaller nations benefit (more time between games = longer recovery), tactical implications of playing for a draw (1 point might be enough as 3rd place), squad depth at 26 players becomes critical, which playing styles are better suited to the new format (high-pressing teams tire faster), the round of 32 as a new pressure point for elite teams, historical lessons from 24-team World Cups (1986-1992) that are most applicable."
  },
  {
    slug: "2026-world-cup-5-tactical-battles",
    title: "5 Tactical Battles That Will Define the 2026 World Cup",
    excerpt: "Every World Cup is won and lost on specific tactical matchups. We identify the five contests — system vs system, player vs player — that will shape who lifts the trophy in New Jersey.",
    category: "2026 WC",
    categoryColor: "#FF4444",
    readTime: 9,
    metaDescription: "The five key tactical battles at the 2026 World Cup — from Mbappé vs the world's best right backs to the high-press vs deep-block clash that will decide the tournament.",
    relatedMatchIds: ["france-vs-morocco-2022-sf", "argentina-vs-france-2022-final", "germany-vs-brazil-2014-sf"],
    keyPoints: "Focus on 5 specific tactical battles: 1) Stopping Mbappé — which right back / defensive system is best equipped (Morocco's low block worked in 2022 SF, how France will be set up against it), 2) The pressing wars — teams that press high (Germany, Spain, Japan) vs teams with the technical quality to play through it (Brazil, Argentina), 3) Set-piece supremacy — with matches decided by margins, which teams have invested most in dead-ball situations (England's corners, France's free kicks), 4) The false 9 or target man debate — tournament football tends to favor a recognizable striker (Benzema/Giroud/Kane) over a system-player, 5) Fullback vs fullback — Achraf Hakimi vs whichever left winger he faces will be one of the defining individual contests."
  },
];

async function generateArticle(client, meta, model) {
  const prompt = `Generate a high-quality blog article for worldcuptactics.com about the 2026 World Cup.

Article details:
- Title: ${meta.title}
- Excerpt: ${meta.excerpt}
- Key points to cover: ${meta.keyPoints}
- Target read time: ~${meta.readTime} minutes (approx ${meta.readTime * 200} words)

Return a JSON object with this exact structure:
{
  "content": [
    { "type": "paragraph", "text": "opening paragraph..." },
    { "type": "heading", "text": "Section Title" },
    { "type": "paragraph", "text": "paragraph text..." },
    { "type": "quote", "text": "a punchy memorable quote or stat" },
    ...more sections...
  ]
}

Rules:
- 6-8 sections with headings
- Each section has 2-3 paragraphs
- Include 2-3 quote blocks with memorable stats or assertions
- Writing style: authoritative football journalism (think The Athletic), not generic blog
- Be specific: name actual players, formations, match examples
- No bullet points — flowing prose only
- End with a strong conclusion paragraph (no heading needed)
- Return ONLY valid JSON, no markdown, no explanation`;

  const response = await client.chat.completions.create({
    model,
    max_tokens: 3000,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.choices[0].message.content.trim();
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON in response");
  return JSON.parse(jsonMatch[0]);
}

function buildArticleEntry(meta, generated) {
  const today = new Date().toISOString().split("T")[0];
  return `  {
    slug: "${meta.slug}",
    title: "${meta.title.replace(/"/g, '\\"')}",
    excerpt: "${meta.excerpt.replace(/"/g, '\\"')}",
    category: "${meta.category}",
    categoryColor: "${meta.categoryColor}",
    date: "${today}",
    readTime: ${meta.readTime},
    metaDescription: "${meta.metaDescription.replace(/"/g, '\\"')}",
    relatedMatchIds: ${JSON.stringify(meta.relatedMatchIds)},
    content: ${JSON.stringify(generated.content, null, 6).replace(/^/gm, "    ").trim()},
  },`;
}

function appendToArticlesFile(articleCode) {
  let content = fs.readFileSync(ARTICLES_FILE, "utf8");
  const marker = "\nexport function getArticle";
  const insertAt = content.indexOf(marker);
  if (insertAt === -1) throw new Error("Could not find insertion point in articles.ts");
  content = content.slice(0, insertAt) + "\n" + articleCode + "\n" + content.slice(insertAt);
  fs.writeFileSync(ARTICLES_FILE, content, "utf8");
}

async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  const baseURL = process.env.OPENAI_BASE_URL;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    console.error("❌ 请设置 OPENAI_API_KEY");
    process.exit(1);
  }

  const clientConfig = { apiKey };
  if (baseURL) clientConfig.baseURL = baseURL;
  const client = new OpenAI(clientConfig);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  // 读取已存在的 slugs
  const content = fs.readFileSync(ARTICLES_FILE, "utf8");
  const existingSlugs = new Set((content.match(/slug: "([^"]+)"/g) || []).map(m => m.replace(/slug: "|"/g, "")));

  console.log(`🚀 生成 ${ARTICLES_TO_GENERATE.length} 篇2026预热文章\n`);

  let success = 0, failed = 0;

  for (let i = 0; i < ARTICLES_TO_GENERATE.length; i++) {
    const meta = ARTICLES_TO_GENERATE[i];
    const outputFile = path.join(OUTPUT_DIR, `${meta.slug}.json`);

    if (existingSlugs.has(meta.slug)) {
      console.log(`⏭️  跳过 (已存在): ${meta.slug}`);
      continue;
    }

    console.log(`[${i + 1}/${ARTICLES_TO_GENERATE.length}] 生成: ${meta.title}`);

    let generated;

    // 使用缓存
    if (fs.existsSync(outputFile)) {
      console.log("  📦 使用缓存...");
      generated = JSON.parse(fs.readFileSync(outputFile, "utf8"));
    } else {
      let retries = 3;
      while (retries > 0) {
        try {
          generated = await generateArticle(client, meta, model);
          fs.writeFileSync(outputFile, JSON.stringify(generated, null, 2));
          break;
        } catch (err) {
          retries--;
          if (retries > 0) {
            console.log(`  ⚠️  重试: ${err.message}`);
            await new Promise(r => setTimeout(r, 2000));
          } else {
            console.error(`  ❌ 失败: ${err.message}`);
            failed++;
            continue;
          }
        }
      }
    }

    if (!generated) continue;

    try {
      const code = buildArticleEntry(meta, generated);
      appendToArticlesFile(code);
      console.log(`  ✅ 完成: ${meta.slug}`);
      success++;
    } catch (err) {
      console.error(`  ❌ 写入失败: ${err.message}`);
      failed++;
    }

    if (i < ARTICLES_TO_GENERATE.length - 1) await new Promise(r => setTimeout(r, 1000));
  }

  console.log(`\n📊 完成: ${success} 成功, ${failed} 失败`);
}

main().catch(console.error);
