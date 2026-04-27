"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";

const ROUNDS = ["All", "Group Stage", "Round of 16", "Quarter-Finals", "Semi-Finals", "Final"];

const MATCHES = [
  {
    id: "brazil-vs-germany",
    date: "JUL 4", time: "20:00 UTC",
    flag1: "🇧🇷", name1: "Brazil", form1: "4-3-3",
    score: "2–1", status: "● LIVE 67'", statusColor: "var(--accent-red)",
    flag2: "🇩🇪", name2: "Germany", form2: "4-4-2",
    xgA: "xG 2.41", xgB: "vs 0.87", xgColorA: "var(--accent-green)",
    round: "Quarter-Finals",
  },
  {
    id: "france-vs-portugal",
    date: "JUL 4", time: "22:30 UTC",
    flag1: "🇫🇷", name1: "France", form1: "4-2-3-1",
    score: "1–1", status: "● LIVE 74'", statusColor: "var(--accent-red)",
    flag2: "🇵🇹", name2: "Portugal", form2: "4-3-3",
    xgA: "xG 1.67", xgB: "vs 1.44", xgColorA: "var(--accent-green)",
    round: "Quarter-Finals",
  },
  {
    id: "argentina-vs-netherlands",
    date: "JUL 5", time: "19:00 UTC",
    flag1: "🇦🇷", name1: "Argentina", form1: "4-3-3",
    score: "3–0", status: "FULL TIME", statusColor: "var(--text-muted)",
    flag2: "🇳🇱", name2: "Netherlands", form2: "3-4-3",
    xgA: "xG 3.12", xgB: "vs 0.44", xgColorA: "var(--accent-green)",
    round: "Quarter-Finals",
  },
  {
    id: "england-vs-spain",
    date: "JUL 5", time: "21:30 UTC",
    flag1: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", name1: "England", form1: "4-3-3",
    score: "vs", status: "UPCOMING", statusColor: "var(--accent-gold)",
    flag2: "🇪🇸", name2: "Spain", form2: "4-3-3",
    xgA: "ENG 38%", xgB: "ESP 45%", xgColorA: "var(--text-muted)",
    round: "Quarter-Finals",
  },
  {
    id: "japan-vs-germany",
    date: "JUN 28", time: "20:00 UTC",
    flag1: "🇯🇵", name1: "Japan", form1: "4-2-3-1",
    score: "1–2", status: "FULL TIME", statusColor: "var(--text-muted)",
    flag2: "🇩🇪", name2: "Germany", form2: "4-4-2",
    xgA: "xG 1.22", xgB: "vs 1.89", xgColorA: "var(--text-secondary)",
    round: "Round of 16",
  },
  {
    id: "morocco-vs-belgium",
    date: "JUL 1", time: "19:00 UTC",
    flag1: "🇲🇦", name1: "Morocco", form1: "5-4-1",
    score: "0–0", status: "AET · PEN 4–3", statusColor: "var(--text-muted)",
    flag2: "🇧🇪", name2: "Belgium", form2: "4-3-3",
    xgA: "xG 0.78", xgB: "vs 1.44", xgColorA: "var(--text-secondary)",
    round: "Round of 16",
  },
];

export default function MatchesPage() {
  const [activeRound, setActiveRound] = useState("All");

  const filtered = activeRound === "All" ? MATCHES : MATCHES.filter(m => m.round === activeRound);

  const grouped = filtered.reduce<Record<string, typeof MATCHES>>((acc, m) => {
    if (!acc[m.round]) acc[m.round] = [];
    acc[m.round].push(m);
    return acc;
  }, {});

  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="page-title">Match Analysis Hub</div>
        <div className="page-desc">AI-powered tactical breakdowns for all 64 World Cup 2026 matches</div>
      </div>

      <div className="filter-bar">
        <span className="filter-label">Round:</span>
        {ROUNDS.map((r) => (
          <button
            key={r}
            className={`filter-btn ${activeRound === r ? "active" : ""}`}
            onClick={() => setActiveRound(r)}
          >
            {r}
          </button>
        ))}
        <div className="filter-spacer" />
        <input className="search-box" type="text" placeholder="🔍 Search teams..." />
      </div>

      <div className="matches-section">
        {Object.entries(grouped).map(([round, matches]) => (
          <div key={round}>
            <div className="round-label">{round}</div>
            {matches.map((m) => (
              <Link key={m.id} href={`/matches/${m.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <div className="match-list-item">
                  <div className="match-date">
                    {m.date}<br />
                    <span style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>{m.time}</span>
                  </div>
                  <div className="list-team">
                    <div className="list-flag">{m.flag1}</div>
                    <div>
                      <div className="list-name">{m.name1}</div>
                      <div className="list-formation-sm">{m.form1}</div>
                    </div>
                  </div>
                  <div className="list-score">
                    <div className="list-score-main" style={m.score === "vs" ? { fontSize: "1rem", color: "var(--text-muted)", marginTop: "0.4rem" } : {}}>{m.score}</div>
                    <div className="list-score-min" style={{ color: m.statusColor }}>{m.status}</div>
                  </div>
                  <div className="list-team right">
                    <div className="list-flag">{m.flag2}</div>
                    <div style={{ textAlign: "right" }}>
                      <div className="list-name">{m.name2}</div>
                      <div className="list-formation-sm">{m.form2}</div>
                    </div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: m.xgColorA }}>{m.xgA}</div>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.7rem", color: "var(--text-muted)" }}>{m.xgB}</div>
                  </div>
                  <div className="list-actions" onClick={(e) => e.preventDefault()}>
                    <button className="list-btn list-btn-primary">AI Analysis</button>
                    <button className="list-btn list-btn-ghost">Lineup</button>
                  </div>
                </div>
              </Link>
            ))}
            <div style={{ height: "1.5rem" }} />
          </div>
        ))}
      </div>
    </>
  );
}
