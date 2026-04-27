import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "World Cup Tactics — AI Tactical Analysis for Every World Cup Match",
  description:
    "AI-powered tactical analysis for every World Cup match from 1930 to 2026. Animated diagrams, formation breakdowns, and goal-by-goal tactical commentary. Launching June 2026.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
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
