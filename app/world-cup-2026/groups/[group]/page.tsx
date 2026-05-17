import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import { ARTICLES } from "../../../lib/articles";
import { WORLD_CUP_2026_GROUPS, getWorldCup2026Group, getWorldCup2026TeamByName } from "../../data";

const BASE = "https://worldcuptactics.com";

export function generateStaticParams() {
  return WORLD_CUP_2026_GROUPS.map((group) => ({ group: group.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ group: string }>;
}): Promise<Metadata> {
  const { group: groupSlug } = await params;
  const group = getWorldCup2026Group(groupSlug);
  if (!group) return { title: "Group Not Found | WorldCupTactics" };

  const url = `${BASE}/world-cup-2026/groups/${group.slug}`;
  const teams = group.teams.join(", ");

  return {
    title: `World Cup 2026 ${group.name}: ${teams} | WorldCupTactics`,
    description: `${group.name} tactical guide for the 2026 World Cup: ${teams}. Key matchup, tactical focus, standings links, and related analysis.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `World Cup 2026 ${group.name}`,
      description: `${group.name}: ${teams}. Tactical focus, key question, and reading path.`,
      url,
      type: "article",
    },
  };
}

export default async function WorldCup2026GroupPage({
  params,
}: {
  params: Promise<{ group: string }>;
}) {
  const { group: groupSlug } = await params;
  const group = getWorldCup2026Group(groupSlug);
  if (!group) notFound();

  const relatedArticles = ARTICLES.filter((article) => {
    const title = article.title.toLowerCase();
    const slug = article.slug.toLowerCase();
    return group.teams.some((team) => {
      const normalized = team.toLowerCase().replace("united states", "usa");
      return title.includes(normalized) || slug.includes(normalized.replace(/\s+/g, "-"));
    });
  }).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `World Cup 2026 ${group.name}`,
    description: `${group.name} includes ${group.teams.join(", ")}.`,
    organizer: { "@type": "Organization", name: "FIFA" },
    url: `${BASE}/world-cup-2026/groups/${group.slug}`,
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
              href="/world-cup-2026/groups"
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
              2026 Groups
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
              World Cup 2026 {group.name}
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "760px" }}>
              {group.tacticalFocus}
            </p>
          </div>
        </section>

        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.45fr)",
              gap: "1.25rem",
              alignItems: "start",
            }}
          >
            <article
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "1.5rem",
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
                Teams
              </h2>
              <div style={{ display: "grid", gap: "0.75rem" }}>
                {group.teams.map((team, index) => {
                  const teamProfile = getWorldCup2026TeamByName(team);
                  const row = (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        padding: "0.9rem 1rem",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.7rem",
                          color: "var(--text-muted)",
                          width: "2rem",
                        }}
                      >
                        {group.slug.toUpperCase()}
                        {index + 1}
                      </span>
                      <span style={{ fontWeight: 700, color: "var(--text-primary)" }}>{team}</span>
                    </div>
                  );

                  if (!teamProfile) return <div key={team}>{row}</div>;
                  return (
                    <Link
                      key={team}
                      href={`/world-cup-2026/teams/${teamProfile.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {row}
                    </Link>
                  );
                })}
              </div>
            </article>

            <aside
              style={{
                background: "rgba(255,68,68,0.04)",
                border: "1px solid rgba(255,68,68,0.16)",
                borderRadius: "8px",
                padding: "1.5rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FF4444",
                  marginBottom: "0.75rem",
                }}
              >
                Key question
              </div>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                {group.keyQuestion}
              </p>
              <LinkButton href="/world-cup-2026/standings">View standings</LinkButton>
              <LinkButton href="/world-cup-2026/schedule">View schedule</LinkButton>
              {group.slug === "k" && (
                <LinkButton href="/blog/2026-world-cup-group-k-preview">Group K preview</LinkButton>
              )}
            </aside>
          </div>

          <section style={{ marginTop: "3rem" }}>
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
              {(relatedArticles.length > 0 ? relatedArticles : ARTICLES.filter((article) => article.category === "2026 WC").slice(0, 4)).map((article) => (
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
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function LinkButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        fontFamily: "'Barlow Condensed',sans-serif",
        fontSize: "0.85rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-green)",
        textDecoration: "none",
        borderTop: "1px solid var(--border)",
        paddingTop: "0.75rem",
        marginTop: "0.75rem",
      }}
    >
      {children} →
    </Link>
  );
}
