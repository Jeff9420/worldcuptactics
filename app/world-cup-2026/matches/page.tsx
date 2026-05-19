import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import { WORLD_CUP_2026_FEATURED_MATCHES, getWorldCup2026Team } from "../data";

const PAGE_URL = "https://worldcuptactics.com/world-cup-2026/matches";

export const metadata: Metadata = {
  title: "World Cup 2026 Key Matches: Tactical Previews | WorldCupTactics",
  description:
    "World Cup 2026 key match tactical previews for Portugal vs Colombia, England vs Croatia, Brazil vs Morocco, Spain vs Uruguay, and Netherlands vs Japan.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "World Cup 2026 Key Match Tactical Previews",
    description: "Group-stage matchup pages built for the highest-demand 2026 World Cup tactical searches.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function WorldCup2026MatchesPage() {
  return (
    <>
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
              World Cup 2026 Key Matches
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "760px" }}>
              Tactical previews for the group-stage fixtures with the clearest search demand and matchup value.
              Each page connects the fixture, group context, team profiles, and related analysis.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1rem",
            }}
          >
            {WORLD_CUP_2026_FEATURED_MATCHES.map((match) => {
              const teams = match.teamSlugs.map((slug) => getWorldCup2026Team(slug));
              return (
                <Link
                  key={match.slug}
                  href={`/world-cup-2026/matches/${match.slug}`}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <article
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "1.35rem",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--accent-green)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {match.groupName} · {match.date}
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: "1.45rem",
                        fontWeight: 800,
                        lineHeight: 1,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        marginBottom: "0.8rem",
                      }}
                    >
                      {match.fixture}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {match.stakes}
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {teams.map((team) => {
                        if (!team) return null;
                        return (
                          <span
                            key={team.slug}
                            style={{
                              fontFamily: "'JetBrains Mono',monospace",
                              fontSize: "0.62rem",
                              color: "var(--text-muted)",
                              border: "1px solid var(--border)",
                              borderRadius: "4px",
                              padding: "0.35rem 0.5rem",
                            }}
                          >
                            {team.name}
                          </span>
                        );
                      })}
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
