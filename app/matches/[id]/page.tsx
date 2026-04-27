"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";

type Tab = "tactics" | "stats" | "timeline" | "ai";

export default function MatchDetailPage() {
  const [activeTab, setActiveTab] = useState<Tab>("tactics");
  const [activeCtrl, setActiveCtrl] = useState("Formation");

  return (
    <>
      <Nav />

      {/* HEADER */}
      <div className="detail-header">
        <div className="detail-breadcrumb">
          <Link href="/matches" className="detail-breadcrumb" style={{ marginBottom: 0, display: "inline" }}>Matches</Link>
          <span>/</span>
          <span>Quarter-Finals</span>
          <span>/</span>
          <span>Brazil vs Germany</span>
        </div>
        <div className="detail-scoreboard">
          <div className="detail-team">
            <div className="detail-flag">🇧🇷</div>
            <div>
              <div className="detail-team-name">Brazil</div>
              <div className="detail-team-sub">4-3-3 · Possession 64%</div>
            </div>
          </div>
          <div className="detail-score-center">
            <div className="detail-score-main">2 – 1</div>
            <div className="detail-score-info">67&apos; · Estadio Azteca · Mexico City</div>
            <div className="detail-tags" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
              <span className="match-tag tag-live">● Live</span>
              <span className="match-tag tag-qf">Quarter-Final</span>
            </div>
          </div>
          <div className="detail-team right">
            <div className="detail-flag">🇩🇪</div>
            <div style={{ textAlign: "right" }}>
              <div className="detail-team-name">Germany</div>
              <div className="detail-team-sub">4-4-2 · Possession 36%</div>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-content">
        {/* MAIN */}
        <div className="detail-main">
          <div className="tab-nav">
            {([
              { label: "Formation", tab: "tactics" as Tab },
              { label: "Stats", tab: "stats" as Tab },
              { label: "Timeline", tab: "timeline" as Tab },
              { label: "AI Report", tab: "ai" as Tab },
            ]).map(({ label, tab }) => (
              <button
                key={label}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* FORMATION TAB */}
          {activeTab === "tactics" && (
            <div>
              <div className="pitch-controls">
                {["Formation", "Heatmap", "Press Map", "Pass Lanes", "Touches"].map((c) => (
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
                <svg viewBox="0 0 680 900" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", display: "block" }}>
                  <defs>
                    <radialGradient id="pg" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#1e5c30" />
                      <stop offset="100%" stopColor="#0f3018" />
                    </radialGradient>
                  </defs>
                  <rect width="680" height="900" fill="url(#pg)" />
                  <rect x="0" y="0" width="680" height="90" fill="rgba(0,0,0,0.07)" />
                  <rect x="0" y="180" width="680" height="90" fill="rgba(0,0,0,0.07)" />
                  <rect x="0" y="360" width="680" height="90" fill="rgba(0,0,0,0.07)" />
                  <rect x="0" y="540" width="680" height="90" fill="rgba(0,0,0,0.07)" />
                  <rect x="0" y="720" width="680" height="90" fill="rgba(0,0,0,0.07)" />
                  <rect x="30" y="30" width="620" height="840" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                  <line x1="30" y1="450" x2="650" y2="450" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                  <circle cx="340" cy="450" r="80" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                  <circle cx="340" cy="450" r="5" fill="rgba(255,255,255,0.7)" />
                  <rect x="170" y="30" width="340" height="145" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <rect x="170" y="725" width="340" height="145" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <rect x="250" y="30" width="180" height="65" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                  <rect x="250" y="805" width="180" height="65" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
                  <rect x="295" y="14" width="90" height="18" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <rect x="295" y="868" width="90" height="18" rx="3" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <circle cx="340" cy="118" r="4" fill="rgba(255,255,255,0.6)" />
                  <circle cx="340" cy="782" r="4" fill="rgba(255,255,255,0.6)" />
                  {/* Press zone */}
                  <ellipse cx="200" cy="200" rx="120" ry="70" fill="rgba(255,75,75,0.1)" stroke="rgba(255,75,75,0.3)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <ellipse cx="480" cy="200" rx="120" ry="70" fill="rgba(255,75,75,0.1)" stroke="rgba(255,75,75,0.3)" strokeWidth="1.5" strokeDasharray="5 4" />
                  <text x="340" y="198" textAnchor="middle" fill="rgba(255,75,75,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, fontWeight: 500 }}>HIGH PRESS ZONE</text>
                  {/* Germany (top) - Gold */}
                  <circle cx="340" cy="75" r="22" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2.5" />
                  <text x="340" y="69" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700 }}>NEUER</text>
                  <text x="340" y="83" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>GK · 1</text>
                  <circle cx="120" cy="200" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="120" y="195" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>RAUM</text>
                  <text x="120" y="208" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>LB · 5</text>
                  <circle cx="250" cy="200" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="250" y="195" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>SCHLOTT.</text>
                  <text x="250" y="208" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CB · 4</text>
                  <circle cx="430" cy="200" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="430" y="195" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>TAHA</text>
                  <text x="430" y="208" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CB · 15</text>
                  <circle cx="560" cy="200" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="560" y="195" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>KIMMICH</text>
                  <text x="560" y="208" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>RB · 6</text>
                  <circle cx="120" cy="330" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="120" y="325" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>WIRTZ</text>
                  <text x="120" y="338" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>LM · 10</text>
                  <circle cx="255" cy="320" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="255" y="315" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>KROOS</text>
                  <text x="255" y="328" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CM · 8</text>
                  <circle cx="425" cy="320" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="425" y="315" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>GÜNDOGAN</text>
                  <text x="425" y="328" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CM · 21</text>
                  <circle cx="560" cy="330" r="20" fill="rgba(245,197,24,0.18)" stroke="#F5C518" strokeWidth="2" />
                  <text x="560" y="325" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>MUSIALA</text>
                  <text x="560" y="338" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>RM · 14</text>
                  <circle cx="240" cy="410" r="20" fill="rgba(245,197,24,0.25)" stroke="#F5C518" strokeWidth="2.5" />
                  <text x="240" y="405" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>FÜLLK.</text>
                  <text x="240" y="418" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CF · 9</text>
                  <circle cx="440" cy="410" r="20" fill="rgba(245,197,24,0.25)" stroke="#F5C518" strokeWidth="2.5" />
                  <text x="440" y="405" textAnchor="middle" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>HAVERTZ</text>
                  <text x="440" y="418" textAnchor="middle" fill="rgba(245,197,24,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CF · 7</text>
                  {/* Brazil (bottom) - Green */}
                  <circle cx="340" cy="825" r="22" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2.5" />
                  <text x="340" y="819" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 13, fontWeight: 700 }}>ALISSON</text>
                  <text x="340" y="833" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>GK · 1</text>
                  <circle cx="110" cy="690" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="110" y="685" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>GUILHERME</text>
                  <text x="110" y="698" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>LB · 6</text>
                  <circle cx="250" cy="695" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="250" y="690" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>MARQUIN.</text>
                  <text x="250" y="703" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CB · 4</text>
                  <circle cx="430" cy="695" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="430" y="690" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>MILITÃO</text>
                  <text x="430" y="703" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CB · 3</text>
                  <circle cx="570" cy="690" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="570" y="685" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>EDER</text>
                  <text x="570" y="698" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>RB · 2</text>
                  <circle cx="175" cy="570" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="175" y="565" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>FRED</text>
                  <text x="175" y="578" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CM · 8</text>
                  <circle cx="340" cy="555" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="340" y="550" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>CASEMIRO</text>
                  <text x="340" y="563" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>DM · 5</text>
                  <circle cx="505" cy="570" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="505" y="565" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>LUCAS</text>
                  <text x="505" y="578" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>CM · 10</text>
                  <circle cx="120" cy="468" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="120" y="463" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>VINICIUS</text>
                  <text x="120" y="476" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>LW · 11</text>
                  <circle cx="340" cy="478" r="24" fill="rgba(45,255,124,0.3)" stroke="#2DFF7C" strokeWidth="3" />
                  <text x="340" y="472" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 14, fontWeight: 800 }}>RODRYGO</text>
                  <text x="340" y="487" textAnchor="middle" fill="rgba(45,255,124,0.8)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10 }}>ST · 9</text>
                  <circle cx="560" cy="468" r="20" fill="rgba(45,255,124,0.2)" stroke="#2DFF7C" strokeWidth="2" />
                  <text x="560" y="463" textAnchor="middle" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 12, fontWeight: 700 }}>RAPHINHA</text>
                  <text x="560" y="476" textAnchor="middle" fill="rgba(45,255,124,0.7)" style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 9 }}>RW · 7</text>
                  {/* Pass lines */}
                  <line x1="340" y1="555" x2="340" y2="478" stroke="rgba(45,255,124,0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="175" y1="570" x2="120" y2="468" stroke="rgba(45,255,124,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="505" y1="570" x2="560" y2="468" stroke="rgba(45,255,124,0.2)" strokeWidth="1.5" strokeDasharray="6 4" />
                  <line x1="110" y1="690" x2="175" y2="570" stroke="rgba(45,255,124,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="570" y1="690" x2="505" y2="570" stroke="rgba(45,255,124,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Legend */}
                  <rect x="30" y="458" width="100" height="20" rx="3" fill="rgba(0,0,0,0.5)" />
                  <circle cx="44" cy="468" r="5" fill="none" stroke="#2DFF7C" strokeWidth="1.5" />
                  <text x="54" y="472" fill="#2DFF7C" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700 }}>BRAZIL</text>
                  <rect x="140" y="458" width="110" height="20" rx="3" fill="rgba(0,0,0,0.5)" />
                  <circle cx="154" cy="468" r="5" fill="none" stroke="#F5C518" strokeWidth="1.5" />
                  <text x="164" y="472" fill="#F5C518" style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700 }}>GERMANY</text>
                </svg>
              </div>

              <div className="ai-insight">
                <div className="insight-label">⚡ AI Formation Read · 67&apos;</div>
                <div className="insight-text">Brazil is operating a <strong>modified 4-3-3</strong> with Vinicius Jr inverting from the left to overload Germany&apos;s right channel. Casemiro is screening the back four with a 92% defensive duel success rate this half. <strong>Key vulnerability:</strong> space behind Germany&apos;s high defensive line — Rodrygo has exploited this 4× in the second half.</div>
              </div>
            </div>
          )}

          {/* STATS TAB */}
          {activeTab === "stats" && (
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1.25rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-green)", marginBottom: "0.3rem" }}>🇧🇷 BRAZIL</div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "3rem", fontWeight: 800, color: "var(--accent-green)", lineHeight: 1 }}>2.41</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Expected Goals (xG)</div>
                </div>
                <div style={{ background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: "6px", padding: "1.25rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent-gold)", marginBottom: "0.3rem" }}>🇩🇪 GERMANY</div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "3rem", fontWeight: 800, color: "var(--accent-gold)", lineHeight: 1 }}>0.87</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Expected Goals (xG)</div>
                </div>
              </div>
              {[
                { label: "Possession", a: "64%", b: "36%", wa: 64, wb: 36 },
                { label: "Total Shots", a: "18", b: "6", wa: 75, wb: 25 },
                { label: "Shots on Target", a: "9", b: "3", wa: 75, wb: 25 },
                { label: "Passes", a: "487", b: "278", wa: 64, wb: 36 },
                { label: "Pass Accuracy", a: "91%", b: "84%", wa: 52, wb: 48 },
                { label: "Tackles Won", a: "12", b: "8", wa: 60, wb: 40 },
                { label: "Press Intensity (PPDA)", a: "5.4", b: "9.2", wa: 63, wb: 37 },
                { label: "Corners", a: "7", b: "2", wa: 78, wb: 22 },
                { label: "Fouls", a: "9", b: "14", wa: 39, wb: 61 },
              ].map((s) => (
                <div key={s.label} className="stat-bar-row">
                  <div className="stat-bar-header">
                    <span className="stat-bar-label">{s.label}</span>
                    <span className="stat-bar-vals"><span className="val-a">{s.a}</span> · <span className="val-b">{s.b}</span></span>
                  </div>
                  <div className="stat-bar-track">
                    <div className="stat-bar-a" style={{ width: `${s.wa}%` }} />
                    <div className="stat-bar-b" style={{ width: `${s.wb}%` }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TIMELINE TAB */}
          {activeTab === "timeline" && (
            <div className="timeline">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.25rem", paddingBottom: "0.75rem", borderBottom: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-green)" }}>🇧🇷 Brazil</span>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--accent-gold)" }}>Germany 🇩🇪</span>
              </div>
              {[
                { min: "14'", side: "home", player: "Vinicius Jr. ⚽", type: "Goal — Penalty" },
                { min: "31'", side: "away", player: "⚽ Füllkrug", type: "Goal — Header from corner", right: true },
                { min: "44'", side: "home", player: "Gündogan 🟨", type: "Yellow Card — Foul on Rodrygo", dotColor: "var(--accent-red)" },
                { min: "", side: "home", player: "─── HALF TIME ───", type: "", mono: true },
                { min: "51'", side: "home", player: "Rodrygo ⚽", type: "Goal — Low drive, bottom corner" },
                { min: "58'", side: "away", player: "↕ Gnabry on / Musiala off", type: "Substitution", right: true },
                { min: "63'", side: "home", player: "↕ Fred on / Lucas off", type: "Substitution", dotColor: "var(--text-muted)" },
              ].map((e, i) => (
                <div key={i} className={`timeline-event ${e.side}`}>
                  <div className="timeline-min">{e.min}</div>
                  <div className="timeline-dot" style={e.dotColor ? { background: e.dotColor } : {}} />
                  <div className="timeline-content" style={e.right ? { textAlign: "right" } : {}}>
                    <div className="timeline-player" style={e.mono ? { fontFamily: "'JetBrains Mono',monospace", fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 400 } : {}}>{e.player}</div>
                    {e.type && <div className="timeline-type">{e.type}</div>}
                  </div>
                </div>
              ))}
              <div style={{ marginTop: "0.75rem", padding: "0.6rem", background: "var(--bg-elevated)", borderRadius: "4px", textAlign: "center" }}>
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.68rem", color: "var(--accent-red)" }}>● LIVE — 67&apos;</span>
              </div>
            </div>
          )}

          {/* AI REPORT TAB */}
          {activeTab === "ai" && (
            <div>
              <div className="ai-insight" style={{ marginBottom: "1rem" }}>
                <div className="insight-label">🤖 AI Tactical Summary · Generated at 67&apos;</div>
                <div className="insight-text">Brazil&apos;s <strong>high press has been the dominant tactical narrative</strong> of this match. With a PPDA of 5.4 (elite pressing threshold is 7.0), Brazil are disrupting Germany&apos;s build-up within 5 seconds of losing possession. Rodrygo&apos;s movement between the lines is creating the spaces — his 6 progressive carries in the second half are forcing Germany&apos;s defensive block deeper.</div>
              </div>
              <div className="ai-insight">
                <div className="insight-label">🔮 Win Probability Model</div>
                <div className="insight-text"><strong>Brazil 74% · Draw 14% · Germany 12%</strong> — The momentum model strongly favors Brazil based on current xG trajectory (2.41 vs 0.87), press dominance, and historical patterns of teams losing from this position at the 67-minute mark in knockout stage.</div>
              </div>
              <div className="ai-insight">
                <div className="insight-label">📍 Key Battleground</div>
                <div className="insight-text">Germany&apos;s right back corridor is being systematically exploited. Vinicius Jr + Guilherme combination has created <strong>8 overloads</strong> down that flank. Nagelsmann&apos;s likely response: drop Kimmich into a back-three and shift to 5-3-2 in the next 10 minutes.</div>
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="detail-sidebar">
          {/* Win Probability */}
          <div className="sidebar-card">
            <div className="sidebar-title">Win Probability</div>
            {[
              { label: "🇧🇷 Brazil", pct: 74, color: "var(--accent-green)" },
              { label: "Draw", pct: 14, color: "var(--text-muted)" },
              { label: "🇩🇪 Germany", pct: 12, color: "var(--accent-gold)" },
            ].map((p) => (
              <div key={p.label} style={{ marginBottom: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem" }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", color: p.color }}>{p.label}</span>
                  <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "0.9rem", color: p.color }}>{p.pct}%</span>
                </div>
                <div style={{ height: "8px", background: "var(--bg-deep)", borderRadius: "4px", overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${p.pct}%`, background: p.color, borderRadius: "4px" }} />
                </div>
              </div>
            ))}
          </div>

          {/* xG */}
          <div className="sidebar-card">
            <div className="sidebar-title">Expected Goals (xG)</div>
            <div className="xg-bar">
              <div className="xg-team" style={{ color: "var(--accent-green)" }}>BRA</div>
              <div className="xg-track"><div className="xg-fill" style={{ width: "73%", background: "var(--accent-green)" }} /></div>
              <div className="xg-val" style={{ color: "var(--accent-green)" }}>2.41</div>
            </div>
            <div className="xg-bar">
              <div className="xg-team" style={{ color: "var(--accent-gold)" }}>GER</div>
              <div className="xg-track"><div className="xg-fill" style={{ width: "27%", background: "var(--accent-gold)" }} /></div>
              <div className="xg-val" style={{ color: "var(--accent-gold)" }}>0.87</div>
            </div>
          </div>

          {/* Top Performers */}
          <div className="sidebar-card">
            <div className="sidebar-title">Top Performers</div>
            {[
              { num: 9, initials: "RG", name: "Rodrygo", pos: "ST · 🇧🇷", rating: "9.2" },
              { num: 11, initials: "VJ", name: "Vinicius Jr", pos: "LW · 🇧🇷", rating: "8.7" },
              { num: 5, initials: "CA", name: "Casemiro", pos: "DM · 🇧🇷", rating: "8.4" },
              { num: 10, initials: "FL", name: "Füllkrug", pos: "CF · 🇩🇪", rating: "7.1" },
              { num: 8, initials: "KR", name: "Kroos", pos: "CM · 🇩🇪", rating: "6.8" },
            ].map((p) => (
              <div key={p.num} className="player-row">
                <div className="player-num">{p.num}</div>
                <div className="player-avatar">{p.initials}</div>
                <div>
                  <div className="player-name">{p.name}</div>
                  <div className="player-pos">{p.pos}</div>
                </div>
                <div className="player-rating">{p.rating}</div>
              </div>
            ))}
          </div>

          {/* Live Key Stats */}
          <div className="sidebar-card">
            <div className="sidebar-title">Live Key Stats</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
              {[
                { val: "64%", label: "Possession", color: "var(--accent-green)" },
                { val: "18", label: "Total Shots", color: "var(--accent-green)" },
                { val: "91%", label: "Pass Acc.", color: "var(--text-secondary)" },
                { val: "5.4", label: "PPDA Press", color: "var(--accent-red)" },
              ].map((s) => (
                <div key={s.label} style={{ background: "var(--bg-deep)", borderRadius: "4px", padding: "0.75rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "1.1rem", fontWeight: 500, color: s.color }}>{s.val}</div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: "2px" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
