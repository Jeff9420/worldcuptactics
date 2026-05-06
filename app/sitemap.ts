import type { MetadataRoute } from "next";
import { getAllMatchIds } from "./lib/matches";
import { getAllArticleSlugs } from "./lib/articles";

const BASE = "https://worldcuptactics.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ids = await getAllMatchIds();
  const matchUrls: MetadataRoute.Sitemap = ids.map((id) => ({
    url: `${BASE}/matches/${id}`,
    lastModified: new Date("2026-05-06"),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articleUrls: MetadataRoute.Sitemap = getAllArticleSlugs().map((slug) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date("2026-05-06"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/matches`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date("2026-04-30"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date("2026-04-30"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.3 },
    ...matchUrls,
    ...articleUrls,
  ];
}
