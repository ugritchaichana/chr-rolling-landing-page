import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://chp-rolling.com";

const locales = ["th", "en"] as const;

const routes = [
  "",           // หน้าแรก
  "/about",
  "/services",
  "/capabilities",
  "/contact",
  "/industries",
  "/process",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : 0.8,
        alternates: {
          languages: {
            th: `${BASE_URL}/th${route}`,
            en: `${BASE_URL}/en${route}`,
          },
        },
      });
    }
  }

  return entries;
}
