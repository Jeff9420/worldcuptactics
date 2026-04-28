import Link from "next/link";
import Nav from "./components/Nav";
import { MATCHES } from "./lib/matches";

const FEATURED = MATCHES.find((m) => m.id === "argentina-vs-france-2022-final")!;

const GRID_MATCHES = [
  MATCHES.find((m) => m.id === "germany-vs-brazil-2014-sf")!,
  MATCHES.find((m) => m.id === "argentina-vs-england-1986-qf")!,
  MATCHES.find((m) => m.id === "brazil-vs-italy-1970-final")!,
];

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="hero-label">⚡ AI-Powered · Historical Archive · World Cup 2026 Ready</div>
          <h1 className="hero-title">
            TACTICS<br />
            <span className="accent">DECODED</span><br />
            BY AI
          </h1>
          <p className="hero-subtitle">
            Deep tactical analysis of the greatest World Cup matches ever played — formations, xG models, AI insights, and historical context from 1954 to 2026.
          </p>
          <div className="hero-actions">
            <Link href="/matches" className="btn-hero">Explore Matches</Link>
            <Link href="/about" className="btn-hero-ghost">How It Works</Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">10</div>
              <div className="hero-stat-label">Classics Analyzed</div>
            </div>
            <div>
              <div className="hero-stat-num">68</div>
              <div className="hero-stat-label">Years of History</div>
            </div>
            <div>
              <div className="hero-stat-num">2.4M</div>
              <div className="hero-stat-label">Data Points / Match</div>
            </div>
            <div>
              <div className="hero-stat-num">2026</div>
              <div className="hero-stat-label">World Cup Ready</div>
            </div>
          </div>
        </div>

        {/* Pitch SVG */}
        <svg className="hero-pitch" viewBox="0 0 420 580" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="pitchGrad" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#1e5c30" />
              <stop offset="100%" stopColor="#0f3018" />
            </radialGradient>
          </defs>
          <rect width="420" height="580" rx="12" fill="url(#pitchGrad)" opacity="0.9" />
          <rect x="20" y="20" width="380" height="540" rx="4" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <line x1="20" y1="290" x2="400" y2="290" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <circle cx="210" cy="290" r="50" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
          <circle cx="210" cy="290" r="4" fill="rgba(255,255,255,0.6)" />
          <rect x="100" y="20" width="220" height="90" rx="2" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <rect x="100" y="470" width="220" height="90" rx="2" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
          <rect x="150" y="20" width="120" height="45" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          <rect x="150" y="515" width="120" height="45" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
          {/* Argentina 4-3-3 Green */}
          <circle cx="210" cy="530" r="14" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="210" y="535" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>GK</text>
          <circle cx="80" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="155" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="265" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="340" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="120" cy="350" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="210" cy="340" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="300" cy="350" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="90" cy="255" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <circle cx="210" cy="245" r="15" fill="rgba(45,255,124,0.35)" stroke="#2DFF7C" strokeWidth="2.5" />
          <text x="210" y="250" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>MESSI</text>
          <circle cx="330" cy="255" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          {/* France 4-2-3-1 Gold */}
          <circle cx="210" cy="50" r="14" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="210" y="55" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>GK</text>
          <circle cx="70" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="155" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="265" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="350" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="155" cy="210" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="265" cy="210" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="80" cy="270" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="210" cy="255" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="340" cy="270" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <circle cx="210" cy="165" r="15" fill="rgba(245,197,24,0.25)" stroke="#F5C518" strokeWidth="2.5" />
          <text x="210" y="170" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>MBAPPÉ</text>
          {/* Pass lines */}
          <line x1="210" y1="340" x2="210" y2="245" stroke="#2DFF7C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="90" y1="255" x2="210" y2="245" stroke="#2DFF7C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="330" y1="255" x2="210" y2="245" stroke="#2DFF7C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        </svg>
      </div>

      {/* FEATURED MATCH */}
      <div className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
        <div className="section-header">
          <div className="section-title">Featured Match</div>
          <div className="section-sub">// THE GREATEST FINAL EVER PLAYED</div>
          <Link href={`/matches/${FEATURED.id}`} className="section-link">Full Analysis →</Link>
        </div>

        <Link href={`/matches/${FEATURED.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          <div className="featured-match">
            <div className="featured-info">
              <div className="match-meta">
                <span className="match-tag tag-qf">{FEATURED.stage}</span>
                <span className="match-tag" style={{ background: "rgba(245,197,24,0.08)", color: "var(--accent-gold)", border: "1px solid rgba(245,197,24,0.2)" }}>{FEATURED.tournament}</span>
                <span className="match-time">{FEATURED.date} — {FEATURED.venue}</span>
              </div>
              <div className="match-scoreboard">
                <div className="team-block">
                  <div className="team-flag">{FEATURED.home.flag}</div>
                  <div className="team-info">
                    <div className="team-name">{FEATURED.home.name}</div>
                    <div className="team-formation">{FEATURED.home.formation}</div>
                  </div>
                </div>
                <div className="score-box">
                  <div className="score">{FEATURED.home.score}–{FEATURED.away.score}</div>
                  <div className="score-time">AET · Pens {FEATURED.penaltyScore}</div>
                </div>
                <div className="team-block">
                  <div className="team-flag">{FEATURED.away.flag}</div>
                  <div className="team-info">
                    <div className="team-name">{FEATURED.away.name}</div>
                    <div className="team-formation">{FEATURED.away.formation}</div>
                  </div>
                </div>
              </div>
              <div className="ai-insight">
                <div className="insight-label">⚡ AI Tactical Insight</div>
                <div className="insight-text">{FEATURED.tacticalAnalysis.split("\n\n")[0].substring(0, 220)}...</div>
              </div>
              <div className="ai-insight">
                <div className="insight-label">📊 Match Stats</div>
                <div className="insight-text">
                  {FEATURED.home.name} <strong>xG: {FEATURED.xG.home.toFixed(2)}</strong> vs {FEATURED.away.name} <strong>xG: {FEATURED.xG.away.toFixed(2)}</strong> — {FEATURED.home.name} possession <strong>{FEATURED.possession.home}%</strong>. Decided on penalties after a breathtaking 3–3 draw.
                </div>
              </div>
            </div>
            <div className="featured-pitch-area">
              <svg viewBox="0 0 420 580" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <rect width="420" height="580" fill="#1A4A28" />
                {[0, 116, 232, 348, 464].map((y) => (
                  <rect key={y} x="0" y={y} width="420" height="58" fill="rgba(0,0,0,0.07)" />
                ))}
                <rect x="20" y="20" width="380" height="540" rx="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <line x1="20" y1="290" x2="400" y2="290" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <circle cx="210" cy="290" r="50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <circle cx="210" cy="290" r="4" fill="rgba(255,255,255,0.7)" />
                <rect x="100" y="20" width="220" height="90" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                <rect x="100" y="470" width="220" height="90" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                {/* Argentina 4-3-3 bottom */}
                {[
                  [210, 530], [75, 440], [155, 440], [265, 440], [345, 440],
                  [120, 350], [210, 345], [300, 350],
                  [85, 255], [210, 240], [335, 255],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r={i === 9 ? 15 : 13}
                    fill={`rgba(45,255,124,${i === 9 ? 0.35 : 0.2})`}
                    stroke="#2DFF7C" strokeWidth={i === 9 ? 2.5 : 1.5} />
                ))}
                {/* France 4-2-3-1 top */}
                {[
                  [210, 50], [70, 130], [155, 130], [265, 130], [350, 130],
                  [155, 210], [265, 210],
                  [80, 275], [210, 260], [340, 275],
                  [210, 170],
                ].map(([cx, cy], i) => (
                  <circle key={`f${i}`} cx={cx} cy={cy} r={i === 10 ? 15 : 13}
                    fill={`rgba(245,197,24,${i === 10 ? 0.25 : 0.15})`}
                    stroke="#F5C518" strokeWidth={i === 10 ? 2.5 : 1.5} />
                ))}
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* CLASSIC MATCHES GRID */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">Classic Matches</div>
          <div className="section-sub">// TACTICAL BREAKDOWNS</div>
          <Link href="/matches" className="section-link">All 10 Matches →</Link>
        </div>
        <div className="match-grid">
          {GRID_MATCHES.map((m) => {
            const scoreDisplay = `${m.home.score}–${m.away.score}`;
            const statusText =
              m.status === "PSO" ? `Pens ${m.penaltyScore}` : m.status === "AET" ? "AET" : "FT";
            return (
              <Link key={m.id} href={`/matches/${m.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="match-card">
                  <div className="match-card-header">
                    <span className="match-tag" style={{ background: "rgba(45,255,124,0.08)", color: "var(--accent-green)", border: "1px solid rgba(45,255,124,0.2)" }}>
                      {m.year}
                    </span>
                    <span className="match-tag tag-qf">{m.stage}</span>
                  </div>
                  <div className="match-card-teams">
                    <div className="card-team">
                      <div className="card-flag">{m.home.flag}</div>
                      <div className="card-name">{m.home.name}</div>
                      <div className="card-formation">{m.home.formation}</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div className="card-score">{scoreDisplay}</div>
                      <div className="card-score-sub">{statusText}</div>
                    </div>
                    <div className="card-team" style={{ textAlign: "right" }}>
                      <div className="card-flag">{m.away.flag}</div>
                      <div className="card-name">{m.away.name}</div>
                      <div className="card-formation">{m.away.formation}</div>
                    </div>
                  </div>
                  <div className="card-stat-row">
                    <div className="card-stat">
                      <div className="card-stat-val" style={{ color: "var(--accent-green)" }}>{m.possession.home}%</div>
                      <div className="card-stat-key">Poss</div>
                    </div>
                    <div className="card-stat">
                      <div className="card-stat-val">{m.xG.home.toFixed(1)}</div>
                      <div className="card-stat-key">xG</div>
                    </div>
                    <div className="card-stat">
                      <div className="card-stat-val">{m.topPerformers[0].rating.toFixed(1)}</div>
                      <div className="card-stat-key">Top Rating</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* AI FEATURES */}
      <div className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
        <div className="section-header">
          <div className="section-title">AI Capabilities</div>
          <div className="section-sub">// Powered by WorldCupTactics Engine</div>
        </div>
        <div className="features-grid">
          {[
            { icon: "⚡", title: "Formation Analysis", text: "AI detects and visualises formation structures for every match — see exactly how teams lined up and where the tactical battles were won and lost." },
            { icon: "📊", title: "xG & Stats Models", text: "Expected goals engine factors in shot location, assist quality, goalkeeper positioning, and historical match context." },
            { icon: "🎯", title: "Press & Space Mapping", text: "Visual pitch diagrams showing pressing zones, defensive blocks, and the space exploitation that defines modern football tactics." },
            { icon: "🤖", title: "Tactical AI Narrator", text: "Natural language insights explaining what happened and why — like having a UEFA Pro License coach walking you through every key moment." },
            { icon: "🏛️", title: "Historical Archive", text: "10 classic World Cup matches covered now, expanding to 900+ matches spanning every World Cup from 1930 to 2022." },
            { icon: "📋", title: "Deep Tactical Reports", text: "Full AI-written tactical breakdowns with key moments, historical significance, and top performer ratings for every match." },
          ].map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <div className="feature-text">{f.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ padding: "2rem 3rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
        <div className="nav-logo">World<span style={{ color: "var(--accent-green)" }}>Cup</span>Tactics</div>
        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>© 2026 WorldCupTactics.com — AI Tactical Analysis Platform</div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "1.5rem" }}>
          <Link href="/privacy" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none" }}>Privacy</Link>
          <Link href="/about" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none" }}>About</Link>
        </div>
      </footer>
    </>
  );
}
