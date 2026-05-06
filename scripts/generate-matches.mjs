/**
 * 世界杯比赛内容生成脚本
 * 用法: ANTHROPIC_API_KEY=sk-xxx node scripts/generate-matches.mjs
 * 可选: node scripts/generate-matches.mjs --from=10 --count=20  (从第10场开始，生成20场)
 */

import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { MATCHES_TO_GENERATE, TEAM_COLORS } from "./match-list.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, "output");
const MATCHES_FILE = path.join(__dirname, "../app/lib/matches.ts");

// ─── 解析命令行参数 ───────────────────────────────
const args = process.argv.slice(2);
const fromArg = args.find((a) => a.startsWith("--from="));
const countArg = args.find((a) => a.startsWith("--count="));
const idArg = args.find((a) => a.startsWith("--id="));
const fromIndex = fromArg ? parseInt(fromArg.split("=")[1]) : 0;
const count = countArg ? parseInt(countArg.split("=")[1]) : MATCHES_TO_GENERATE.length;
const singleId = idArg ? idArg.split("=")[1] : null;

// ─── 读取已存在的 match IDs ────────────────────────
function getExistingIds() {
  const content = fs.readFileSync(MATCHES_FILE, "utf8");
  const matches = content.match(/id:\s*"([^"]+)"/g) || [];
  return new Set(matches.map((m) => m.replace(/id:\s*"/, "").replace('"', "")));
}

// ─── 生成单场比赛 ──────────────────────────────────
async function generateMatch(client, meta, model) {
  const homeColors = TEAM_COLORS[meta.home] || {
    color: "#FFFFFF",
    colorDim: "rgba(255,255,255,0.18)",
  };
  const awayColors = TEAM_COLORS[meta.away] || {
    color: "#FF6600",
    colorDim: "rgba(255,102,0,0.18)",
  };

  const prompt = `Generate a complete JSON object for this World Cup match. Return ONLY valid JSON, no TypeScript syntax, no markdown, no explanation.

MATCH TO GENERATE:
- Tournament: ${meta.tournament}
- Year: ${meta.year}
- Stage: ${meta.stage}
- Date: ${meta.date}
- Venue: ${meta.venue}
- City: ${meta.city}
- Home team: ${meta.home} (score: ${meta.homeScore})
- Away team: ${meta.away} (score: ${meta.awayScore})
- Status: ${meta.status}${meta.penaltyScore ? `\n- Penalty score: ${meta.penaltyScore}` : ""}
- Known facts: ${meta.notes}

HOME team colors: color="${homeColors.color}", colorDim="${homeColors.colorDim}"
AWAY team colors: color="${awayColors.color}", colorDim="${awayColors.colorDim}"

Use REAL historical facts: actual player names (starting XI only, 11 players each team), real formations, real timeline events with correct minutes.

Required JSON structure (follow this exactly):
{
  "id": "${meta.id}",
  "tournament": "${meta.tournament}",
  "year": ${meta.year},
  "stage": "${meta.stage}",
  "date": "${meta.date}",
  "venue": "${meta.venue}",
  "city": "${meta.city}",
  "home": {
    "name": "${meta.home}",
    "flag": "[emoji flag]",
    "formation": "[e.g. 4-2-3-1]",
    "color": "${homeColors.color}",
    "colorDim": "${homeColors.colorDim}",
    "players": ["[11 real player names, GK first]"],
    "score": ${meta.homeScore}
  },
  "away": {
    "name": "${meta.away}",
    "flag": "[emoji flag]",
    "formation": "[e.g. 4-3-3]",
    "color": "${awayColors.color}",
    "colorDim": "${awayColors.colorDim}",
    "players": ["[11 real player names, GK first]"],
    "score": ${meta.awayScore}
  },
  "status": "${meta.status}",
  ${meta.penaltyScore ? `"penaltyScore": "${meta.penaltyScore}",` : ""}
  "xG": { "home": [realistic xG number], "away": [realistic xG number] },
  "possession": { "home": [number], "away": [number that sums to 100] },
  "timeline": [
    { "minute": "X'", "side": "home|away|neutral", "player": "Name", "type": "goal|yellow|red|sub|pen_goal|pen_miss|own_goal", "description": "brief description" }
  ],
  "stats": [
    { "label": "Shots", "home": N, "away": N, "homeWidth": N, "awayWidth": N },
    { "label": "Shots on Target", "home": N, "away": N, "homeWidth": N, "awayWidth": N },
    { "label": "Possession", "home": N, "away": N, "homeWidth": N, "awayWidth": N },
    { "label": "Passes", "home": N, "away": N, "homeWidth": N, "awayWidth": N },
    { "label": "Pass Accuracy", "home": "N%", "away": "N%", "homeWidth": N, "awayWidth": N },
    { "label": "Corners", "home": N, "away": N, "homeWidth": N, "awayWidth": N },
    { "label": "Fouls", "home": N, "away": N, "homeWidth": N, "awayWidth": N },
    { "label": "xG", "home": "N.NN", "away": "N.NN", "homeWidth": N, "awayWidth": N }
  ],
  "metaDescription": "[150 char SEO description]",
  "tacticalAnalysis": "[300-450 word tactical breakdown — formations, pressing schemes, key tactical battles, how the goals came about, manager decisions]",
  "keyMoments": ["[4-6 strings, each describing a key moment with minute and significance]"],
  "historicalSignificance": "[2-3 sentences on why this match matters in football history]",
  "topPerformers": [
    { "name": "Player Name", "side": "home|away", "position": "GK|CB|LB|RB|CDM|CM|CAM|LW|RW|ST", "rating": 9.2, "note": "why they were outstanding" },
    { "name": "Player Name", "side": "home|away", "position": "CM", "rating": 8.5, "note": "their contribution" },
    { "name": "Player Name", "side": "home|away", "position": "ST", "rating": 8.8, "note": "their impact" }
  ]
}

IMPORTANT RULES:
- homeWidth + awayWidth = 100 for each stat (proportional to the values)
- timeline must include all goals in the correct minute, plus key cards/subs
- topPerformers: 2-4 players total, mix of both teams
- tacticalAnalysis: deep, specific, not generic — reference actual formations and player roles
- Return ONLY the JSON object, nothing else`;

  const response = await client.chat.completions.create({
    model,
    max_tokens: 4000,
    messages: [{ role: "user", content: prompt }],
  });

  const text = response.choices[0].message.content.trim();

  // 提取 JSON（防止 Claude 加了 markdown）
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No JSON found in response");

  return JSON.parse(jsonMatch[0]);
}

// ─── 将 match 对象序列化为 TypeScript 代码 ───────────
function matchToTypeScript(match) {
  const json = JSON.stringify(match, null, 4);
  // 把纯 JSON 的双引号 key 转为不带引号的 TS 对象 key（可选，但更美观）
  return json;
}

// ─── 追加到 matches.ts ────────────────────────────────
function appendToMatchesFile(matchJson) {
  let content = fs.readFileSync(MATCHES_FILE, "utf8");

  // 找到 MATCHES 数组的结束位置（];\n\nexport function 之前）
  const marker = "];\n\nimport { supabase }";
  const lastBrace = content.indexOf(marker);
  if (lastBrace === -1) throw new Error("Could not find end of MATCHES array");

  const matchCode = `
  // ─────────────────────────────────────────────
  // ${matchJson.home.name} vs ${matchJson.away.name} — ${matchJson.year} ${matchJson.stage}
  // ─────────────────────────────────────────────
  ${JSON.stringify(matchJson, null, 2).replace(/^/gm, "  ").trim()},`;

  content = content.slice(0, lastBrace) + matchCode + "\n" + content.slice(lastBrace);
  fs.writeFileSync(MATCHES_FILE, content, "utf8");
}

// ─── 主流程 ───────────────────────────────────────────
async function main() {
  const apiKey = process.env.OPENAI_API_KEY;
  const baseURL = process.env.OPENAI_BASE_URL;
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  if (!apiKey) {
    console.error("❌ 请设置环境变量 OPENAI_API_KEY");
    console.error("   用法: OPENAI_API_KEY=xxx OPENAI_BASE_URL=https://your-relay.com/v1 node scripts/generate-matches.mjs");
    process.exit(1);
  }

  const clientConfig = { apiKey };
  if (baseURL) clientConfig.baseURL = baseURL;

  const client = new OpenAI(clientConfig);
  console.log(`🤖 使用模型: ${model}${baseURL ? `\n🔗 中转站: ${baseURL}` : ""}`);

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const existingIds = getExistingIds();
  console.log(`📋 已有 ${existingIds.size} 场比赛在 matches.ts 中`);

  let queue = singleId
    ? MATCHES_TO_GENERATE.filter((m) => m.id === singleId)
    : MATCHES_TO_GENERATE.slice(fromIndex, fromIndex + count);

  queue = queue.filter((m) => {
    if (existingIds.has(m.id)) {
      console.log(`⏭️  跳过 (已存在): ${m.id}`);
      return false;
    }
    return true;
  });

  console.log(`\n🚀 准备生成 ${queue.length} 场比赛\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < queue.length; i++) {
    const meta = queue[i];
    const outputFile = path.join(OUTPUT_DIR, `${meta.id}.json`);

    // 跳过已生成但未合并的
    if (fs.existsSync(outputFile)) {
      console.log(`📦 已有缓存，直接合并: ${meta.id}`);
      try {
        const cached = JSON.parse(fs.readFileSync(outputFile, "utf8"));
        appendToMatchesFile(cached);
        existingIds.add(meta.id);
        success++;
      } catch (e) {
        console.error(`  ❌ 合并失败: ${e.message}`);
        failed++;
      }
      continue;
    }

    console.log(`[${i + 1}/${queue.length}] 生成: ${meta.home} vs ${meta.away} (${meta.year} ${meta.stage})`);

    let retries = 3;
    while (retries > 0) {
      try {
        const match = await generateMatch(client, meta, model);

        // 保存到 output/ 作为备份
        fs.writeFileSync(outputFile, JSON.stringify(match, null, 2));

        // 追加到 matches.ts
        appendToMatchesFile(match);
        existingIds.add(meta.id);

        console.log(`  ✅ 成功: ${match.home.name} ${match.home.score}-${match.away.score} ${match.away.name}`);
        success++;
        break;
      } catch (err) {
        retries--;
        if (retries > 0) {
          console.log(`  ⚠️  重试 (${3 - retries}/3): ${err.message}`);
          await new Promise((r) => setTimeout(r, 2000));
        } else {
          console.error(`  ❌ 失败: ${err.message}`);
          failed++;
        }
      }
    }

    // 每场之间间隔 1 秒，避免 rate limit
    if (i < queue.length - 1) await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`\n📊 完成: ${success} 成功, ${failed} 失败`);
  console.log(`📁 JSON 备份保存在: scripts/output/`);
}

main().catch(console.error);
