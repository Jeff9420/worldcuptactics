import type { Metadata } from "next";
import MatchesClient from "./MatchesClient";

const PAGE_URL = "https://worldcuptactics.com/matches";

export const metadata: Metadata = {
  title: "World Cup Match Analysis Hub | WorldCupTactics",
  description:
    "Tactical breakdowns of the greatest World Cup matches in history — formations, xG, key moments, and AI analysis. Filter by round, era, or team.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "World Cup Match Analysis Hub",
    description:
      "Tactical breakdowns of the greatest World Cup matches in history — formations, xG, key moments, and AI analysis.",
    url: PAGE_URL,
    type: "website",
  },
};

export default function MatchesPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://worldcuptactics.com" },
      { "@type": "ListItem", position: 2, name: "Matches", item: PAGE_URL },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <MatchesClient />
    </>
  );
}
