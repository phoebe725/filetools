import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guidesForLocale, getGuideContent } from "@/lib/guides";
import { locales, isLocale, defaultLocale, SITE_URL } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

// Only build the index for locales that actually have guides (English for now).
export function generateStaticParams() {
  return locales
    .filter((locale) => guidesForLocale(locale).length > 0)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const g = getMessages(locale).guides;
  return {
    title: g.indexTitle,
    description: g.indexSubtitle,
    alternates: { canonical: `${SITE_URL}/${locale}/guides` },
  };
}

export default async function GuidesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const guides = guidesForLocale(locale);
  if (guides.length === 0) notFound();

  const t = getMessages(locale);

  return (
    <div className="container-page py-10 lg:py-14">
      <section className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t.guides.indexTitle}
        </h1>
        <p className="mt-4 text-lg text-slate-600">{t.guides.indexSubtitle}</p>
      </section>

      <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-2">
        {guides.map((guide) => {
          const c = getGuideContent(guide.slug, locale)!;
          return (
            <Link
              key={guide.slug}
              href={`/${locale}/guides/${guide.slug}`}
              className="group flex flex-col rounded-xl border border-slate-200 bg-white p-5 transition hover:border-slate-300 hover:shadow-sm"
            >
              <span className="text-2xl" aria-hidden>
                {guide.icon}
              </span>
              <h2 className="mt-2 font-semibold text-slate-900 group-hover:text-brand-700">
                {c.h1}
              </h2>
              <p className="mt-1 text-sm text-slate-600">{c.excerpt}</p>
              <span className="mt-3 text-sm font-medium text-brand-600">
                {t.guides.readGuide} →
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
