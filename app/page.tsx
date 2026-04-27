import Link from "next/link";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <div className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="hero-label">⚡ AI-Powered · Real-Time · World Cup 2026</div>
          <h1 className="hero-title">
            TACTICS<br />
            <span className="accent">DECODED</span><br />
            BY AI
          </h1>
          <p className="hero-subtitle">
            Real-time formation analysis, xG models, and tactical breakdowns for every World Cup match — powered by advanced AI.
          </p>
          <div className="hero-actions">
            <Link href="/matches" className="btn-hero">Explore Matches</Link>
            <Link href="/matches/brazil-vs-germany" className="btn-hero-ghost">View Live Analysis</Link>
          </div>
          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">64</div>
              <div className="hero-stat-label">Matches Analyzed</div>
            </div>
            <div>
              <div className="hero-stat-num">48</div>
              <div className="hero-stat-label">Teams Tracked</div>
            </div>
            <div>
              <div className="hero-stat-num">2.4M</div>
              <div className="hero-stat-label">Data Points / Match</div>
            </div>
            <div>
              <div className="hero-stat-num">94%</div>
              <div className="hero-stat-label">Prediction Accuracy</div>
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
          <circle cx="210" cy="68" r="3" fill="rgba(255,255,255,0.5)" />
          <circle cx="210" cy="512" r="3" fill="rgba(255,255,255,0.5)" />
          <rect x="170" y="12" width="80" height="12" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <rect x="170" y="556" width="80" height="12" rx="2" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          {/* Home 4-3-3 Green */}
          <circle cx="210" cy="530" r="14" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="210" y="535" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>GK</text>
          <circle cx="80" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="80" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>LB</text>
          <circle cx="155" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="155" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>CB</text>
          <circle cx="265" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="265" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>CB</text>
          <circle cx="340" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="340" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>RB</text>
          <circle cx="120" cy="350" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="120" y="355" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>LCM</text>
          <circle cx="210" cy="340" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="210" y="345" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>DM</text>
          <circle cx="300" cy="350" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="300" y="355" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>RCM</text>
          <circle cx="90" cy="255" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="90" y="260" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>LW</text>
          <circle cx="210" cy="245" r="14" fill="rgba(45,255,124,0.35)" stroke="#2DFF7C" strokeWidth="2.5" />
          <text x="210" y="250" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>ST</text>
          <circle cx="330" cy="255" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
          <text x="330" y="260" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>RW</text>
          {/* Away 4-4-2 Gold */}
          <circle cx="210" cy="50" r="14" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="210" y="55" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>GK</text>
          <circle cx="70" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="70" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>LB</text>
          <circle cx="155" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="155" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>CB</text>
          <circle cx="265" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="265" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>CB</text>
          <circle cx="350" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="350" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 10, fontWeight: 700 }}>RB</text>
          <circle cx="80" cy="215" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="80" y="220" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>LM</text>
          <circle cx="165" cy="210" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="165" y="215" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>CM</text>
          <circle cx="255" cy="210" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="255" y="215" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>CM</text>
          <circle cx="340" cy="215" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="340" y="220" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>RM</text>
          <circle cx="155" cy="285" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="155" y="290" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>CF</text>
          <circle cx="265" cy="285" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
          <text x="265" y="290" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 9, fontWeight: 700 }}>CF</text>
          {/* AI overlay */}
          <rect x="20" y="20" width="380" height="540" rx="4" fill="none" stroke="#2DFF7C" strokeWidth="0.5" opacity="0.3" />
          <line x1="155" y1="440" x2="210" y2="245" stroke="#2DFF7C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="265" y1="440" x2="210" y2="245" stroke="#2DFF7C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="90" y1="255" x2="210" y2="245" stroke="#2DFF7C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
          <line x1="330" y1="255" x2="210" y2="245" stroke="#2DFF7C" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
        </svg>
      </div>

      {/* FEATURED MATCH */}
      <div className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
        <div className="section-header">
          <div className="section-title">Featured Match</div>
          <div className="section-sub">// AI ANALYSIS LIVE</div>
          <Link href="/matches/brazil-vs-germany" className="section-link">Open Full Analysis →</Link>
        </div>

        <Link href="/matches/brazil-vs-germany" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="featured-match">
            <div className="featured-info">
              <div className="match-meta">
                <span className="match-tag tag-live">● Live</span>
                <span className="match-tag tag-qf">Quarter-Final</span>
                <span className="match-time">67&apos; — Estadio Azteca, Mexico City</span>
              </div>
              <div className="match-scoreboard">
                <div className="team-block">
                  <div className="team-flag">🇧🇷</div>
                  <div className="team-info">
                    <div className="team-name">Brazil</div>
                    <div className="team-formation">4-3-3</div>
                  </div>
                </div>
                <div className="score-box">
                  <div className="score">2 – 1</div>
                  <div className="score-time">67&apos;</div>
                </div>
                <div className="team-block">
                  <div className="team-flag">🇩🇪</div>
                  <div className="team-info">
                    <div className="team-name">Germany</div>
                    <div className="team-formation">4-4-2</div>
                  </div>
                </div>
              </div>
              <div className="ai-insight">
                <div className="insight-label">⚡ AI Tactical Insight</div>
                <div className="insight-text">Brazil&apos;s <strong>high press is suffocating Germany&apos;s build-up</strong> — Rodrygo is winning 78% of duels in the German half. Expect a formation shift to 4-3-3 to counter the right flank overload.</div>
              </div>
              <div className="ai-insight">
                <div className="insight-label">📊 xG Model</div>
                <div className="insight-text">Brazil <strong>xG: 2.41</strong> vs Germany <strong>xG: 0.87</strong> — <strong>Win probability: BRA 74%</strong> based on current possession dominance and press intensity metrics.</div>
              </div>
            </div>
            <div className="featured-pitch-area">
              <svg viewBox="0 0 420 580" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "100%" }}>
                <rect width="420" height="580" fill="#1A4A28" />
                <rect x="0" y="0" width="420" height="58" fill="rgba(0,0,0,0.08)" />
                <rect x="0" y="116" width="420" height="58" fill="rgba(0,0,0,0.08)" />
                <rect x="0" y="232" width="420" height="58" fill="rgba(0,0,0,0.08)" />
                <rect x="0" y="348" width="420" height="58" fill="rgba(0,0,0,0.08)" />
                <rect x="0" y="464" width="420" height="58" fill="rgba(0,0,0,0.08)" />
                <rect x="20" y="20" width="380" height="540" rx="4" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <line x1="20" y1="290" x2="400" y2="290" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <circle cx="210" cy="290" r="50" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <circle cx="210" cy="290" r="4" fill="rgba(255,255,255,0.7)" />
                <rect x="100" y="20" width="220" height="90" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                <rect x="100" y="470" width="220" height="90" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                {/* Brazil 4-3-3 */}
                <circle cx="210" cy="530" r="14" fill="rgba(45,255,124,0.25)" stroke="#2DFF7C" strokeWidth="2" />
                <text x="210" y="535" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>1</text>
                <circle cx="75" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="75" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>6</text>
                <circle cx="155" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="155" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>4</text>
                <circle cx="265" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="265" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>3</text>
                <circle cx="345" cy="440" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="345" y="445" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>2</text>
                <circle cx="120" cy="350" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="120" y="355" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>8</text>
                <circle cx="210" cy="345" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="210" y="350" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>5</text>
                <circle cx="300" cy="350" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="300" y="355" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>10</text>
                <circle cx="85" cy="255" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="85" y="260" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>11</text>
                <circle cx="210" cy="240" r="15" fill="rgba(45,255,124,0.35)" stroke="#2DFF7C" strokeWidth="2.5" />
                <text x="210" y="245" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>9</text>
                <circle cx="335" cy="255" r="13" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="1.5" />
                <text x="335" y="260" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>7</text>
                {/* Germany 4-4-2 */}
                <circle cx="210" cy="50" r="14" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="2" />
                <text x="210" y="55" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>1</text>
                <circle cx="70" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="70" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>5</text>
                <circle cx="155" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="155" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>4</text>
                <circle cx="265" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="265" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>6</text>
                <circle cx="350" cy="130" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="350" y="135" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>2</text>
                <circle cx="80" cy="215" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="80" y="220" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>7</text>
                <circle cx="165" cy="210" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="165" y="215" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>8</text>
                <circle cx="255" cy="210" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="255" y="215" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>10</text>
                <circle cx="340" cy="215" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="340" y="220" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>11</text>
                <circle cx="155" cy="285" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="155" y="290" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>9</text>
                <circle cx="265" cy="285" r="13" fill="rgba(245,197,24,0.15)" stroke="#F5C518" strokeWidth="1.5" />
                <text x="265" y="290" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "sans-serif", fontSize: 10, fontWeight: 700 }}>3</text>
                {/* Press zones */}
                <ellipse cx="155" cy="160" rx="80" ry="40" fill="rgba(255,75,75,0.08)" stroke="rgba(255,75,75,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <ellipse cx="265" cy="160" rx="80" ry="40" fill="rgba(255,75,75,0.08)" stroke="rgba(255,75,75,0.3)" strokeWidth="1" strokeDasharray="4 3" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      {/* LIVE MATCHES */}
      <div className="section">
        <div className="section-header">
          <div className="section-title">Live &amp; Recent</div>
          <div className="section-sub">// 4 matches active</div>
          <Link href="/matches" className="section-link">All Matches →</Link>
        </div>
        <div className="match-grid">
          {[
            { flag1: "🇧🇷", name1: "Brazil", form1: "4-3-3", score: "2–1", time: "67'", flag2: "🇩🇪", name2: "Germany", form2: "4-4-2", poss: "64%", xg: "2.41", shots: "18", tag: "LIVE", tagClass: "tag-live", round: "QF", id: "brazil-vs-germany" },
            { flag1: "🇫🇷", name1: "France", form1: "4-2-3-1", score: "1–1", time: "74'", flag2: "🇵🇹", name2: "Portugal", form2: "4-3-3", poss: "52%", xg: "1.67", shots: "14", tag: "LIVE", tagClass: "tag-live", round: "QF", id: "france-vs-portugal" },
            { flag1: "🇦🇷", name1: "Argentina", form1: "4-3-3", score: "3–0", time: "FT", flag2: "🇳🇱", name2: "Netherlands", form2: "3-4-3", poss: "58%", xg: "3.12", shots: "22", tag: "FT", tagClass: "", round: "QF", id: "argentina-vs-netherlands" },
          ].map((m) => (
            <Link key={m.id} href={`/matches/${m.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className="match-card">
                <div className="match-card-header">
                  <span className="match-tag" style={m.tagClass === "tag-live" ? { background: "rgba(255,75,75,0.12)", color: "var(--accent-red)", borderColor: "rgba(255,75,75,0.25)" } : { background: "rgba(100,100,100,0.15)", color: "#7BA87E", border: "1px solid rgba(100,100,100,0.25)", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.2rem 0.6rem", borderRadius: "3px" }}>
                    {m.tagClass === "tag-live" ? "● " : ""}{m.tag}
                  </span>
                  <span className="match-tag" style={{ background: "rgba(45,255,124,0.1)", color: "var(--accent-green)", borderColor: "rgba(45,255,124,0.25)" }}>{m.round}</span>
                </div>
                <div className="match-card-teams">
                  <div className="card-team">
                    <div className="card-flag">{m.flag1}</div>
                    <div className="card-name">{m.name1}</div>
                    <div className="card-formation">{m.form1}</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div className="card-score">{m.score}</div>
                    <div className="card-score-sub">{m.time}</div>
                  </div>
                  <div className="card-team" style={{ textAlign: "right" }}>
                    <div className="card-flag">{m.flag2}</div>
                    <div className="card-name">{m.name2}</div>
                    <div className="card-formation">{m.form2}</div>
                  </div>
                </div>
                <div className="card-stat-row">
                  <div className="card-stat"><div className="card-stat-val" style={{ color: "var(--accent-green)" }}>{m.poss}</div><div className="card-stat-key">Poss</div></div>
                  <div className="card-stat"><div className="card-stat-val">{m.xg}</div><div className="card-stat-key">xG</div></div>
                  <div className="card-stat"><div className="card-stat-val">{m.shots}</div><div className="card-stat-key">Shots</div></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* AI FEATURES */}
      <div className="section" style={{ background: "var(--bg-surface)", borderTop: "1px solid var(--border)" }}>
        <div className="section-header">
          <div className="section-title">AI Capabilities</div>
          <div className="section-sub">// Powered by WorldCupTactics Engine v3</div>
        </div>
        <div className="features-grid">
          {[
            { icon: "⚡", title: "Real-Time Formation Tracker", text: "AI detects formation shifts mid-match, tracking all 22 players with sub-second latency. Get alerts when a team changes shape." },
            { icon: "📊", title: "xG & Momentum Model", text: "Proprietary expected goals engine factors in shot location, assist quality, goalkeeper positioning, and pressure scores." },
            { icon: "🎯", title: "Press Intensity Heatmaps", text: "Visual pitch overlays showing pressing zones, defensive blocks, and space exploitation areas for both teams." },
            { icon: "🤖", title: "Tactical AI Narrator", text: "Natural language insights updated every minute — like having a UEFA Pro License coach explaining the match to you live." },
            { icon: "🔮", title: "Win Probability Engine", text: "Dynamic win probability curves update on every event, incorporating 2.4M+ data points from historical World Cup matches." },
            { icon: "📋", title: "Post-Match Deep Dives", text: "Full tactical reports generated within minutes of final whistle — shareable PDF with all key metrics and AI commentary." },
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
      <footer style={{ padding: "2rem 3rem", borderTop: "1px solid var(--border)", display: "flex", alignItems: "center", gap: "2rem" }}>
        <div className="nav-logo">World<span style={{ color: "var(--accent-green)" }}>Cup</span>Tactics</div>
        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>© 2026 WorldCupTactics.com — AI Tactics Analysis Platform</div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "1.5rem" }}>
          {["Privacy", "Terms", "API"].map((l) => (
            <a key={l} style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-muted)", textDecoration: "none", cursor: "pointer" }}>{l}</a>
          ))}
        </div>
      </footer>
    </>
  );
}
