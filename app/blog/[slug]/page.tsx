import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../../components/Nav";
import { getArticle, getAllArticleSlugs, ARTICLES } from "../../lib/articles";
import { getMatch } from "../../lib/matches";

const WORLD_CUP_2026_READING_PATH = [
  "2026-world-cup-complete-guide",
  "world-cup-2026-standings-explained",
  "portugal-2026-world-cup-squad-analysis",
  "2026-world-cup-group-k-preview",
  "2026-world-cup-48-teams-tactical-impact",
  "2026-world-cup-favorites-contenders",
];

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article Not Found | WorldCupTactics" };
  const url = `https://worldcuptactics.com/blog/${article.slug}`;

  return {
    title: `${article.title} | WorldCupTactics`,
    description: article.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: article.title,
      description: article.metaDescription,
      url,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const relatedArticles = ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article.category
  ).slice(0, 3);
  const worldCup2026Links =
    article.category === "2026 WC"
      ? WORLD_CUP_2026_READING_PATH.filter((pathSlug) => pathSlug !== slug)
          .map((pathSlug) => ARTICLES.find((a) => a.slug === pathSlug))
          .filter(Boolean)
          .slice(0, 4)
      : [];

  const relatedMatchesRaw = await Promise.all(
    article.relatedMatchIds.map((id) => getMatch(id))
  );
  const relatedMatches = relatedMatchesRaw.filter(Boolean);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    datePublished: article.date,
    publisher: {
      "@type": "Organization",
      name: "WorldCupTactics",
      url: "https://worldcuptactics.com",
    },
    url: `https://worldcuptactics.com/blog/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />

      {/* Article header */}
      <div
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border)",
          padding: "4rem 3rem 3rem",
        }}
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {/* Breadcrumb */}
          <div
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              marginBottom: "1.5rem",
              display: "flex",
              gap: "0.4rem",
              alignItems: "center",
            }}
          >
            <Link href="/blog" style={{ color: "var(--accent-green)", textDecoration: "none" }}>
              Blog
            </Link>
            <span>/</span>
            <span>{article.category}</span>
          </div>

          {/* Category + read time */}
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.25rem" }}>
            <span
              style={{
                padding: "0.25rem 0.75rem",
                background: article.categoryColor + "15",
                border: `1px solid ${article.categoryColor}40`,
                borderRadius: "4px",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: article.categoryColor,
              }}
            >
              {article.category}
            </span>
            <span
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.65rem",
                color: "var(--text-muted)",
              }}
            >
              {article.readTime} min read · {new Date(article.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            {article.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {article.excerpt}
          </p>
        </div>
      </div>

      {/* Article body */}
      <div style={{ maxWidth: "760px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {article.content.map((section, i) => {
            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "1.6rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                    color: "var(--text-primary)",
                    marginTop: "2.5rem",
                    marginBottom: "1rem",
                    paddingBottom: "0.5rem",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  {section.text}
                </h2>
              );
            }
            if (section.type === "subheading") {
              return (
                <h3
                  key={i}
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--accent-green)",
                    marginTop: "1.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  {section.text}
                </h3>
              );
            }
            if (section.type === "quote") {
              return (
                <blockquote
                  key={i}
                  style={{
                    margin: "2rem 0",
                    padding: "1.25rem 1.75rem",
                    background: "var(--bg-surface)",
                    borderLeft: "3px solid var(--accent-green)",
                    borderRadius: "0 6px 6px 0",
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    color: "var(--text-secondary)",
                    lineHeight: 1.5,
                  }}
                >
                  &ldquo;{section.text}&rdquo;
                </blockquote>
              );
            }
            return (
              <p
                key={i}
                style={{
                  fontSize: "0.97rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.85,
                  marginTop: "1rem",
                  marginBottom: 0,
                }}
              >
                {section.text}
              </p>
            );
          })}
        </div>

        {/* 2026 hub links */}
        {worldCup2026Links.length > 0 && (
          <div
            style={{
              marginTop: "3.5rem",
              padding: "1.5rem",
              background: "var(--bg-surface)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          >
            <Link
              href="/world-cup-2026"
              style={{
                display: "inline-block",
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--accent-green)",
                textDecoration: "none",
                marginBottom: "1rem",
              }}
            >
              2026 World Cup Guide
            </Link>
            <div style={{ display: "grid", gap: "0.7rem" }}>
              <Link
                href="/world-cup-2026/teams"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                World Cup 2026 Team Tactical Profiles
              </Link>
              <Link
                href="/world-cup-2026/groups"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                World Cup 2026 Groups A-L Tactical Guide
              </Link>
              <Link
                href="/world-cup-2026/schedule"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                World Cup 2026 Schedule and Fixture Path
              </Link>
              <Link
                href="/world-cup-2026/standings"
                style={{
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}
              >
                World Cup 2026 Standings and Group Tables
              </Link>
              {worldCup2026Links.map((a) => {
                if (!a) return null;
                return (
                  <Link
                    key={a.slug}
                    href={`/blog/${a.slug}`}
                    style={{
                      color: "var(--text-primary)",
                      textDecoration: "none",
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {a.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Related Matches */}
        {relatedMatches.length > 0 && (
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "1.2rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              Analyse These Matches
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {relatedMatches.map((m) => {
                if (!m) return null;
                return (
                  <Link
                    key={m.id}
                    href={`/matches/${m.id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        background: "var(--bg-surface)",
                        border: "1px solid var(--border)",
                        borderRadius: "6px",
                        padding: "1rem 1.25rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: "1rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            color: "var(--text-primary)",
                          }}
                        >
                          {m.home.flag} {m.home.name} {m.home.score}–{m.away.score} {m.away.name} {m.away.flag}
                        </div>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono',monospace",
                            fontSize: "0.62rem",
                            color: "var(--text-muted)",
                            marginTop: "2px",
                          }}
                        >
                          {m.stage} · {m.tournament}
                        </div>
                      </div>
                      <span
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontSize: "0.78rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          color: "var(--accent-green)",
                          flexShrink: 0,
                        }}
                      >
                        View Analysis →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* More articles */}
        {relatedArticles.length > 0 && (
          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "1.2rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--text-primary)",
                marginBottom: "1.25rem",
              }}
            >
              More Articles
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {relatedArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <div
                    style={{
                      background: "var(--bg-surface)",
                      border: "1px solid var(--border)",
                      borderRadius: "6px",
                      padding: "1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "1rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed',sans-serif",
                          fontSize: "1rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "var(--text-primary)",
                          lineHeight: 1.2,
                        }}
                      >
                        {a.title}
                      </div>
                      <div
                        style={{
                          fontFamily: "'JetBrains Mono',monospace",
                          fontSize: "0.62rem",
                          color: "var(--text-muted)",
                          marginTop: "3px",
                        }}
                      >
                        {a.readTime} min read
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        color: "var(--accent-green)",
                        flexShrink: 0,
                      }}
                    >
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to blog */}
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <Link
            href="/blog"
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--text-muted)",
              textDecoration: "none",
            }}
          >
            ← Back to All Articles
          </Link>
        </div>
      </div>
    </>
  );
}
