import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "../../components/Nav";
import MatchDetail from "./MatchDetail";
import { getMatch, getAllMatchIds } from "../../lib/matches";

export async function generateStaticParams() {
  return getAllMatchIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const match = getMatch(id);
  if (!match) return { title: "Match Not Found | WorldCupTactics" };

  const score = `${match.home.score}–${match.away.score}`;
  const statusSuffix =
    match.status === "PSO"
      ? ` (${match.penaltyScore} pens)`
      : match.status === "AET"
      ? " AET"
      : "";

  return {
    title: `${match.home.name} ${score}${statusSuffix} ${match.away.name} — ${match.tournament} | WorldCupTactics`,
    description: `Tactical analysis of ${match.home.name} vs ${match.away.name} in the ${match.stage} of the ${match.tournament}. ${match.tacticalAnalysis.substring(0, 160)}`,
    openGraph: {
      title: `${match.home.flag} ${match.home.name} ${score} ${match.away.name} ${match.away.flag} — Tactical Analysis`,
      description: `AI tactical breakdown of the ${match.year} World Cup ${match.stage}.`,
      type: "article",
    },
  };
}

export default async function MatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = getMatch(id);
  if (!match) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${match.home.name} vs ${match.away.name} — ${match.tournament}`,
    description: match.tacticalAnalysis.substring(0, 200),
    startDate: match.date,
    location: {
      "@type": "Place",
      name: match.venue,
      address: match.city,
    },
    homeTeam: { "@type": "SportsTeam", name: match.home.name },
    awayTeam: { "@type": "SportsTeam", name: match.away.name },
    sport: "Football",
    url: `https://worldcuptactics.com/matches/${match.id}`,
    organizer: { "@type": "Organization", name: "FIFA" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <MatchDetail match={match} />
    </>
  );
}
