import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDES, getGuide, getGuideContent, guideHasLocale } from "@/lib/guides";
import { getTool } from "@/lib/tools";
import { getToolContent } from "@/lib/i18n/tool-content";
import { FaqJsonLd } from "@/components/tools/SeoContent";
import { AdSlot } from "@/components/AdSlot";
import { locales, isLocale, defaultLocale, SITE_URL } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// One static page per (locale, guide) pair that actually has content.
export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const guide of GUIDES) {
    for (const locale of locales) {
      if (guideHasLocale(guide.slug, locale)) {
        params.push({ locale, slug: guide.slug });
      }
    }
  }
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getGuideContent(slug, locale);
  if (!content) return {};
  // hreflang only for locales that have real (non-fallback) content.
  const translated = locales.filter((l) => guideHasLocale(slug, l));
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/guides/${slug}`,
      languages: Object.fromEntries(
        translated.map((l) => [l, `${SITE_URL}/${l}/guides/${slug}`])
      ),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${SITE_URL}/${locale}/guides/${slug}`,
      type: "article",
    },
  };
}

function ArticleJsonLd({
  headline,
  description,
  url,
  date,
}: {
  headline: string;
  description: string;
  url: string;
  date: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    datePublished: date,
    dateModified: date,
    author: { "@type": "Organization", name: "FileTools" },
    publisher: { "@type": "Organization", name: "FileTools" },
    mainEntityOfPage: url,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function GuidePage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const guide = getGuide(slug);
  const content = getGuideContent(slug, locale);
  if (!guide || !content) notFound();

  const t = getMessages(locale);
  const relatedTools = guide.relatedTools
    .map((s) => {
      const tool = getTool(s);
      const c = getToolContent(s, locale);
      return tool && c ? { slug: s, icon: tool.icon, name: c.name } : null;
    })
    .filter(Boolean) as { slug: string; icon: string; name: string }[];

  return (
    <article className="container-page py-8 lg:py-12">
      <ArticleJsonLd
        headline={content.h1}
        description={content.description}
        url={`${SITE_URL}/${locale}/guides/${slug}`}
        date={guide.date}
      />
      <FaqJsonLd faqs={content.faqs} />

      <nav className="mb-4 text-sm text-slate-500">
        <Link href={`/${locale}`} className="hover:text-slate-800">
          {t.tool.home}
        </Link>
        <span className="mx-1.5">/</span>
        <Link href={`/${locale}/guides`} className="hover:text-slate-800">
          {t.guides.indexTitle}
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">{content.h1}</span>
      </nav>

      <header className="mb-6 max-w-2xl">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
          <span aria-hidden>{guide.icon}</span>
          {content.h1}
        </h1>
        <p className="mt-3 text-lg text-slate-600">{content.intro}</p>
      </header>

      <AdSlot placement="tool-top" />

      <div className="my-6 max-w-2xl prose-tool">
        {content.sections.map((section, i) => (
          <section key={i}>
            <h2>{section.heading}</h2>
            {section.body?.map((p, j) => (
              <p key={j} className="leading-relaxed text-slate-600">
                {p}
              </p>
            ))}
            {section.list && (
              <ol className="list-decimal space-y-2 pl-5 text-slate-600">
                {section.list.map((item, j) => (
                  <li key={j} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ol>
            )}
          </section>
        ))}
      </div>

      {relatedTools.length > 0 && (
        <div className="my-8 max-w-2xl rounded-xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {t.guides.relatedHeading}
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {relatedTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${locale}/tools/${tool.slug}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:border-slate-300 hover:text-slate-900"
              >
                <span aria-hidden>{tool.icon}</span>
                {tool.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <section aria-labelledby="faq-heading" className="my-8 max-w-2xl prose-tool">
        <h2 id="faq-heading">{t.guides.faqHeading}</h2>
        <div className="divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
          {content.faqs.map((faq, i) => (
            <details key={i} className="group p-4">
              <summary className="cursor-pointer list-none font-medium text-slate-800 marker:hidden">
                <span className="flex items-center justify-between gap-2">
                  {faq.q}
                  <span className="text-slate-400 transition group-open:rotate-180">⌄</span>
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="max-w-2xl">
        <Link
          href={`/${locale}/guides`}
          className="text-sm font-medium text-brand-600 hover:text-brand-700"
        >
          ← {t.guides.backToGuides}
        </Link>
      </div>

      <div className="mt-12">
        <AdSlot placement="tool-bottom" />
      </div>
    </article>
  );
}
