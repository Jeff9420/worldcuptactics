import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";
import { WORLD_CUP_2026_GROUPS } from "../data";

const PAGE_URL = "https://worldcuptactics.com/world-cup-2026/standings";

export const metadata: Metadata = {
  title: "World Cup 2026 Standings: Groups, Tables and Qualification Rules | WorldCupTactics",
  description:
    "World Cup 2026 standings hub with all 12 groups, qualification rules, third-place race logic, and tactical links for the expanded 48-team format.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "World Cup 2026 Standings",
    description:
      "All 12 World Cup 2026 groups, blank standings tables, qualification rules, tie-breaker logic, and tactical reading paths.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function WorldCup2026StandingsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many teams qualify from each World Cup 2026 group?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The top two teams in each of the 12 groups qualify automatically. The eight best third-place teams also qualify for the Round of 32.",
        },
      },
      {
        "@type": "Question",
        name: "How many groups are there at the 2026 World Cup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 2026 World Cup has 12 groups of four teams, creating a 48-team group stage.",
        },
      },
      {
        "@type": "Question",
        name: "Why do third-place standings matter in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Eight of the 12 third-place teams advance, so goal difference, goals scored, discipline and late group-stage game management can decide the final knockout places.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      <main>
        <section
          style={{
            background: "var(--bg-surface)",
            borderBottom: "1px solid var(--border)",
            padding: "4.5rem 3rem 3.5rem",
          }}
        >
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <Link
              href="/world-cup-2026"
              style={{
                display: "inline-block",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent-green)",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              2026 World Cup Guide
            </Link>
            <h1
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 4.4rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              World Cup 2026 Standings
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "720px" }}>
              The 2026 World Cup begins with 12 groups of four teams. Before the opening match,
              every table is level; once the tournament starts, the real tactical pressure will sit
              around second place, third place, goal difference, and squad energy.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <InfoBlock label="Format" value="12 groups of 4" />
            <InfoBlock label="Automatic places" value="Top 2 in each group" />
            <InfoBlock label="Extra places" value="8 best third-place teams" />
            <InfoBlock label="Knockout start" value="Round of 32" />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1rem",
            }}
          >
            {WORLD_CUP_2026_GROUPS.map((group) => (
              <article
                key={group.name}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.name}
                  </h2>
                  {group.name === "Group K" && (
                    <Link
                      href="/world-cup-2026/groups/k"
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--accent-green)",
                        textDecoration: "none",
                      }}
                    >
                      Tactical preview
                    </Link>
                  )}
                  {group.name !== "Group K" && (
                    <Link
                      href={`/world-cup-2026/groups/${group.slug}`}
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--accent-green)",
                        textDecoration: "none",
                      }}
                    >
                      Group guide
                    </Link>
                  )}
                </div>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr>
                      {["Team", "P", "W", "D", "L", "GD", "Pts"].map((heading) => (
                        <th
                          key={heading}
                          style={{
                            padding: "0.65rem 0.55rem",
                            textAlign: heading === "Team" ? "left" : "center",
                            fontFamily: "'JetBrains Mono',monospace",
                            fontSize: "0.58rem",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                            borderBottom: "1px solid var(--border)",
                          }}
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {group.teams.map((team) => (
                      <tr key={team}>
                        <td
                          style={{
                            padding: "0.75rem 0.55rem 0.75rem 1.25rem",
                            color: "var(--text-primary)",
                            fontWeight: 600,
                          }}
                        >
                          {team}
                        </td>
                        {[0, 0, 0, 0, 0, 0].map((value, index) => (
                          <td
                            key={`${team}-${index}`}
                            style={{
                              padding: "0.75rem 0.55rem",
                              textAlign: "center",
                              color: "var(--text-secondary)",
                              fontFamily: "'JetBrains Mono',monospace",
                              fontSize: "0.72rem",
                            }}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </article>
            ))}
          </div>

          <section
            style={{
              marginTop: "3rem",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.75rem",
            }}
          >
            <h2
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "1.35rem",
                fontWeight: 800,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              How the 2026 standings should be read
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
              The clean rule is simple: top two advance, and the eight best third-place teams
              join them. The tactical rule is more interesting. A team on three points can be
              alive or nearly out depending on goal difference, goals scored, cards, and how many
              other groups have already finished.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1.25rem" }}>
              That is why matchday three will produce conservative wins, aggressive second-goal
              chases, and late substitutions made with the wider third-place table in mind.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <TextLink href="/blog/world-cup-2026-standings-explained">
                Read the standings explainer
              </TextLink>
              <TextLink href="/world-cup-2026/groups">
                Open all group guides
              </TextLink>
              <TextLink href="/world-cup-2026/teams">
                Open team profiles
              </TextLink>
              <TextLink href="/blog/2026-world-cup-complete-guide">
                Open the complete guide
              </TextLink>
              <TextLink href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/standings">
                FIFA official standings
              </TextLink>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "1.25rem",
      }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono',monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--text-muted)",
          marginBottom: "0.5rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "1.35rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "'Barlow Condensed',sans-serif",
        fontSize: "0.85rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-green)",
        textDecoration: "none",
        border: "1px solid rgba(45,255,124,0.25)",
        borderRadius: "4px",
        padding: "0.5rem 0.75rem",
      }}
    >
      {children}
    </Link>
  );
}
