import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import { ARTICLES } from "../lib/articles";

const HUB_URL = "https://worldcuptactics.com/world-cup-2026";

const FEATURED_SLUGS = [
  "2026-world-cup-complete-guide",
  "world-cup-2026-standings-explained",
  "portugal-2026-world-cup-squad-analysis",
  "2026-world-cup-group-k-preview",
  "2026-world-cup-48-teams-tactical-impact",
  "2026-world-cup-favorites-contenders",
];

const QUICK_PATHS = [
  {
    href: "/world-cup-2026/teams",
    label: "Teams",
    title: "Contender Team Profiles",
    text: "Portugal, Colombia, Brazil, France and England tactical profiles with group context and related analysis.",
  },
  {
    href: "/world-cup-2026/groups",
    label: "Groups",
    title: "All 12 Group Guides",
    text: "Group A to Group L with team lists, tactical questions, and direct paths to each draw page.",
  },
  {
    href: "/world-cup-2026/schedule",
    label: "Schedule",
    title: "Dates and Fixture Path",
    text: "Tournament phase dates, Group K fixtures, and the expanded 104-match calendar through the final.",
  },
  {
    href: "/world-cup-2026/standings",
    label: "Standings",
    title: "All 12 Group Tables",
    text: "A direct standings entry point for the 48-team format, third-place race, and qualification rules.",
  },
  {
    href: "/blog/world-cup-2026-standings-explained",
    label: "Rules",
    title: "How Qualification Works",
    text: "Top two from each group plus the eight best third-place teams, with the tactical meaning of each tie-breaker.",
  },
  {
    href: "/blog/2026-world-cup-group-k-preview",
    label: "Group K",
    title: "Portugal's Group Path",
    text: "Portugal, Colombia, Uzbekistan and Congo DR through a tactical lens.",
  },
];

export const metadata: Metadata = {
  title: "World Cup 2026 Tactical Guide | WorldCupTactics",
  description:
    "A tactical hub for the 2026 World Cup: format, standings, Group K, Portugal, favorites, host context, and team-by-team previews.",
  alternates: {
    canonical: HUB_URL,
  },
  openGraph: {
    title: "World Cup 2026 Tactical Guide",
    description:
      "The 2026 World Cup format, standings logic, group previews, squad analysis, and tactical storylines in one place.",
    url: HUB_URL,
    type: "website",
  },
};

export default function WorldCup2026Page() {
  const articles = ARTICLES.filter((article) => article.category === "2026 WC");
  const featured = FEATURED_SLUGS.map((slug) => articles.find((article) => article.slug === slug)).filter(Boolean);
  const latest = articles.filter((article) => !FEATURED_SLUGS.includes(article.slug)).slice(0, 18);
  const groupPreviews = articles.filter((article) => /group [a-l]/i.test(article.title)).slice(0, 12);

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
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent-green)",
                marginBottom: "1rem",
              }}
            >
              {"// 2026 World Cup"}
            </div>
            <h1
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
                maxWidth: "760px",
                marginBottom: "1.25rem",
              }}
            >
              2026 World Cup Tactical Guide
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "680px" }}>
              The expanded 48-team World Cup changes the standings, knockout path, squad rotation, and underdog strategy.
              This hub collects the core 2026 tactical guides, group previews, and team storylines in one crawlable path.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            {QUICK_PATHS.map((path) => (
              <Link key={path.href} href={path.href} style={{ color: "inherit", textDecoration: "none" }}>
                <article
                  style={{
                    background: "rgba(255,68,68,0.04)",
                    border: "1px solid rgba(255,68,68,0.16)",
                    borderRadius: "8px",
                    padding: "1.25rem",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#FF4444",
                      marginBottom: "0.65rem",
                    }}
                  >
                    {path.label}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "1.25rem",
                      fontWeight: 800,
                      lineHeight: 1.05,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      marginBottom: "0.65rem",
                    }}
                  >
                    {path.title}
                  </h2>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                    {path.text}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            {featured.map((article) => {
              if (!article) return null;
              return (
                <Link key={article.slug} href={`/blog/${article.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                  <article
                    className="card-hover"
                    style={{
                      height: "100%",
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "8px",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'JetBrains Mono',monospace",
                        fontSize: "0.62rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--accent-green)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      Core guide
                    </div>
                    <h2
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: "1.35rem",
                        lineHeight: 1.05,
                        textTransform: "uppercase",
                        letterSpacing: "0.02em",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {article.title}
                    </h2>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.65 }}>
                      {article.excerpt}
                    </p>
                  </article>
                </Link>
              );
            })}
          </div>

          <Section title="Group Previews" articles={groupPreviews} />
          <Section title="Latest 2026 Analysis" articles={latest} />
        </section>
      </main>
    </>
  );
}

function Section({ title, articles }: { title: string; articles: typeof ARTICLES }) {
  if (articles.length === 0) return null;

  return (
    <section style={{ marginTop: "3rem" }}>
      <div
        style={{
          fontFamily: "'Barlow Condensed',sans-serif",
          fontSize: "1.35rem",
          fontWeight: 800,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "1rem",
        }}
      >
        {title}
      </div>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        {articles.map((article) => (
          <Link key={article.slug} href={`/blog/${article.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
            <article
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "6px",
                padding: "1rem 1.25rem",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    lineHeight: 1.2,
                    marginBottom: "0.25rem",
                  }}
                >
                  {article.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", lineHeight: 1.5 }}>
                  {article.excerpt}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--accent-green)",
                  whiteSpace: "nowrap",
                }}
              >
                Read →
              </span>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
