import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import { ARTICLES } from "../lib/articles";

export const metadata: Metadata = {
  title: "Tactical Analysis Blog | WorldCupTactics",
  description:
    "Deep tactical analysis articles on the World Cup — formations, legendary teams, iconic matches, and the ideas that shaped modern football.",
};

const CATEGORIES = ["All", "2026 WC", "Tactics", "Match Analysis", "Legends", "Player Analysis"];

export default function BlogPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <div
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border)",
          padding: "4rem 3rem",
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
            // Tactical Analysis
          </div>
          <h1
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              lineHeight: 0.95,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            The Tactical Library
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1rem", maxWidth: "560px", lineHeight: 1.7 }}>
            Deep dives into the formations, ideas, and moments that shaped World Cup history —
            plus full 2026 tournament coverage. {ARTICLES.length} articles and growing.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>

        {/* Category filter — static labels, visual only */}
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          {CATEGORIES.map((cat, i) => (
            <span
              key={cat}
              style={{
                padding: "0.35rem 0.9rem",
                background: i === 0 ? "rgba(45,255,124,0.1)" : "var(--bg-surface)",
                border: `1px solid ${i === 0 ? "rgba(45,255,124,0.3)" : "var(--border)"}`,
                borderRadius: "20px",
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: i === 0 ? "var(--accent-green)" : "var(--text-muted)",
                cursor: "default",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Article cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.75rem",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  transition: "border-color 0.15s",
                }}
                className="card-hover"
              >
                {/* Category + read time */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span
                    style={{
                      padding: "0.2rem 0.65rem",
                      background: article.categoryColor + "15",
                      border: `1px solid ${article.categoryColor}40`,
                      borderRadius: "3px",
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.6rem",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: article.categoryColor,
                    }}
                  >
                    {article.category}
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.6rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {article.readTime} min read
                  </span>
                </div>

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.02em",
                    lineHeight: 1.1,
                    color: "var(--text-primary)",
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {article.title}
                </h2>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {article.excerpt}
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--border)",
                    marginTop: "auto",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.6rem",
                      color: "var(--text-muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "var(--accent-green)",
                    }}
                  >
                    Read →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
