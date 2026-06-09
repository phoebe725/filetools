import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOLS, getTool } from "@/lib/tools";
import { ToolClient } from "@/components/tools/ToolClient";
import { PrivacyNote } from "@/components/PrivacyNote";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTools } from "@/components/tools/RelatedTools";
import { TrustBlock } from "@/components/tools/TrustBlock";
import { PartnerCTA } from "@/components/affiliate/PartnerCTA";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { getPartner } from "@/lib/affiliate";
import {
  HowItWorks,
  FaqSection,
  FaqJsonLd,
  SoftwareAppJsonLd,
} from "@/components/tools/SeoContent";
import { locales, isLocale, defaultLocale, SITE_URL } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";
import { getToolContent } from "@/lib/i18n/tool-content";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const content = getToolContent(slug, locale);
  if (!content) return {};
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${SITE_URL}/${locale}/tools/${slug}`,
      languages: Object.fromEntries(
        locales.map((l) => [l, `${SITE_URL}/${l}/tools/${slug}`])
      ),
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `${SITE_URL}/${locale}/tools/${slug}`,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { locale: raw, slug } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const base = getTool(slug);
  const content = getToolContent(slug, locale);
  if (!base || !content) notFound();

  const t = getMessages(locale);
  const partner = getPartner(base.slug);
  const hasPartner = !!partner && partner.url !== "#";

  return (
    <article className="container-page py-8 lg:py-12">
      <FaqJsonLd faqs={content.faqs} />
      <SoftwareAppJsonLd
        name={content.name}
        description={content.description}
        url={`${SITE_URL}/${locale}/tools/${base.slug}`}
      />

      <nav className="mb-4 text-sm text-slate-500">
        <Link href={`/${locale}`} className="hover:text-slate-800">
          {t.tool.home}
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">{content.name}</span>
      </nav>

      <header className="mb-6 max-w-2xl">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
          <span aria-hidden>{base.icon}</span>
          {content.h1}
        </h1>
        <p className="mt-3 text-lg text-slate-600">{content.intro}</p>
      </header>

      <div className="mb-6 max-w-2xl">
        <TrustBlock text={t.tool.trust} />
      </div>

      <AdSlot placement="tool-top" />

      <div className="my-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex flex-col gap-4">
          <PrivacyNote text={t.privacyNote} />
          <ToolClient slug={base.slug} />
        </div>

        <aside>
          <div className="flex flex-col gap-6 lg:sticky lg:top-20">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                {t.tool.privateHeading}
              </h2>
              <p className="text-sm text-slate-600">{t.tool.privateBody}</p>
            </div>
            {hasPartner && (
              <div className="flex flex-col gap-2">
                <PartnerCTA
                  heading={t.affiliate.ctaHeading}
                  body={t.affiliate.ctaBody}
                  cta={t.affiliate.ctaButton}
                  url={partner!.url}
                  network={partner!.network}
                />
                <AffiliateDisclosure text={t.affiliate.disclosure} />
              </div>
            )}
            <AdSlot placement="sidebar" />
          </div>
        </aside>
      </div>

      <div className="max-w-2xl space-y-2">
        <HowItWorks steps={content.howItWorks} heading={t.tool.howItWorks} />
        <FaqSection faqs={content.faqs} heading={t.tool.faq} />
      </div>

      <RelatedTools slugs={base.related} locale={locale} heading={t.tool.related} />

      <div className="mt-12">
        <AdSlot placement="tool-bottom" />
      </div>
    </article>
  );
}
