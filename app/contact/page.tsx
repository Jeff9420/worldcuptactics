import type { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "Contact Us | WorldCupTactics",
  description:
    "Get in touch with the WorldCupTactics team — questions, feedback, partnership enquiries, and press requests welcome.",
};

const TOPICS = [
  {
    icon: "💬",
    title: "General Enquiries",
    desc: "Questions about the site, match coverage, or our AI analysis methodology.",
    email: "contact@worldcuptactics.com",
    subject: "General Enquiry",
  },
  {
    icon: "🤝",
    title: "Partnerships & Advertising",
    desc: "Sponsorship, media partnerships, or advertising opportunities on WorldCupTactics.",
    email: "contact@worldcuptactics.com",
    subject: "Partnership Enquiry",
  },
  {
    icon: "📰",
    title: "Press & Media",
    desc: "Media requests, interview inquiries, or permission to reference our analysis.",
    email: "contact@worldcuptactics.com",
    subject: "Press Request",
  },
  {
    icon: "🐛",
    title: "Bug Reports & Feedback",
    desc: "Spotted something wrong? Found a data error? We want to know.",
    email: "contact@worldcuptactics.com",
    subject: "Bug Report",
  },
];

export default function ContactPage() {
  return (
    <>
      <Nav />

      {/* Hero */}
      <div
        style={{
          background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border)",
          padding: "5rem 3rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--accent-green)",
            marginBottom: "1.25rem",
          }}
        >
          Contact WorldCupTactics
        </div>
        <h1
          style={{
            fontFamily: "'Barlow Condensed',sans-serif",
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            lineHeight: 0.95,
            color: "var(--text-primary)",
            marginBottom: "1.5rem",
          }}
        >
          Get in Touch
        </h1>
        <p
          style={{
            maxWidth: "520px",
            margin: "0 auto 2rem",
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          We read every message. Whether it&apos;s a question about our analysis, a data
          error, or a business enquiry — reach out below.
        </p>
        <a
          href="mailto:contact@worldcuptactics.com"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1.75rem",
            background: "rgba(45,255,124,0.08)",
            border: "1px solid rgba(45,255,124,0.3)",
            borderRadius: "6px",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.88rem",
            color: "var(--accent-green)",
            textDecoration: "none",
            letterSpacing: "0.03em",
          }}
        >
          ✉ contact@worldcuptactics.com
        </a>
      </div>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "4rem 2rem" }}>

        {/* Topic cards */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "1.5rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            What can we help with?
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
              gap: "1rem",
            }}
          >
            {TOPICS.map(({ icon, title, desc, email, subject }) => (
              <a
                key={title}
                href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "1.5rem",
                    transition: "border-color 0.15s",
                    cursor: "pointer",
                    height: "100%",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", marginBottom: "0.75rem" }}>{icon}</div>
                  <div
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      color: "var(--text-primary)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {title}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1rem",
                    }}
                  >
                    {desc}
                  </div>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.72rem",
                      color: "var(--accent-green)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Send email →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Response time note */}
        <section
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "2rem 2.5rem",
            display: "flex",
            gap: "1.5rem",
            alignItems: "flex-start",
          }}
        >
          <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>⚡</div>
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed',sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "var(--text-primary)",
                marginBottom: "0.4rem",
              }}
            >
              Response Time
            </div>
            <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
              We typically respond within 24–48 hours. During the 2026 World Cup
              tournament period, response times may be longer due to high volume.
              For urgent matters, include &quot;URGENT&quot; in your subject line.
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
