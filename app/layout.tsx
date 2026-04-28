import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://worldcuptactics.com"),
  other: {
    "google-adsense-account": "ca-pub-7585038406357402",
  },
  title: "World Cup Tactics — AI Tactical Analysis for Every World Cup Match",
  description:
    "AI-powered tactical analysis for the greatest World Cup matches in history — formations, xG models, and deep tactical breakdowns from 1954 to 2026.",
  keywords:
    "world cup tactics, football tactical analysis, AI football analysis, world cup 2026, tactical diagram, formation analysis, xG football",
  openGraph: {
    title: "WorldCupTactics — AI Football Tactical Analysis",
    description:
      "Deep tactical breakdowns for the greatest World Cup matches ever played — formations, xG, key moments, and AI analysis.",
    url: "https://worldcuptactics.com",
    siteName: "WorldCupTactics",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "WorldCupTactics — AI Football Tactical Analysis",
    description:
      "Deep tactical breakdowns for the greatest World Cup matches — formations, xG, and AI insights from 1954 to 2026.",
    site: "@worldcuptactics",
  },
  alternates: {
    canonical: "https://worldcuptactics.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead2/js/adsbygoogle.js?client=ca-pub-7585038406357402"
          crossOrigin="anonymous"
        />
        {children}
        <GoogleAnalytics gaId="G-P35NEJ2SVG" />
      </body>
    </html>
  );
}
