import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import { ARTICLES } from "../../../lib/articles";
import { WORLD_CUP_2026_TEAMS, getWorldCup2026Team } from "../../data";

const BASE = "https://worldcuptactics.com";

export function generateStaticParams() {
  return WORLD_CUP_2026_TEAMS.map((team) => ({ team: team.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ team: string }>;
}): Promise<Metadata> {
  const { team: teamSlug } = await params;
  const team = getWorldCup2026Team(teamSlug);
  if (!team) return { title: "Team Not Found | WorldCupTactics" };

  const url = `${BASE}/world-cup-2026/teams/${team.slug}`;

  return {
    title: `${team.name} 2026 World Cup Tactical Profile | WorldCupTactics`,
    description: `${team.name} 2026 World Cup tactical profile: ${team.groupName}, likely shape, key question, tactical focus, and related analysis.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${team.name} 2026 World Cup Tactical Profile`,
      description: `${team.name} at the 2026 World Cup: ${team.tacticalFocus}`,
      url,
      type: "article",
    },
  };
}

export default async function WorldCup2026TeamPage({
  params,
}: {
  params: Promise<{ team: string }>;
}) {
  const { team: teamSlug } = await params;
  const team = getWorldCup2026Team(teamSlug);
  if (!team) notFound();

  const relatedArticles = team.relatedArticleSlugs
    .map((slug) => ARTICLES.find((article) => article.slug === slug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsTeam",
    name: team.name,
    sport: "Football",
    memberOf: {
      "@type": "SportsOrganization",
      name: "FIFA World Cup 2026",
    },
    url: `${BASE}/world-cup-2026/teams/${team.slug}`,
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
              href="/world-cup-2026/teams"
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
              2026 Teams
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
              {team.name} 2026 World Cup Profile
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "760px" }}>
              {team.profile}
            </p>
          </div>
        </section>

        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <InfoBlock label="Group" value={team.groupName} href={`/world-cup-2026/groups/${team.groupSlug}`} />
            <InfoBlock label="Confederation" value={team.confederation} />
            <InfoBlock label="Likely shape" value={team.likelyShape} />
          </div>

          <article
            style={{
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              padding: "1.6rem",
              marginBottom: "3rem",
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
              Tactical Profile
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
              {team.tacticalFocus}
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
              <strong style={{ color: "var(--text-primary)" }}>Key question:</strong> {team.keyQuestion}
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
              <strong style={{ color: "var(--text-primary)" }}>Knockout ceiling:</strong> {team.knockoutCeiling}
            </p>
          </article>

          <section>
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
              Related Analysis
            </h2>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {relatedArticles.map((article) => {
                if (!article) return null;
                return (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <article
                      style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        padding: "1rem 1.25rem",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontSize: "1rem",
                          fontWeight: 800,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          marginBottom: "0.35rem",
                        }}
                      >
                        {article.title}
                      </h3>
                      <p style={{ color: "var(--text-muted)", fontSize: "0.8rem", lineHeight: 1.55 }}>
                        {article.excerpt}
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function InfoBlock({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "1.25rem",
        height: "100%",
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
          fontSize: "1.2rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: "var(--text-primary)",
        }}
      >
        {value}
      </div>
    </div>
  );

  if (!href) return content;
  return (
    <Link href={href} style={{ color: "inherit", textDecoration: "none" }}>
      {content}
    </Link>
  );
}
