import type { Metadata } from "next";
import Nav from "../components/Nav";

export const metadata: Metadata = {
  title: "About WorldCupTactics | AI-Powered Football Tactical Analysis",
  description:
    "WorldCupTactics is an AI-powered platform delivering deep tactical analysis of every World Cup match — formations, xG, key moments, and historical context.",
};

export default function AboutPage() {
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
          About WorldCupTactics
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
          Football Tactics,
          <br />
          <span style={{ color: "var(--accent-green)" }}>Decoded by AI</span>
        </h1>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            color: "var(--text-secondary)",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          WorldCupTactics is the internet&apos;s most detailed tactical analysis platform for
          World Cup football. We combine historical data, AI-generated insights, and visual
          formation diagrams to make elite-level tactical thinking accessible to every fan.
        </p>
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "4rem 2rem" }}>
        {/* What We Do */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "1.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            What We Do
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {[
              {
                icon: "🧠",
                title: "AI Tactical Analysis",
                desc: "Every match gets a deep-dive tactical breakdown — how formations clashed, where the key battles were won and lost, and what the numbers tell us beyond the scoreline.",
              },
              {
                icon: "📊",
                title: "Real Statistical Data",
                desc: "xG, possession, pass accuracy, pressing intensity — we present the stats that actually explain football, not just the headline numbers.",
              },
              {
                icon: "⚽",
                title: "Visual Formation Diagrams",
                desc: "Interactive SVG pitch diagrams show you exactly how each team set up, where players operated, and how the tactical battle evolved.",
              },
              {
                icon: "🏆",
                title: "Historical Archive",
                desc: "From the Miracle of Bern (1954) to the Greatest Final Ever (2022) — we cover the matches that defined the World Cup, with the same analytical depth.",
              },
              {
                icon: "⏱️",
                title: "Match Timelines",
                desc: "Every goal, card, and key moment placed in context — not just what happened, but why it happened tactically.",
              },
              {
                icon: "🔮",
                title: "2026 World Cup Coverage",
                desc: "Real-time AI analysis of all 104 matches at the 2026 World Cup in the USA, Canada, and Mexico — as they happen.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  padding: "1.5rem",
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
                <div style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section
          style={{
            background: "var(--bg-surface)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "2.5rem",
            marginBottom: "4rem",
          }}
        >
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "1.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--accent-green)",
              marginBottom: "1.25rem",
            }}
          >
            Our Mission
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              fontSize: "0.95rem",
              marginBottom: "1rem",
            }}
          >
            Football tactics have always been the domain of coaches, analysts, and a small group
            of dedicated fans who read the game at a deeper level. We believe that understanding
            why a team presses high, how a 4-3-3 exploits a 4-4-2, or what made Carlos Alberto&apos;s
            goal in 1970 a perfect team goal — should not require a coaching degree.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              fontSize: "0.95rem",
              marginBottom: "1rem",
            }}
          >
            WorldCupTactics uses artificial intelligence to make that knowledge accessible to
            every football fan on earth. Our AI reads the data, understands the tactical context,
            and translates it into clear, engaging analysis that respects the intelligence of our
            readers without assuming any prior tactical knowledge.
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              fontSize: "0.95rem",
            }}
          >
            With the 2026 World Cup approaching — the first 48-team tournament, hosted across
            three countries — we are building the definitive tactical analysis platform for the
            world&apos;s biggest sporting event.
          </p>
        </section>

        {/* Free vs Pro */}
        <section style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "1.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Free &amp; Pro Access
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1.25rem",
            }}
          >
            <div
              style={{
                background: "var(--bg-surface)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                }}
              >
                Free
              </div>
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 2,
                }}
              >
                <li>All 2026 World Cup match analysis</li>
                <li>Formation diagrams for all matches</li>
                <li>xG and match statistics</li>
                <li>Event timelines</li>
                <li>10 historical classic matches</li>
                <li>Ad-supported</li>
              </ul>
            </div>
            <div
              style={{
                background: "rgba(45,255,124,0.05)",
                border: "1px solid rgba(45,255,124,0.3)",
                borderRadius: "8px",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'Barlow Condensed',sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  color: "var(--accent-green)",
                  marginBottom: "1rem",
                }}
              >
                Pro — $4.99/month
              </div>
              <ul
                style={{
                  paddingLeft: "1.2rem",
                  color: "var(--text-secondary)",
                  fontSize: "0.875rem",
                  lineHeight: 2,
                }}
              >
                <li>Everything in Free</li>
                <li>Full archive of 900+ historical matches</li>
                <li>Ad-free experience</li>
                <li>PDF tactical reports for every match</li>
                <li>Early access to 2026 live analysis</li>
                <li>Priority support</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "3rem",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Barlow Condensed',sans-serif",
              fontSize: "1.8rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            Get in Touch
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              marginBottom: "0.5rem",
              fontSize: "0.9rem",
            }}
          >
            For questions, partnership enquiries, or feedback:
          </p>
          <p
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              color: "var(--accent-green)",
              fontSize: "0.9rem",
            }}
          >
            contact@worldcuptactics.com
          </p>
        </section>
      </div>
    </>
  );
}
