import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://relieve.kr";
  const locales = ["ko", "en"];
  const pages = ["", "/services", "/maternity", "/aftercare", "/reservation", "/yzone", "/about", "/location", "/blog"];

  const entries: MetadataRoute.Sitemap = [];

  // Generate sitemap entries for each locale and page
  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "weekly" : "monthly",
        priority: page === "" ? 1 : page === "/services" || page === "/maternity" ? 0.9 : 0.8,
        alternates: {
          languages: {
            ko: `${baseUrl}/ko${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}
