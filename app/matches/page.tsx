"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import { MATCHES } from "../lib/matches";

const ROUNDS = ["All", "Finals", "Semi-Finals", "Quarter-Finals", "Other Rounds"];

function matchRoundBucket(stage: string): string {
  const s = stage.toLowerCase();
  if (s.includes("final") && !s.includes("semi") && !s.includes("quarter")) return "Finals";
  if (s.includes("semi")) return "Semi-Finals";
  if (s.includes("quarter")) return "Quarter-Finals";
  return "Other Rounds";
}

export default function MatchesPage() {
  const [activeRound, setActiveRound] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = MATCHES.filter((m) => {
    const roundOk =
      activeRound === "All" || matchRoundBucket(m.stage) === activeRound;
    const searchOk =
      !search ||
      m.home.name.toLowerCase().includes(search.toLowerCase()) ||
      m.away.name.toLowerCase().includes(search.toLowerCase()) ||
      m.year.toString().includes(search);
    return roundOk && searchOk;
  });

  // Group by tournament (year + name)
  const grouped = filtered.reduce<Record<string, typeof MATCHES>>((acc, m) => {
    const key = `${m.tournament}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(m);
    return acc;
  }, {});

  // Sort groups newest first
  const sortedGroups = Object.entries(grouped).sort(([a], [b]) => {
    const yearA = parseInt(a.match(/\d{4}/)?.[0] ?? "0");
    const yearB = parseInt(b.match(/\d{4}/)?.[0] ?? "0");
    return yearB - yearA;
  });

  return (
    <>
      <Nav />

      <div className="page-header">
        <div className="page-title">Match Analysis Hub</div>
        <div className="page-desc">
          Tactical breakdowns of the greatest World Cup matches in history — formations, xG, key
          moments, and AI analysis.
        </div>
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
        <input
          className="search-box"
          type="text"
          placeholder="🔍 Search teams or year..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="matches-section">
        {sortedGroups.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "4rem",
              color: "var(--text-muted)",
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.8rem",
            }}
          >
            No matches found.
          </div>
        )}

        {sortedGroups.map(([tournament, matches]) => (
          <div key={tournament}>
            <div className="round-label">{tournament}</div>
            {matches.map((m) => {
              const statusColor =
                m.status === "FT"
                  ? "var(--text-muted)"
                  : m.status === "AET"
                  ? "var(--accent-gold)"
                  : "var(--accent-green)";

              const statusText =
                m.status === "PSO"
                  ? `PENS ${m.penaltyScore}`
                  : m.status === "AET"
                  ? "AET"
                  : "FULL TIME";

              const scoreDisplay = `${m.home.score}–${m.away.score}`;

              const xgHomeColor =
                m.xG.home > m.xG.away ? "var(--accent-green)" : "var(--text-secondary)";
              const xgAwayColor =
                m.xG.away > m.xG.home ? "var(--accent-gold)" : "var(--text-secondary)";

              return (
                <Link
                  key={m.id}
                  href={`/matches/${m.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="match-list-item">
                    <div className="match-date">
                      {m.date.split(",")[0]}
                      <br />
                      <span style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}>
                        {m.year}
                      </span>
                    </div>

                    <div className="list-team">
                      <div className="list-flag">{m.home.flag}</div>
                      <div>
                        <div className="list-name">{m.home.name}</div>
                        <div className="list-formation-sm">{m.home.formation}</div>
                      </div>
                    </div>

                    <div className="list-score">
                      <div className="list-score-main">{scoreDisplay}</div>
                      <div className="list-score-min" style={{ color: statusColor }}>
                        {statusText}
                      </div>
                    </div>

                    <div className="list-team right">
                      <div className="list-flag">{m.away.flag}</div>
                      <div style={{ textAlign: "right" }}>
                        <div className="list-name">{m.away.name}</div>
                        <div className="list-formation-sm">{m.away.formation}</div>
                      </div>
                    </div>

                    <div style={{ textAlign: "center" }}>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.7rem",
                          color: xgHomeColor,
                        }}
                      >
                        xG {m.xG.home.toFixed(2)}
                      </div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.7rem",
                          color: xgAwayColor,
                        }}
                      >
                        vs {m.xG.away.toFixed(2)}
                      </div>
                    </div>

                    <div className="list-actions" onClick={(e) => e.preventDefault()}>
                      <button className="list-btn list-btn-primary">AI Analysis</button>
                      <button className="list-btn list-btn-ghost">Lineup</button>
                    </div>
                  </div>
                </Link>
              );
            })}
            <div style={{ height: "1.5rem" }} />
          </div>
        ))}
      </div>
    </>
  );
}
