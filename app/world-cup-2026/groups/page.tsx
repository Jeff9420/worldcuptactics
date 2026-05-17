import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import { WORLD_CUP_2026_GROUPS } from "../data";

const PAGE_URL = "https://worldcuptactics.com/world-cup-2026/groups";

export const metadata: Metadata = {
  title: "World Cup 2026 Groups: A-L Tactical Guide | WorldCupTactics",
  description:
    "World Cup 2026 groups hub with all 12 groups, team lists, tactical questions, and links to each group guide.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "World Cup 2026 Groups",
    description:
      "All 12 World Cup 2026 groups in one tactical hub, from Group A to Group L.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function WorldCup2026GroupsPage() {
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
              World Cup 2026 Groups
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "760px" }}>
              Twelve groups, four teams each, and a new third-place qualification race.
              This hub gives every group a dedicated tactical path instead of burying
              the draw inside one long article.
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
            {WORLD_CUP_2026_GROUPS.map((group) => (
              <Link
                key={group.slug}
                href={`/world-cup-2026/groups/${group.slug}`}
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
                    {group.name}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      marginBottom: "0.8rem",
                    }}
                  >
                    {group.teams.join(" / ")}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", lineHeight: 1.6 }}>
                    {group.keyQuestion}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
