import type { MetadataRoute } from "next";
import { getAllMatchIds } from "./lib/matches";

const BASE = "https://worldcuptactics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const matchUrls: MetadataRoute.Sitemap = getAllMatchIds().map((id) => ({
    url: `${BASE}/matches/${id}`,
    lastModified: new Date("2026-04-29"),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/matches`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/about`, lastModified: new Date("2026-04-29"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: new Date("2026-04-29"), changeFrequency: "yearly", priority: 0.3 },
    ...matchUrls,
  ];
}
