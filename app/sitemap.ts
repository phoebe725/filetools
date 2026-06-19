import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";
import { locales, SITE_URL } from "@/lib/i18n/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const staticPaths = ["", "/about", "/privacy", "/terms", "/contact"];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "monthly",
        priority: path === "" ? 1 : 0.4,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}${path}`])
          ),
        },
      });
    }
    for (const tool of TOOLS) {
      entries.push({
        url: `${SITE_URL}/${locale}/tools/${tool.slug}`,
        changeFrequency: "monthly",
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${SITE_URL}/${l}/tools/${tool.slug}`])
          ),
        },
      });
    }
  }
  return entries;
}
