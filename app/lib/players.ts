export interface PlayerStats {
  shooting: number;   // 射门
  passing: number;    // 传球
  dribbling: number;  // 盘带
  defending: number;  // 防守
  pace: number;       // 速度
  clutch: number;     // 大心脏
}

export interface PlayerProfile {
  stats: PlayerStats;
  label: string;
  labelColor: string;
  labelIcon: string;
  flavor: string;     // one-line entertaining description
}

// ─── Career stats database (all values 0–99) ───────────────────────────────
const PLAYER_DB: Record<string, PlayerStats> = {
  // ── Legends ──────────────────────────────────────────────────
  "Pelé":            { shooting: 97, passing: 87, dribbling: 95, defending: 58, pace: 90, clutch: 98 },
  "Diego Maradona":  { shooting: 90, passing: 92, dribbling: 99, defending: 52, pace: 85, clutch: 99 },
  "Lionel Messi":    { shooting: 95, passing: 93, dribbling: 98, defending: 45, pace: 87, clutch: 97 },
  "Kylian Mbappé":   { shooting: 92, passing: 78, dribbling: 93, defending: 48, pace: 99, clutch: 90 },
  "Zinedine Zidane": { shooting: 82, passing: 97, dribbling: 95, defending: 62, pace: 72, clutch: 95 },
  "Ronaldo":         { shooting: 98, passing: 72, dribbling: 90, defending: 40, pace: 96, clutch: 97 },
  "Ronaldinho":      { shooting: 88, passing: 88, dribbling: 97, defending: 48, pace: 82, clutch: 85 },
  "Johan Cruyff":    { shooting: 85, passing: 93, dribbling: 95, defending: 68, pace: 88, clutch: 90 },
  "Franz Beckenbauer": { shooting: 72, passing: 90, dribbling: 82, defending: 97, pace: 78, clutch: 92 },
  "Lothar Matthäus": { shooting: 78, passing: 84, dribbling: 78, defending: 85, pace: 78, clutch: 92 },
  "Luka Modrić":     { shooting: 72, passing: 95, dribbling: 88, defending: 72, pace: 75, clutch: 90 },

  // ── Forwards ─────────────────────────────────────────────────
  "Gerd Müller":     { shooting: 97, passing: 62, dribbling: 75, defending: 45, pace: 80, clutch: 94 },
  "Gary Lineker":    { shooting: 92, passing: 62, dribbling: 72, defending: 40, pace: 86, clutch: 88 },
  "Romário":         { shooting: 93, passing: 68, dribbling: 85, defending: 42, pace: 82, clutch: 92 },
  "Mario Kempes":    { shooting: 88, passing: 72, dribbling: 82, defending: 52, pace: 80, clutch: 87 },
  "Karl-Heinz Rummenigge": { shooting: 88, passing: 72, dribbling: 80, defending: 52, pace: 84, clutch: 80 },
  "Rudi Völler":     { shooting: 84, passing: 68, dribbling: 75, defending: 48, pace: 80, clutch: 80 },
  "Jürgen Klinsmann":{ shooting: 82, passing: 68, dribbling: 75, defending: 55, pace: 85, clutch: 78 },
  "Thomas Müller":   { shooting: 82, passing: 80, dribbling: 72, defending: 62, pace: 72, clutch: 93 },
  "Mario Götze":     { shooting: 82, passing: 84, dribbling: 85, defending: 55, pace: 72, clutch: 90 },
  "Lukas Podolski":  { shooting: 84, passing: 68, dribbling: 72, defending: 50, pace: 78, clutch: 72 },
  "Miroslav Klose":  { shooting: 87, passing: 65, dribbling: 68, defending: 52, pace: 75, clutch: 85 },
  "Antoine Griezmann": { shooting: 88, passing: 84, dribbling: 82, defending: 62, pace: 78, clutch: 90 },
  "Ángel Di María":  { shooting: 80, passing: 85, dribbling: 88, defending: 52, pace: 90, clutch: 82 },
  "Julián Álvarez":  { shooting: 85, passing: 72, dribbling: 82, defending: 58, pace: 86, clutch: 85 },
  "Paolo Rossi":     { shooting: 88, passing: 65, dribbling: 72, defending: 55, pace: 72, clutch: 93 },
  "Davor Šuker":     { shooting: 88, passing: 68, dribbling: 78, defending: 48, pace: 78, clutch: 84 },
  "Diego Forlan":    { shooting: 88, passing: 72, dribbling: 75, defending: 52, pace: 75, clutch: 86 },
  "Luis Suárez":     { shooting: 90, passing: 72, dribbling: 85, defending: 55, pace: 82, clutch: 84 },
  "Asamoah Gyan":    { shooting: 82, passing: 65, dribbling: 72, defending: 52, pace: 85, clutch: 75 },
  "Wout Weghorst":   { shooting: 82, passing: 60, dribbling: 62, defending: 55, pace: 78, clutch: 84 },
  "El-Hadj Diouf":   { shooting: 78, passing: 68, dribbling: 82, defending: 55, pace: 84, clutch: 68 },
  "Papa Bouba Diop": { shooting: 78, passing: 62, dribbling: 68, defending: 65, pace: 72, clutch: 80 },
  "Alcides Ghiggia": { shooting: 80, passing: 68, dribbling: 82, defending: 52, pace: 90, clutch: 85 },
  "Helmut Rahn":     { shooting: 84, passing: 68, dribbling: 75, defending: 55, pace: 78, clutch: 88 },
  "Ferenc Puskás":   { shooting: 95, passing: 80, dribbling: 85, defending: 52, pace: 78, clutch: 90 },
  "Sándor Kocsis":   { shooting: 88, passing: 65, dribbling: 72, defending: 52, pace: 78, clutch: 80 },
  "Geoff Hurst":     { shooting: 86, passing: 65, dribbling: 70, defending: 52, pace: 78, clutch: 88 },
  "Jairzinho":       { shooting: 88, passing: 70, dribbling: 82, defending: 55, pace: 90, clutch: 86 },
  "Garrincha":       { shooting: 80, passing: 72, dribbling: 97, defending: 52, pace: 88, clutch: 84 },
  "Vavá":            { shooting: 85, passing: 62, dribbling: 72, defending: 52, pace: 78, clutch: 80 },
  "Rivaldo":         { shooting: 88, passing: 84, dribbling: 88, defending: 52, pace: 80, clutch: 86 },
  "Arjen Robben":    { shooting: 87, passing: 72, dribbling: 93, defending: 45, pace: 95, clutch: 82 },

  // ── Midfielders ──────────────────────────────────────────────
  "Xavi Hernández":  { shooting: 55, passing: 98, dribbling: 82, defending: 72, pace: 65, clutch: 90 },
  "Andrés Iniesta":  { shooting: 72, passing: 95, dribbling: 92, defending: 68, pace: 72, clutch: 94 },
  "Toni Kroos":      { shooting: 65, passing: 97, dribbling: 80, defending: 70, pace: 68, clutch: 86 },
  "Andrea Pirlo":    { shooting: 58, passing: 97, dribbling: 78, defending: 72, pace: 60, clutch: 88 },
  "N'Golo Kanté":    { shooting: 55, passing: 80, dribbling: 72, defending: 96, pace: 84, clutch: 88 },
  "Paul Gascoigne":  { shooting: 75, passing: 88, dribbling: 86, defending: 65, pace: 80, clutch: 80 },
  "Johan Neeskens":  { shooting: 72, passing: 82, dribbling: 78, defending: 80, pace: 76, clutch: 82 },
  "Falcão":          { shooting: 78, passing: 92, dribbling: 82, defending: 68, pace: 72, clutch: 84 },
  "Zico":            { shooting: 88, passing: 90, dribbling: 85, defending: 55, pace: 75, clutch: 86 },
  "Sócrates":        { shooting: 75, passing: 92, dribbling: 80, defending: 62, pace: 70, clutch: 82 },
  "Didier Deschamps":{ shooting: 55, passing: 80, dribbling: 68, defending: 90, pace: 65, clutch: 86 },
  "Kevin De Bruyne": { shooting: 78, passing: 97, dribbling: 85, defending: 62, pace: 80, clutch: 88 },
  "Alexis Mac Allister": { shooting: 72, passing: 84, dribbling: 76, defending: 78, pace: 72, clutch: 82 },
  "Rodrigo De Paul": { shooting: 68, passing: 82, dribbling: 78, defending: 72, pace: 76, clutch: 83 },
  "Zvonimir Boban":  { shooting: 72, passing: 86, dribbling: 80, defending: 70, pace: 72, clutch: 82 },
  "Patrick Vieira":  { shooting: 70, passing: 80, dribbling: 72, defending: 88, pace: 78, clutch: 80 },
  "Alan Ball":       { shooting: 65, passing: 78, dribbling: 68, defending: 78, pace: 76, clutch: 82 },
  "Didi":            { shooting: 62, passing: 88, dribbling: 78, defending: 65, pace: 68, clutch: 80 },
  "Gérson":          { shooting: 60, passing: 88, dribbling: 72, defending: 68, pace: 65, clutch: 80 },
  "Fritz Walter":    { shooting: 72, passing: 85, dribbling: 78, defending: 65, pace: 70, clutch: 88 },
  "Nils Liedholm":   { shooting: 75, passing: 85, dribbling: 78, defending: 65, pace: 70, clutch: 78 },
  "Aliou Cissé":     { shooting: 52, passing: 72, dribbling: 62, defending: 85, pace: 68, clutch: 80 },
  "Sergio Busquets": { shooting: 42, passing: 92, dribbling: 72, defending: 85, pace: 58, clutch: 84 },
  "Enzo Fernández":  { shooting: 72, passing: 84, dribbling: 76, defending: 72, pace: 72, clutch: 82 },
  "Kevin-Prince Boateng": { shooting: 70, passing: 75, dribbling: 72, defending: 78, pace: 80, clutch: 78 },
  "Javier Mascherano": { shooting: 52, passing: 78, dribbling: 62, defending: 94, pace: 75, clutch: 90 },

  // ── Defenders ────────────────────────────────────────────────
  "Lilian Thuram":   { shooting: 52, passing: 72, dribbling: 62, defending: 92, pace: 82, clutch: 95 },
  "Carles Puyol":    { shooting: 40, passing: 65, dribbling: 52, defending: 95, pace: 76, clutch: 92 },
  "Samuel Umtiti":   { shooting: 42, passing: 68, dribbling: 55, defending: 88, pace: 72, clutch: 87 },
  "Benjamin Pavard": { shooting: 62, passing: 72, dribbling: 65, defending: 82, pace: 76, clutch: 90 },
  "Denzel Dumfries": { shooting: 70, passing: 68, dribbling: 70, defending: 75, pace: 84, clutch: 72 },
  "Franco Baresi":   { shooting: 45, passing: 72, dribbling: 60, defending: 98, pace: 70, clutch: 90 },
  "Fabio Cannavaro": { shooting: 40, passing: 70, dribbling: 58, defending: 97, pace: 72, clutch: 90 },
  "Bobby Moore":     { shooting: 55, passing: 78, dribbling: 62, defending: 96, pace: 70, clutch: 88 },
  "Carlos Alberto":  { shooting: 72, passing: 72, dribbling: 68, defending: 84, pace: 82, clutch: 86 },
  "Andreas Brehme":  { shooting: 62, passing: 72, dribbling: 65, defending: 82, pace: 72, clutch: 88 },
  "Fabio Grosso":    { shooting: 58, passing: 68, dribbling: 62, defending: 80, pace: 72, clutch: 92 },
  "Daniel Passarella": { shooting: 68, passing: 72, dribbling: 68, defending: 91, pace: 72, clutch: 88 },
  "Juan Schiaffino": { shooting: 78, passing: 85, dribbling: 80, defending: 60, pace: 72, clutch: 80 },
  "Obdúlio Varela":  { shooting: 60, passing: 75, dribbling: 68, defending: 88, pace: 70, clutch: 88 },

  // ── Goalkeepers ──────────────────────────────────────────────
  "Manuel Neuer":    { shooting: 20, passing: 78, dribbling: 38, defending: 97, pace: 70, clutch: 93 },
  "Gianluigi Buffon":{ shooting: 18, passing: 72, dribbling: 32, defending: 97, pace: 62, clutch: 95 },
  "Iker Casillas":   { shooting: 18, passing: 68, dribbling: 30, defending: 95, pace: 62, clutch: 92 },
  "E. Martínez":     { shooting: 18, passing: 65, dribbling: 28, defending: 94, pace: 62, clutch: 97 },
  "Emiliano Martínez": { shooting: 18, passing: 65, dribbling: 28, defending: 94, pace: 62, clutch: 97 },
  "Claudio Taffarel":{ shooting: 18, passing: 62, dribbling: 28, defending: 90, pace: 60, clutch: 86 },
  "Oliver Kahn":     { shooting: 18, passing: 65, dribbling: 30, defending: 96, pace: 60, clutch: 85 },
  "Ubaldo Fillol":   { shooting: 18, passing: 60, dribbling: 28, defending: 90, pace: 60, clutch: 84 },
  "Sergio Goycochea":{ shooting: 18, passing: 58, dribbling: 28, defending: 86, pace: 58, clutch: 90 },
  "Hugo Lloris":     { shooting: 18, passing: 68, dribbling: 30, defending: 90, pace: 62, clutch: 82 },
  "Peter Shilton":   { shooting: 18, passing: 62, dribbling: 28, defending: 91, pace: 58, clutch: 80 },
};

// ─── Position-based stat templates for fallback generation ───────────────────
const POSITION_TEMPLATES: Record<string, PlayerStats> = {
  GK: { shooting: 18, passing: 62, dribbling: 28, defending: 88, pace: 58, clutch: 78 },
  CB: { shooting: 45, passing: 68, dribbling: 55, defending: 88, pace: 68, clutch: 78 },
  LB: { shooting: 58, passing: 70, dribbling: 62, defending: 80, pace: 78, clutch: 75 },
  RB: { shooting: 58, passing: 70, dribbling: 62, defending: 80, pace: 78, clutch: 75 },
  SW: { shooting: 55, passing: 78, dribbling: 68, defending: 90, pace: 72, clutch: 82 },
  DM: { shooting: 52, passing: 80, dribbling: 68, defending: 88, pace: 72, clutch: 80 },
  CM: { shooting: 65, passing: 84, dribbling: 75, defending: 72, pace: 72, clutch: 80 },
  AM: { shooting: 78, passing: 86, dribbling: 82, defending: 55, pace: 76, clutch: 82 },
  LW: { shooting: 80, passing: 72, dribbling: 88, defending: 48, pace: 88, clutch: 78 },
  RW: { shooting: 80, passing: 72, dribbling: 88, defending: 48, pace: 88, clutch: 78 },
  CF: { shooting: 88, passing: 65, dribbling: 75, defending: 45, pace: 82, clutch: 80 },
  SS: { shooting: 82, passing: 82, dribbling: 82, defending: 52, pace: 75, clutch: 82 },
  RF: { shooting: 85, passing: 68, dribbling: 80, defending: 48, pace: 84, clutch: 80 },
  LF: { shooting: 85, passing: 68, dribbling: 80, defending: 48, pace: 84, clutch: 80 },
  DEFAULT: { shooting: 72, passing: 72, dribbling: 72, defending: 65, pace: 72, clutch: 75 },
};

function getPositionKey(position: string): string {
  const p = position.toUpperCase().replace(/[^\w]/g, " ").trim().split(/\s+/)[0];
  for (const key of Object.keys(POSITION_TEMPLATES)) {
    if (p.includes(key)) return key;
  }
  return "DEFAULT";
}

// Seeded random for consistent results per player
function seededRand(name: string, index: number): number {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) & 0xffffffff;
  }
  return ((Math.abs(hash) * (index + 1) * 1013) % 18) - 9; // ±9 variation
}

function generateStats(name: string, position: string, rating: number): PlayerStats {
  const posKey = getPositionKey(position);
  const template = POSITION_TEMPLATES[posKey] ?? POSITION_TEMPLATES.DEFAULT;
  const scale = 0.72 + (rating - 6.5) / 3.5 * 0.28;
  const keys = ["shooting", "passing", "dribbling", "defending", "pace", "clutch"] as const;
  const result = {} as PlayerStats;
  keys.forEach((k, i) => {
    const base = Math.round(template[k] * scale);
    const noise = seededRand(name, i);
    result[k] = Math.min(99, Math.max(10, base + noise));
  });
  return result;
}

// ─── Label assignment ─────────────────────────────────────────────────────────
interface LabelDef { label: string; labelColor: string; labelIcon: string; flavor: string }

function assignLabel(s: PlayerStats, position: string): LabelDef {
  const vals = [s.shooting, s.passing, s.dribbling, s.defending, s.pace, s.clutch];
  const avg = vals.reduce((a, b) => a + b, 0) / 6;
  const max = Math.max(...vals);
  const min = Math.min(...vals);
  const spread = max - min;
  const isGK = s.shooting < 30 && s.defending > 82;

  if (isGK) {
    if (s.clutch >= 92) return { label: "扑点神话", labelColor: "#2DFF7C", labelIcon: "🧤", flavor: "关键时刻接管比赛，点球大战的终结者" };
    if (s.defending >= 95) return { label: "门神", labelColor: "#2DFF7C", labelIcon: "🧤", flavor: "球门就是他的领土，无懈可击的最后防线" };
    return { label: "稳定型门将", labelColor: "#888", labelIcon: "🧤", flavor: "沉稳可靠，为球队提供坚实的最后一道保障" };
  }
  if (avg >= 89) return { label: "球王级别", labelColor: "#F5C518", labelIcon: "👑", flavor: "超越时代的存在，足球史书上永恒的名字" };
  if (avg >= 84 && spread < 22) return { label: "六边形战士", labelColor: "#2DFF7C", labelIcon: "⬡", flavor: "全能无死角，教练梦寐以求的完美球员" };
  if (s.pace >= 95) return { label: "速度妖人", labelColor: "#FF4444", labelIcon: "⚡", flavor: "闪电般的加速度，后卫的噩梦制造者" };
  if (s.dribbling >= 93 && avg >= 78) return { label: "盘带魔术师", labelColor: "#FF8C00", labelIcon: "🪄", flavor: "脚下如有魔法，一对一从未失手" };
  if (s.passing >= 93 && s.dribbling >= 80) return { label: "传控大师", labelColor: "#00BFFF", labelIcon: "🎯", flavor: "掌控节奏如同指挥乐团，传球是最高级的艺术" };
  if (s.clutch >= 93 && avg >= 78) return { label: "大心脏", labelColor: "#FF69B4", labelIcon: "💗", flavor: "越是关键时刻越发闪光，比赛的终结者" };
  if (s.shooting >= 92 && s.dribbling >= 80 && s.defending < 58) return { label: "进攻机器", labelColor: "#FF4444", labelIcon: "🔥", flavor: "纯粹的进球机器，对方球门的专属破坏者" };
  if (s.defending >= 92 && s.shooting < 58) return { label: "铜墙铁壁", labelColor: "#8888FF", labelIcon: "🛡️", flavor: "攻不破的防线，对方前锋的终结之地" };
  if (s.passing >= 90 && s.defending >= 78) return { label: "全能中场", labelColor: "#00BFFF", labelIcon: "⚙️", flavor: "攻守两端全面开花，中场的发动机与保障" };
  if (spread >= 42 && max >= 88) return { label: "偏科天才", labelColor: "#F5C518", labelIcon: "💡", flavor: "某项能力封顶，但这已经足够决定比赛" };
  if (avg >= 80) return { label: "全能战士", labelColor: "#2DFF7C", labelIcon: "⚔️", flavor: "均衡全面，任何位置都能胜任的可靠老将" };
  if (s.pace >= 86 && s.dribbling >= 80) return { label: "边路利刃", labelColor: "#FF8C00", labelIcon: "🗡️", flavor: "边路的一把快刀，速度与技术的完美结合" };
  return { label: "均衡型选手", labelColor: "#888", labelIcon: "⚽", flavor: "脚踏实地的职业球员，球队不可缺少的拼图" };
}

// ─── Public API ───────────────────────────────────────────────────────────────
export function getPlayerProfile(name: string, position: string, rating: number): PlayerProfile {
  // Try exact match, then partial match
  let stats = PLAYER_DB[name];
  if (!stats) {
    const key = Object.keys(PLAYER_DB).find(
      (k) => name.toLowerCase().includes(k.toLowerCase()) || k.toLowerCase().includes(name.toLowerCase())
    );
    stats = key ? PLAYER_DB[key] : generateStats(name, position, rating);
  }
  const labelDef = assignLabel(stats, position);
  return { stats, ...labelDef };
}

export const STAT_LABELS: Record<keyof PlayerStats, string> = {
  shooting: "射门",
  passing: "传球",
  dribbling: "盘带",
  defending: "防守",
  pace: "速度",
  clutch: "大心脏",
};
