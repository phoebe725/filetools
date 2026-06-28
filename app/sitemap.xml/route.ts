import { TOOLS } from "@/lib/tools";
import { GUIDES, guideHasLocale, guidesForLocale } from "@/lib/guides";
import { locales, SITE_URL } from "@/lib/i18n/config";

// Hand-built XML sitemap (static). We generate the XML string ourselves rather
// than using Next's MetadataRoute.Sitemap so we control the exact output:
// a plain <urlset> with <loc>/<changefreq>/<priority>, decimal priorities, and
// no hreflang alternates (hreflang is already declared in each page's <head>).
// Served at /sitemap.xml as a static file (GitHub Pages sets Content-Type from
// the .xml extension; we also set it on the Response).
export const dynamic = "force-static";

function urlEntry(loc: string, changefreq: string, priority: string): string {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function GET() {
  const entries: string[] = [];

  // path suffix → priority. "" is the locale home page.
  const staticPaths: [string, string][] = [
    ["", "1.0"],
    ["/guides", "0.6"],
    ["/about", "0.4"],
    ["/privacy", "0.4"],
    ["/terms", "0.4"],
    ["/contact", "0.4"],
  ];

  for (const locale of locales) {
    for (const [path, priority] of staticPaths) {
      // Skip the guides index for locales that have no guides yet.
      if (path === "/guides" && guidesForLocale(locale).length === 0) continue;
      const changefreq = path === "/guides" ? "weekly" : "monthly";
      entries.push(urlEntry(`${SITE_URL}/${locale}${path}`, changefreq, priority));
    }

    for (const tool of TOOLS) {
      entries.push(urlEntry(`${SITE_URL}/${locale}/tools/${tool.slug}`, "monthly", "0.8"));
    }

    for (const guide of GUIDES) {
      if (!guideHasLocale(guide.slug, locale)) continue;
      entries.push(urlEntry(`${SITE_URL}/${locale}/guides/${guide.slug}`, "monthly", "0.7"));
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
