import Link from "next/link";
import { locales, defaultLocale, localeNames, SITE_URL } from "@/lib/i18n/config";
import { siteConfig } from "@/lib/site-config";
import { getMessages } from "@/lib/i18n/messages";
import { getToolContent } from "@/lib/i18n/tool-content";
import { toolsByCategory, type ToolCategory } from "@/lib/tools";

// Root entry ("/"). Static export can't do server redirects, so this page:
//   1) Renders the REAL homepage content (English) as static HTML, so crawlers
//      and ad reviewers see genuine content + links immediately — not an empty
//      shell. A canonical points at /en to avoid duplicate-content issues.
//   2) Forwards real visitors on the client to their REMEMBERED language (set by
//      the switcher), falling back to English — so user-facing behavior is
//      unchanged (they still land on their language instantly).
//   3) Keeps a <meta http-equiv="refresh"> as a no-JS redirect fallback.
// Detection by browser/IP is intentionally NOT done here — the LocaleSuggest
// banner handles that as a non-intrusive suggestion instead.
const detectScript = `
(function () {
  var supported = ${JSON.stringify(locales)};
  var fallback = ${JSON.stringify(defaultLocale)};
  var base = location.pathname.replace(/\\/+$/, "");
  var chosen = fallback;
  try {
    var stored = localStorage.getItem("${"ft_locale"}");
    if (stored && supported.indexOf(stored) > -1) chosen = stored;
  } catch (e) {}
  location.replace(base + "/" + chosen);
})();
`;

const CATEGORY_ORDER: ToolCategory[] = ["pdf", "convert", "image"];

export default function RootRedirect() {
  // Build the visible fallback from the same registry the localized homepage
  // uses, so the content crawlers see is real and always in sync.
  const t = getMessages(defaultLocale);

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0; url=./${defaultLocale}`} />
        <link rel="canonical" href={`${SITE_URL}/${defaultLocale}`} />
        <title>{t.home.title} — FileTools</title>
        <meta name="description" content={t.home.subtitle} />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: detectScript }} />
        {siteConfig.adsense.client && (
          // AdSense loader on the root document too, so verification finds it here.
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            async
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${siteConfig.adsense.client}`}
          />
        )}
      </head>
      <body className="bg-white text-slate-800">
        <main className="mx-auto max-w-4xl px-4 py-12">
          <h1 className="text-3xl font-bold text-slate-900">{t.home.title}</h1>
          <p className="mt-3 text-lg text-slate-600">{t.home.subtitle}</p>
          <p className="mt-3 text-sm text-emerald-800">{t.home.badge}</p>

          <p className="mt-6">
            <Link
              href={`/${defaultLocale}`}
              className="font-semibold text-brand-600 underline"
            >
              Continue to FileTools →
            </Link>
          </p>

          {CATEGORY_ORDER.map((category) => {
            const tools = toolsByCategory(category);
            if (tools.length === 0) return null;
            return (
              <section key={category} className="mt-8">
                <h2 className="text-xl font-bold text-slate-900">
                  {t.categories[category]}
                </h2>
                <ul className="mt-3 grid gap-x-6 gap-y-1 sm:grid-cols-2">
                  {tools.map((tool) => {
                    const c = getToolContent(tool.slug, defaultLocale)!;
                    return (
                      <li key={tool.slug}>
                        <Link
                          href={`/${defaultLocale}/tools/${tool.slug}`}
                          className="text-slate-700 underline hover:text-slate-900"
                        >
                          {c.name}
                        </Link>
                        <span className="text-slate-500"> — {c.tagline}</span>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}

          <nav className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
            <p className="font-semibold text-slate-600">Languages</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {locales.map((l) => (
                <li key={l}>
                  <Link href={`/${l}`} className="underline hover:text-slate-900">
                    {localeNames[l]}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              <li>
                <Link href={`/${defaultLocale}/privacy`} className="underline hover:text-slate-900">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href={`/${defaultLocale}/terms`} className="underline hover:text-slate-900">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href={`/${defaultLocale}/contact`} className="underline hover:text-slate-900">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </nav>
        </main>
      </body>
    </html>
  );
}
