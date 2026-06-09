import Link from "next/link";
import { getTool } from "@/lib/tools";
import type { Locale } from "@/lib/i18n/config";
import { getToolContent } from "@/lib/i18n/tool-content";

export function RelatedTools({
  slugs,
  locale,
  heading,
}: {
  slugs: string[];
  locale: Locale;
  heading: string;
}) {
  const tools = slugs
    .map((slug) => {
      const base = getTool(slug);
      const content = getToolContent(slug, locale);
      return base && content ? { base, content } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  if (tools.length === 0) return null;
  return (
    <section aria-labelledby="related-heading" className="mt-12">
      <h2 id="related-heading" className="mb-4 text-xl font-semibold text-slate-900">
        {heading}
      </h2>
      <div className="grid gap-3 sm:grid-cols-3">
        {tools.map(({ base, content }) => (
          <Link
            key={base.slug}
            href={`/${locale}/tools/${base.slug}`}
            className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-brand-300 hover:shadow-sm"
          >
            <span className="text-2xl" aria-hidden>
              {base.icon}
            </span>
            <div>
              <p className="font-medium text-slate-800">{content.name}</p>
              <p className="text-xs text-slate-500">{content.tagline}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
