"use client";

import { useState } from "react";
import Link from "next/link";
import { Match, getPlayerPositions } from "../../lib/matches";

type Tab = "tactics" | "stats" | "timeline" | "ai";

function abbrev(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return name.length > 9 ? name.substring(0, 8).toUpperCase() + "." : name.toUpperCase();
  }
  const last = parts[parts.length - 1];
  if (last.length <= 9) return last.toUpperCase();
  return last.substring(0, 8).toUpperCase() + ".";
}

const EVENT_ICONS: Record<string, string> = {
  goal: "⚽",
  pen_goal: "⚽ P",
  pen_miss: "✗",
  own_goal: "⚽ OG",
  yellow: "🟨",
  red: "🟥",
  sub: "↕",
};

export default function MatchDetail({
  match,
  relatedMatches = [],
}: {
  match: Match;
  relatedMatches?: Match[];
}) {
  const [activeTab, setActiveTab] = useState<Tab>("tactics");
  const [activeCtrl, setActiveCtrl] = useState("Formation");

  const homePos = getPlayerPositions(match.home.formation, match.home.players, "home");
  const awayPos = getPlayerPositions(match.away.formation, match.away.players, "away");

  const statusLabel =
    match.status === "PSO"
      ? `AET · Pens ${match.penaltyScore}`
      : match.status === "AET"
      ? "After Extra Time"
      : "Full Time";

  const scoreLine = `${match.home.score}–${match.away.score}`;

  const xgTotal = match.xG.home + match.xG.away || 1;
  const homeXgPct = Math.round((match.xG.home / xgTotal) * 100);
  const awayXgPct = 100 - homeXgPct;

  return (
    <>
      {/* HEADER */}
      <div className="detail-header">
        <div className="detail-breadcrumb">
          <Link href="/matches" style={{ color: "var(--accent-green)", textDecoration: "none" }}>
            Matches
          </Link>
          <span style={{ margin: "0 0.4rem", color: "var(--text-muted)" }}>/</span>
          <span style={{ color: "var(--text-muted)" }}>{match.stage}</span>
          <span style={{ margin: "0 0.4rem", color: "var(--text-muted)" }}>/</span>
          <span>
            {match.home.name} vs {match.away.name}
          </span>
        </div>

        <div className="detail-scoreboard">
          <div className="detail-team">
            <div className="detail-flag">{match.home.flag}</div>
            <div>
              <div className="detail-team-name">{match.home.name}</div>
              <div className="detail-team-sub">
                {match.home.formation} · {match.possession.home}% possession
              </div>
            </div>
          </div>

          <div className="detail-score-center">
            <div className="detail-score-main">{scoreLine}</div>
            <div className="detail-score-info">
              {statusLabel} · {match.venue}
            </div>
            <div className="detail-tags" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
              <span className="match-tag tag-qf">{match.stage}</span>
              <span
                className="match-tag"
                style={{
                  background: "rgba(245,197,24,0.08)",
                  color: "var(--accent-gold)",
                  border: "1px solid rgba(245,197,24,0.2)",
                }}
              >
                {match.tournament}
              </span>
            </div>
          </div>

          <div className="detail-team right">
            <div className="detail-flag">{match.away.flag}</div>
            <div style={{ textAlign: "right" }}>
              <div className="detail-team-name">{match.away.name}</div>
              <div className="detail-team-sub">
                {match.away.formation} · {match.possession.away}% possession
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-content">
        {/* MAIN */}
        <div className="detail-main">
          <div className="tab-nav">
            {(
              [
                { label: "Formation", tab: "tactics" as Tab },
                { label: "Stats", tab: "stats" as Tab },
                { label: "Timeline", tab: "timeline" as Tab },
                { label: "AI Report", tab: "ai" as Tab },
              ] as { label: string; tab: Tab }[]
            ).map(({ label, tab }) => (
              <button
                key={label}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* ─── FORMATION TAB ─── */}
          {activeTab === "tactics" && (
            <div>
              <div className="pitch-controls">
                {["Formation", "Key Moments", "Historical Context"].map((c) => (
                  <button
                    key={c}
                    className={`pitch-ctrl-btn ${activeCtrl === c ? "active" : ""}`}
                    onClick={() => setActiveCtrl(c)}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <div className="pitch-container">
                <svg
                  viewBox="0 0 680 900"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", display: "block" }}
                >
                  <defs>
                    <radialGradient id="pg2" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#1e5c30" />
                      <stop offset="100%" stopColor="#0f3018" />
                    </radialGradient>
                  </defs>
                  <rect width="680" height="900" fill="url(#pg2)" />
                  {[0, 180, 360, 540, 720].map((y) => (
                    <rect key={y} x="0" y={y} width="680" height="90" fill="rgba(0,0,0,0.06)" />
                  ))}
                  {/* Pitch markings */}
                  <rect
                    x="30"
                    y="30"
                    width="620"
                    height="840"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="450"
                    x2="650"
                    y2="450"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="2"
                  />
                  <circle
                    cx="340"
                    cy="450"
                    r="80"
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="2"
                  />
                  <circle cx="340" cy="450" r="5" fill="rgba(255,255,255,0.7)" />
                  {/* Penalty areas */}
                  <rect
                    x="170"
                    y="30"
                    width="340"
                    height="145"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="170"
                    y="725"
                    width="340"
                    height="145"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="250"
                    y="30"
                    width="180"
                    height="65"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.2"
                  />
                  <rect
                    x="250"
                    y="805"
                    width="180"
                    height="65"
                    fill="none"
                    stroke="rgba(255,255,255,0.3)"
                    strokeWidth="1.2"
                  />
                  {/* Goals */}
                  <rect
                    x="295"
                    y="14"
                    width="90"
                    height="18"
                    rx="3"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                  />
                  <rect
                    x="295"
                    y="868"
                    width="90"
                    height="18"
                    rx="3"
                    fill="rgba(255,255,255,0.1)"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                  />
                  <circle cx="340" cy="118" r="4" fill="rgba(255,255,255,0.6)" />
                  <circle cx="340" cy="782" r="4" fill="rgba(255,255,255,0.6)" />

                  {/* Away players (top half, defends bottom goal) */}
                  {awayPos.map((p, i) => {
                    const isGK = i === 0;
                    const r = isGK ? 22 : 20;
                    const sw = isGK ? 2.5 : 2;
                    const label = abbrev(p.name);
                    const fsize = label.length > 7 ? 10 : 12;
                    return (
                      <g key={`away-${i}`}>
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={r}
                          fill={match.away.colorDim}
                          stroke={match.away.color}
                          strokeWidth={sw}
                        />
                        <text
                          x={p.x}
                          y={p.y - 2}
                          textAnchor="middle"
                          fill={match.away.color}
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: fsize,
                            fontWeight: 700,
                          }}
                        >
                          {label}
                        </text>
                        {isGK && (
                          <text
                            x={p.x}
                            y={p.y + 11}
                            textAnchor="middle"
                            fill={match.away.color + "99"}
                            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}
                          >
                            GK
                          </text>
                        )}
                      </g>
                    );
                  })}

                  {/* Home players (bottom half, defends top goal) */}
                  {homePos.map((p, i) => {
                    const isGK = i === 0;
                    const r = isGK ? 22 : 20;
                    const sw = isGK ? 2.5 : 2;
                    const label = abbrev(p.name);
                    const fsize = label.length > 7 ? 10 : 12;
                    return (
                      <g key={`home-${i}`}>
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={r}
                          fill={match.home.colorDim}
                          stroke={match.home.color}
                          strokeWidth={sw}
                        />
                        <text
                          x={p.x}
                          y={p.y - 2}
                          textAnchor="middle"
                          fill={match.home.color}
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: fsize,
                            fontWeight: 700,
                          }}
                        >
                          {label}
                        </text>
                        {isGK && (
                          <text
                            x={p.x}
                            y={p.y + 11}
                            textAnchor="middle"
                            fill={match.home.color + "99"}
                            style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}
                          >
                            GK
                          </text>
                        )}
                      </g>
                    );
                  })}

                  {/* Formation labels */}
                  <rect x="20" y="20" width="130" height="22" rx="3" fill="rgba(0,0,0,0.65)" />
                  <circle cx="35" cy="31" r="6" fill="none" stroke={match.away.color} strokeWidth="1.5" />
                  <text
                    x="46"
                    y="35"
                    fill={match.away.color}
                    style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700 }}
                  >
                    {match.away.name.toUpperCase()} {match.away.formation}
                  </text>

                  <rect x="20" y="858" width="130" height="22" rx="3" fill="rgba(0,0,0,0.65)" />
                  <circle cx="35" cy="869" r="6" fill="none" stroke={match.home.color} strokeWidth="1.5" />
                  <text
                    x="46"
                    y="873"
                    fill={match.home.color}
                    style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700 }}
                  >
                    {match.home.name.toUpperCase()} {match.home.formation}
                  </text>
                </svg>
              </div>

              {activeCtrl === "Formation" && (
                <div className="ai-insight" style={{ marginTop: "1.25rem" }}>
                  <div className="insight-label">⚡ Tactical Formation Read</div>
                  <div className="insight-text">{match.tacticalAnalysis.split("\n\n")[0]}</div>
                </div>
              )}

              {activeCtrl === "Key Moments" && (
                <div className="ai-insight" style={{ marginTop: "1.25rem" }}>
                  <div className="insight-label">📍 Key Tactical Moments</div>
                  <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                    {match.keyMoments.map((m, i) => (
                      <li
                        key={i}
                        style={{
                          marginBottom: "0.6rem",
                          lineHeight: 1.6,
                          color: "var(--text-secondary)",
                        }}
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeCtrl === "Historical Context" && (
                <div className="ai-insight" style={{ marginTop: "1.25rem" }}>
                  <div className="insight-label">🏛️ Historical Significance</div>
                  <div className="insight-text">{match.historicalSignificance}</div>
                </div>
              )}
            </div>
          )}

          {/* ─── STATS TAB ─── */}
          {activeTab === "stats" && (
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "1.25rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: match.home.color,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {match.home.flag} {match.home.name.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "3rem",
                      fontWeight: 800,
                      color: match.home.color,
                      lineHeight: 1,
                    }}
                  >
                    {match.xG.home.toFixed(2)}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Expected Goals (xG)
                  </div>
                </div>
                <div
                  style={{
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "6px",
                    padding: "1.25rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: match.away.color,
                      marginBottom: "0.3rem",
                    }}
                  >
                    {match.away.flag} {match.away.name.toUpperCase()}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "3rem",
                      fontWeight: 800,
                      color: match.away.color,
                      lineHeight: 1,
                    }}
                  >
                    {match.xG.away.toFixed(2)}
                  </div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    Expected Goals (xG)
                  </div>
                </div>
              </div>

              {match.stats.map((s) => (
                <div key={s.label} className="stat-bar-row">
                  <div className="stat-bar-header">
                    <span className="stat-bar-label">{s.label}</span>
                    <span className="stat-bar-vals">
                      <span className="val-a">{s.home}</span>
                      {" · "}
                      <span className="val-b">{s.away}</span>
                    </span>
                  </div>
                  <div className="stat-bar-track">
                    <div className="stat-bar-a" style={{ width: `${s.homeWidth}%` }} />
                    <div className="stat-bar-b" style={{ width: `${s.awayWidth}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ─── TIMELINE TAB ─── */}
          {activeTab === "timeline" && (
            <div className="timeline">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1.25rem",
                  paddingBottom: "0.75rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: match.home.color,
                  }}
                >
                  {match.home.flag} {match.home.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: match.away.color,
                  }}
                >
                  {match.away.name} {match.away.flag}
                </span>
              </div>

              {match.timeline.map((e, i) => {
                const isHome = e.side === "home";
                const icon = EVENT_ICONS[e.type] ?? "";
                const dotColor =
                  e.type === "goal" || e.type === "pen_goal"
                    ? "var(--accent-green)"
                    : e.type === "yellow"
                    ? "#F5C518"
                    : e.type === "red" || e.type === "pen_miss" || e.type === "own_goal"
                    ? "var(--accent-red)"
                    : "var(--text-muted)";

                return (
                  <div key={i} className={`timeline-event ${isHome ? "home" : "away"}`}>
                    <div className="timeline-min">{e.minute}</div>
                    <div className="timeline-dot" style={{ background: dotColor }} />
                    <div
                      className="timeline-content"
                      style={!isHome ? { textAlign: "right" } : {}}
                    >
                      <div className="timeline-player">
                        {icon} {e.player}
                      </div>
                      {e.description && (
                        <div className="timeline-type">{e.description}</div>
                      )}
                    </div>
                  </div>
                );
              })}

              <div
                style={{
                  marginTop: "0.75rem",
                  padding: "0.6rem",
                  background: "var(--bg-elevated)",
                  borderRadius: "4px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono',monospace",
                    fontSize: "0.68rem",
                    color: "var(--text-muted)",
                  }}
                >
                  {statusLabel} · {match.date} · {match.city}
                </span>
              </div>
            </div>
          )}

          {/* ─── AI REPORT TAB ─── */}
          {activeTab === "ai" && (
            <div>
              <div className="ai-insight" style={{ marginBottom: "1rem" }}>
                <div className="insight-label">🤖 AI Tactical Analysis</div>
                <div className="insight-text" style={{ whiteSpace: "pre-line" }}>
                  {match.tacticalAnalysis}
                </div>
              </div>
              <div className="ai-insight" style={{ marginBottom: "1rem" }}>
                <div className="insight-label">📍 Key Tactical Moments</div>
                <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                  {match.keyMoments.map((m, i) => (
                    <li
                      key={i}
                      style={{
                        marginBottom: "0.6rem",
                        lineHeight: 1.6,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ai-insight">
                <div className="insight-label">🏛️ Historical Significance</div>
                <div className="insight-text">{match.historicalSignificance}</div>
              </div>
            </div>
          )}
        </div>

        {/* ─── SIDEBAR ─── */}
        <div className="detail-sidebar">
          {/* Match Info */}
          <div className="sidebar-card">
            <div className="sidebar-title">Match Info</div>
            <div
              style={{
                fontSize: "0.8rem",
                lineHeight: 2.2,
                color: "var(--text-secondary)",
              }}
            >
              {[
                ["Date", match.date],
                ["Venue", match.venue],
                ["City", match.city],
                ["Stage", match.stage],
                ["Tournament", match.tournament],
                ["Result", statusLabel],
              ].map(([label, val]) => (
                <div key={label}>
                  <span style={{ color: "var(--text-muted)", width: "80px", display: "inline-block" }}>
                    {label}
                  </span>
                  {val}
                </div>
              ))}
            </div>
          </div>

          {/* xG */}
          <div className="sidebar-card">
            <div className="sidebar-title">Expected Goals (xG)</div>
            <div className="xg-bar">
              <div className="xg-team" style={{ color: match.home.color }}>
                {match.home.name.substring(0, 3).toUpperCase()}
              </div>
              <div className="xg-track">
                <div
                  className="xg-fill"
                  style={{ width: `${homeXgPct}%`, background: match.home.color }}
                />
              </div>
              <div className="xg-val" style={{ color: match.home.color }}>
                {match.xG.home.toFixed(2)}
              </div>
            </div>
            <div className="xg-bar">
              <div className="xg-team" style={{ color: match.away.color }}>
                {match.away.name.substring(0, 3).toUpperCase()}
              </div>
              <div className="xg-track">
                <div
                  className="xg-fill"
                  style={{ width: `${awayXgPct}%`, background: match.away.color }}
                />
              </div>
              <div className="xg-val" style={{ color: match.away.color }}>
                {match.xG.away.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="sidebar-card">
            <div className="sidebar-title">Top Performers</div>
            {match.topPerformers.map((p, i) => {
              const initials = p.name
                .split(" ")
                .map((w) => w[0])
                .join("")
                .substring(0, 2)
                .toUpperCase();
              const ratingColor =
                p.rating >= 9.5
                  ? "var(--accent-green)"
                  : p.rating >= 8.5
                  ? "#8BFF4A"
                  : p.rating >= 7.5
                  ? "var(--accent-gold)"
                  : "var(--text-secondary)";
              return (
                <div key={i} className="player-row">
                  <div className="player-num">{i + 1}</div>
                  <div className="player-avatar">{initials}</div>
                  <div style={{ flex: 1 }}>
                    <div className="player-name">{p.name}</div>
                    <div className="player-pos">{p.position}</div>
                  </div>
                  <div className="player-rating" style={{ color: ratingColor }}>
                    {p.rating.toFixed(1)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Possession & xG grid */}
          <div className="sidebar-card">
            <div className="sidebar-title">Key Stats</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {[
                {
                  val: `${match.possession.home}%`,
                  label: `${match.home.name} Poss.`,
                  color: match.home.color,
                },
                {
                  val: `${match.xG.home.toFixed(1)}`,
                  label: `${match.home.name} xG`,
                  color: match.home.color,
                },
                {
                  val: `${match.possession.away}%`,
                  label: `${match.away.name} Poss.`,
                  color: match.away.color,
                },
                {
                  val: `${match.xG.away.toFixed(1)}`,
                  label: `${match.away.name} xG`,
                  color: match.away.color,
                },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--bg-deep)",
                    borderRadius: "4px",
                    padding: "0.75rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                      color: s.color,
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      marginTop: "2px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RELATED MATCHES */}
      {relatedMatches.length > 0 && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "var(--bg-surface)",
            padding: "2.5rem 3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              More Classic Matches
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.68rem",
                color: "var(--text-muted)",
                letterSpacing: "0.1em",
              }}
            >
              // TACTICAL BREAKDOWNS
            </div>
            <Link
              href="/matches"
              style={{
                marginLeft: "auto",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--accent-green)",
                textDecoration: "none",
              }}
            >
              All Matches →
            </Link>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
            }}
          >
            {relatedMatches.map((r) => {
              const score = `${r.home.score}–${r.away.score}`;
              const statusText =
                r.status === "PSO"
                  ? `Pens ${r.penaltyScore}`
                  : r.status === "AET"
                  ? "AET"
                  : "Full Time";
              return (
                <Link
                  key={r.id}
                  href={`/matches/${r.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "1.25rem",
                      cursor: "pointer",
                      transition: "border-color 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.borderColor =
                        "var(--border-mid)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLDivElement).style.borderColor =
                        "var(--border)")
                    }
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "0.5rem",
                        marginBottom: "0.75rem",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: "rgba(45,255,124,0.08)",
                          color: "var(--accent-green)",
                          border: "1px solid rgba(45,255,124,0.2)",
                          borderRadius: "3px",
                          padding: "0.15rem 0.5rem",
                        }}
                      >
                        {r.year}
                      </span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.65rem",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                          background: "rgba(245,197,24,0.08)",
                          color: "var(--accent-gold)",
                          border: "1px solid rgba(245,197,24,0.2)",
                          borderRadius: "3px",
                          padding: "0.15rem 0.5rem",
                        }}
                      >
                        {r.stage}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontSize: "1rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                        }}
                      >
                        {r.home.flag} {r.home.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontSize: "1.3rem",
                          fontWeight: 800,
                          color: "var(--accent-green)",
                          flexShrink: 0,
                        }}
                      >
                        {score}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontSize: "1rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          textAlign: "right",
                        }}
                      >
                        {r.away.name} {r.away.flag}
                      </div>
                    </div>
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.68rem",
                        color: "var(--text-muted)",
                        marginTop: "0.4rem",
                        textAlign: "center",
                      }}
                    >
                      {statusText} · xG {r.xG.home.toFixed(1)} vs {r.xG.away.toFixed(1)}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
