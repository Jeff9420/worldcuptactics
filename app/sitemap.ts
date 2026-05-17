import type { MetadataRoute } from "next";
import { getAllMatchIds } from "./lib/matches";
import { ARTICLES } from "./lib/articles";
import { WORLD_CUP_2026_GROUPS, WORLD_CUP_2026_TEAMS } from "./world-cup-2026/data";

const BASE = "https://worldcuptactics.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const ids = await getAllMatchIds();
  const matchUrls: MetadataRoute.Sitemap = ids.map((id) => ({
    url: `${BASE}/matches/${id}`,
    lastModified: new Date("2026-05-06"),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const articleUrls: MetadataRoute.Sitemap = ARTICLES.map((article) => ({
    url: `${BASE}/blog/${article.slug}`,
    lastModified: new Date(article.date),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const groupUrls: MetadataRoute.Sitemap = WORLD_CUP_2026_GROUPS.map((group) => ({
    url: `${BASE}/world-cup-2026/groups/${group.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.92,
  }));

  const teamUrls: MetadataRoute.Sitemap = WORLD_CUP_2026_TEAMS.map((team) => ({
    url: `${BASE}/world-cup-2026/teams/${team.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.94,
  }));

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/matches`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${BASE}/world-cup-2026`, lastModified: new Date(), changeFrequency: "daily", priority: 0.98 },
    { url: `${BASE}/world-cup-2026/groups`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/world-cup-2026/teams`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.96 },
    { url: `${BASE}/world-cup-2026/schedule`, lastModified: new Date(), changeFrequency: "daily", priority: 0.97 },
    { url: `${BASE}/world-cup-2026/standings`, lastModified: new Date(), changeFrequency: "daily", priority: 0.97 },
    { url: `${BASE}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/about`, lastModified: new Date("2026-04-30"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/contact`, lastModified: new Date("2026-04-30"), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/privacy`, lastModified: new Date("2026-04-30"), changeFrequency: "yearly", priority: 0.3 },
    ...matchUrls,
    ...groupUrls,
    ...teamUrls,
    ...articleUrls,
  ];
}
