import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "../../components/Nav";

const PAGE_URL = "https://worldcuptactics.com/world-cup-2026/schedule";

const PHASES = [
  { phase: "Group stage", dates: "11-27 June 2026", tacticalNote: "Rotation, goal difference, and third-place safety shape the first 72 matches." },
  { phase: "Round of 32", dates: "28 June-3 July 2026", tacticalNote: "The new knockout layer rewards squads that managed minutes properly in the groups." },
  { phase: "Round of 16", dates: "4-7 July 2026", tacticalNote: "Tournament favorites should be closer to full-strength patterns here." },
  { phase: "Quarter-finals", dates: "9-11 July 2026", tacticalNote: "Set pieces, rest days, and suspension risk become decisive margins." },
  { phase: "Semi-finals", dates: "14-15 July 2026", tacticalNote: "The extra match in the 48-team format makes depth more important than in past editions." },
  { phase: "Third-place match", dates: "18 July 2026", tacticalNote: "Often open and rotation-heavy, but still useful for player evaluation." },
  { phase: "Final", dates: "19 July 2026", tacticalNote: "New York New Jersey hosts the title match after a 104-game tournament." },
];

const GROUP_K_FIXTURES = [
  {
    date: "Wednesday, 17 June 2026",
    matches: [
      { fixture: "Portugal v Congo DR", venue: "Houston Stadium", note: "Portugal open with the ball-dominant pressure test." },
      { fixture: "Uzbekistan v Colombia", venue: "Mexico City Stadium", note: "The first direct contest for Group K control." },
    ],
  },
  {
    date: "Tuesday, 23 June 2026",
    matches: [
      { fixture: "Portugal v Uzbekistan", venue: "Houston Stadium", note: "A likely low-block problem for Portugal's creators." },
      { fixture: "Colombia v Congo DR", venue: "Estadio Guadalajara", note: "Transition speed and second balls should decide territory." },
    ],
  },
  {
    date: "Saturday, 27 June 2026",
    matches: [
      { fixture: "Colombia v Portugal", venue: "Miami Stadium", note: "The headline Group K tactical match." },
      { fixture: "Congo DR v Uzbekistan", venue: "Atlanta Stadium", note: "Potential third-place pressure game." },
    ],
  },
];

export const metadata: Metadata = {
  title: "World Cup 2026 Schedule: Dates, Fixtures and Tactical Calendar | WorldCupTactics",
  description:
    "World Cup 2026 schedule hub covering tournament dates, knockout phases, Group K fixtures, and the tactical calendar for the expanded 48-team format.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "World Cup 2026 Schedule",
    description:
      "A tactical calendar for the 2026 World Cup: phase dates, key fixtures, Group K schedule, and tournament pressure points.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function WorldCup2026SchedulePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When does the 2026 World Cup start?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 2026 World Cup starts on 11 June 2026 with Mexico v South Africa in Mexico City.",
        },
      },
      {
        "@type": "Question",
        name: "When is the 2026 World Cup final?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 2026 World Cup final is scheduled for 19 July 2026 in New York New Jersey.",
        },
      },
      {
        "@type": "Question",
        name: "How many matches are in the 2026 World Cup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The expanded 48-team 2026 World Cup contains 104 matches.",
        },
      },
    ],
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
              World Cup 2026 Schedule
            </h1>
            <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "720px" }}>
              The 2026 tournament runs from 11 June to 19 July across Canada, Mexico, and the United States.
              This calendar focuses on the dates and fixtures that matter tactically: the group-stage pressure points,
              the new Round of 32, and Group K&apos;s Portugal-Colombia pathway.
            </p>
          </div>
        </section>

        <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "1rem",
              marginBottom: "3rem",
            }}
          >
            <InfoBlock label="Opening match" value="11 June" detail="Mexico v South Africa" />
            <InfoBlock label="Tournament length" value="39 days" detail="Group stage through final" />
            <InfoBlock label="Total matches" value="104" detail="Expanded 48-team format" />
            <InfoBlock label="Final" value="19 July" detail="New York New Jersey" />
          </div>

          <section style={{ marginBottom: "3rem" }}>
            <SectionTitle>Tournament Calendar</SectionTitle>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {PHASES.map((phase) => (
                <article
                  key={phase.phase}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    padding: "1.2rem 1.35rem",
                    display: "grid",
                    gridTemplateColumns: "minmax(150px, 0.8fr) minmax(130px, 0.7fr) 1.5fr",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Barlow Condensed',sans-serif",
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    {phase.phase}
                  </h2>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.7rem",
                      color: "var(--accent-green)",
                    }}
                  >
                    {phase.dates}
                  </div>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", lineHeight: 1.55 }}>
                    {phase.tacticalNote}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section>
            <SectionTitle>Group K Fixture Path</SectionTitle>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: "760px", marginBottom: "1.25rem" }}>
              Group K is the highest-value tactical cluster on the current site because it connects Portugal,
              Colombia, Uzbekistan, and Congo DR across Houston, Mexico City, Guadalajara, Miami, and Atlanta.
            </p>
            <div style={{ display: "grid", gap: "1rem" }}>
              {GROUP_K_FIXTURES.map((day) => (
                <article
                  key={day.date}
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "0.9rem 1.25rem",
                      borderBottom: "1px solid var(--border)",
                      fontFamily: "'JetBrains Mono',monospace",
                      fontSize: "0.7rem",
                      color: "var(--accent-green)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {day.date}
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
                    {day.matches.map((match) => (
                      <div
                        key={match.fixture}
                        style={{
                          padding: "1.25rem",
                          borderRight: "1px solid var(--border)",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Barlow Condensed',sans-serif",
                            fontSize: "1.25rem",
                            fontWeight: 800,
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                            marginBottom: "0.35rem",
                          }}
                        >
                          {match.fixture}
                        </h3>
                        <div
                          style={{
                            fontFamily: "'JetBrains Mono',monospace",
                            fontSize: "0.65rem",
                            color: "var(--text-muted)",
                            marginBottom: "0.75rem",
                          }}
                        >
                          {match.venue}
                        </div>
                        <p style={{ color: "var(--text-secondary)", fontSize: "0.86rem", lineHeight: 1.6 }}>
                          {match.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            style={{
              marginTop: "3rem",
              background: "rgba(255,68,68,0.04)",
              border: "1px solid rgba(255,68,68,0.16)",
              borderRadius: "8px",
              padding: "1.5rem",
            }}
          >
            <SectionTitle>Read Next</SectionTitle>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <TextLink href="/world-cup-2026/teams">Team profiles</TextLink>
              <TextLink href="/world-cup-2026/groups">All group guides</TextLink>
              <TextLink href="/world-cup-2026/standings">Standings and groups</TextLink>
              <TextLink href="/blog/2026-world-cup-group-k-preview">Group K tactical preview</TextLink>
              <TextLink href="/blog/portugal-2026-world-cup-squad-analysis">Portugal squad analysis</TextLink>
              <TextLink href="https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums">
                FIFA official schedule
              </TextLink>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

function InfoBlock({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div
      style={{
        background: "var(--bg-surface)",
        border: "1px solid var(--border)",
        borderRadius: "8px",
        padding: "1.25rem",
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
          fontSize: "1.5rem",
          fontWeight: 800,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        }}
      >
        {value}
      </div>
      <div style={{ color: "var(--text-secondary)", fontSize: "0.82rem", marginTop: "0.35rem" }}>
        {detail}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
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
      {children}
    </h2>
  );
}

function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "'Barlow Condensed',sans-serif",
        fontSize: "0.85rem",
        fontWeight: 700,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--accent-green)",
        textDecoration: "none",
        border: "1px solid rgba(45,255,124,0.25)",
        borderRadius: "4px",
        padding: "0.5rem 0.75rem",
      }}
    >
      {children}
    </Link>
  );
}
