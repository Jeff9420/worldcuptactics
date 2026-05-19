import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "../../../components/Nav";
import { ARTICLES } from "../../../lib/articles";
import {
  WORLD_CUP_2026_FEATURED_MATCHES,
  getWorldCup2026FeaturedMatch,
  getWorldCup2026Team,
} from "../../data";

const BASE = "https://worldcuptactics.com";

export function generateStaticParams() {
  return WORLD_CUP_2026_FEATURED_MATCHES.map((match) => ({ match: match.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ match: string }>;
}): Promise<Metadata> {
  const { match: matchSlug } = await params;
  const match = getWorldCup2026FeaturedMatch(matchSlug);
  if (!match) return { title: "Match Not Found | WorldCupTactics" };

  const url = `${BASE}/world-cup-2026/matches/${match.slug}`;

  return {
    title: `${match.fixture} 2026 World Cup Tactical Preview | WorldCupTactics`,
    description: `${match.fixture} 2026 World Cup tactical preview: ${match.groupName}, date, venue, key duel, stakes, and team links.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${match.fixture} 2026 World Cup Tactical Preview`,
      description: match.stakes,
      url,
      type: "article",
    },
  };
}

export default async function WorldCup2026MatchPage({
  params,
}: {
  params: Promise<{ match: string }>;
}) {
  const { match: matchSlug } = await params;
  const match = getWorldCup2026FeaturedMatch(matchSlug);
  if (!match) notFound();

  const teams = match.teamSlugs.map((slug) => getWorldCup2026Team(slug)).filter(Boolean);
  const relatedArticles = match.relatedArticleSlugs
    .map((slug) => ARTICLES.find((article) => article.slug === slug))
    .filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${match.fixture} 2026 World Cup`,
    startDate: match.date,
    location: {
      "@type": "Place",
      name: match.venue,
    },
    competitor: teams.map((team) => ({ "@type": "SportsTeam", name: team?.name })),
    url: `${BASE}/world-cup-2026/matches/${match.slug}`,
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
              href="/world-cup-2026/matches"
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
              2026 Key Matches
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
              {match.fixture} 2026 Tactical Preview
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "780px" }}>
              {match.intro}
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
            <InfoBlock label="Group" value={match.groupName} href={`/world-cup-2026/groups/${match.groupSlug}`} />
            <InfoBlock label="Date" value={match.date} />
            <InfoBlock label="Venue" value={match.venue} />
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
              Tactical Matchup
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
              {match.tacticalFocus}
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: "1rem" }}>
              <strong style={{ color: "var(--text-primary)" }}>Key duel:</strong> {match.keyDuel}
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.75 }}>
              <strong style={{ color: "var(--text-primary)" }}>Stakes:</strong> {match.stakes}
            </p>
          </article>

          <section style={{ marginBottom: "3rem" }}>
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
              Team Profiles
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem" }}>
              {teams.map((team) => {
                if (!team) return null;
                return (
                  <Link
                    key={team.slug}
                    href={`/world-cup-2026/teams/${team.slug}`}
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    <article
                      style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        padding: "1.2rem",
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
                          marginBottom: "0.65rem",
                        }}
                      >
                        {team.groupName} · {team.confederation}
                      </div>
                      <h3
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontSize: "1.2rem",
                          fontWeight: 800,
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {team.name}
                      </h3>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.84rem", lineHeight: 1.6 }}>
                        {team.keyQuestion}
                      </p>
                    </article>
                  </Link>
                );
              })}
            </div>
          </section>

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
          fontSize: "1.15rem",
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
