import type { MetadataRoute } from "next";

const BASE = "https://www.knottyoak.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${BASE}/`,           lastModified: now, changeFrequency: "weekly",  priority: 1 },
    { url: `${BASE}/ministries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/sermons`,    lastModified: now, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${BASE}/mission`,    lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/beliefs`,    lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/covenant`,   lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/give`,       lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/prayer`,     lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
  ];
}
