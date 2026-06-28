import type { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools";
import { GUIDES, guideHasLocale, guidesForLocale } from "@/lib/guides";
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
    // Guides — only for locales that actually have content (English for now).
    if (guidesForLocale(locale).length > 0) {
      entries.push({
        url: `${SITE_URL}/${locale}/guides`,
        changeFrequency: "weekly",
        priority: 0.6,
      });
    }
    for (const guide of GUIDES) {
      if (!guideHasLocale(guide.slug, locale)) continue;
      const langs = locales.filter((l) => guideHasLocale(guide.slug, l));
      entries.push({
        url: `${SITE_URL}/${locale}/guides/${guide.slug}`,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            langs.map((l) => [l, `${SITE_URL}/${l}/guides/${guide.slug}`])
          ),
        },
      });
    }
  }
  return entries;
}
