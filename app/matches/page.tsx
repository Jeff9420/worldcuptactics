"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import { MATCHES } from "../lib/matches";

const ROUNDS = ["All", "Finals", "Semi-Finals", "Quarter-Finals", "Other Rounds"];
const ERAS = ["All Eras", "1950s–60s", "1970s–80s", "1990s–00s", "2010s–20s"];

function matchRoundBucket(stage: string): string {
  const s = stage.toLowerCase();
  if (s.includes("final") && !s.includes("semi") && !s.includes("quarter")) return "Finals";
  if (s.includes("semi")) return "Semi-Finals";
  if (s.includes("quarter")) return "Quarter-Finals";
  return "Other Rounds";
}

function matchEraBucket(year: number): string {
  if (year <= 1969) return "1950s–60s";
  if (year <= 1989) return "1970s–80s";
  if (year <= 2009) return "1990s–00s";
  return "2010s–20s";
}

export default function MatchesPage() {
  const [activeRound, setActiveRound] = useState("All");
  const [activeEra, setActiveEra] = useState("All Eras");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => MATCHES.filter((m) => {
    const roundOk = activeRound === "All" || matchRoundBucket(m.stage) === activeRound;
    const eraOk = activeEra === "All Eras" || matchEraBucket(m.year) === activeEra;
    const searchOk =
      !search ||
      m.home.name.toLowerCase().includes(search.toLowerCase()) ||
      m.away.name.toLowerCase().includes(search.toLowerCase()) ||
      m.year.toString().includes(search);
    return roundOk && eraOk && searchOk;
  }), [activeRound, activeEra, search]);

  // Group by tournament (year + name)
  const sortedGroups = useMemo(() => {
    const grouped = filtered.reduce<Record<string, typeof MATCHES>>((acc, m) => {
      const key = m.tournament;
      if (!acc[key]) acc[key] = [];
      acc[key].push(m);
      return acc;
    }, {});
    return Object.entries(grouped).sort(([a], [b]) => {
      const yearA = parseInt(a.match(/\d{4}/)?.[0] ?? "0");
      const yearB = parseInt(b.match(/\d{4}/)?.[0] ?? "0");
      return yearB - yearA;
    });
  }, [filtered]);

  const totalShown = filtered.length;

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

      {/* FILTER BAR */}
      <div style={{ padding: "0 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Row 1: Round + Search */}
        <div className="filter-bar" style={{ marginBottom: "0.5rem" }}>
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

        {/* Row 2: Era + Count */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", paddingBottom: "1rem", flexWrap: "wrap" }}>
          <span className="filter-label">Era:</span>
          {ERAS.map((era) => (
            <button
              key={era}
              className={`filter-btn ${activeEra === era ? "active" : ""}`}
              onClick={() => setActiveEra(era)}
            >
              {era}
            </button>
          ))}
          <div className="filter-spacer" />
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.72rem",
              color: "var(--text-muted)",
              letterSpacing: "0.06em",
              whiteSpace: "nowrap",
            }}
          >
            {totalShown === MATCHES.length
              ? `${MATCHES.length} matches`
              : `${totalShown} / ${MATCHES.length} matches`}
          </div>
        </div>
      </div>

      {/* MATCH LIST */}
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

              const stageBadgeColor = (() => {
                const b = matchRoundBucket(m.stage);
                if (b === "Finals") return { bg: "rgba(245,197,24,0.1)", color: "var(--accent-gold)", border: "rgba(245,197,24,0.3)" };
                if (b === "Semi-Finals") return { bg: "rgba(45,255,124,0.08)", color: "var(--accent-green)", border: "rgba(45,255,124,0.25)" };
                return { bg: "rgba(255,255,255,0.04)", color: "var(--text-muted)", border: "var(--border)" };
              })();

              return (
                <Link
                  key={m.id}
                  href={`/matches/${m.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div className="match-list-item">
                    <div className="match-date">
                      <div style={{
                        display: "inline-block",
                        background: stageBadgeColor.bg,
                        border: `1px solid ${stageBadgeColor.border}`,
                        color: stageBadgeColor.color,
                        borderRadius: "4px",
                        padding: "1px 6px",
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        marginBottom: "4px",
                      }}>
                        {m.stage}
                      </div>
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
