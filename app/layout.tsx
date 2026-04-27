import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  other: {
    "google-adsense-account": "ca-pub-7585038406357402",
  },
  title: "World Cup Tactics — AI Tactical Analysis for Every World Cup Match",
  description:
    "AI-powered tactical analysis for every World Cup match from 1930 to 2026. Animated diagrams, formation breakdowns, and goal-by-goal tactical commentary.",
  keywords: "world cup tactics, football tactical analysis, AI football analysis, world cup 2026, tactical diagram",
  openGraph: {
    title: "World Cup Tactics",
    description: "AI tactical analysis for every World Cup match — 1930 to 2026.",
    url: "https://worldcuptactics.com",
    siteName: "World Cup Tactics",
    type: "website",
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
      </body>
    </html>
  );
}
