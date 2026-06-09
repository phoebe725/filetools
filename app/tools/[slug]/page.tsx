import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TOOLS, getTool } from "@/lib/tools";
import { ToolClient } from "@/components/tools/ToolClient";
import { PrivacyNote } from "@/components/PrivacyNote";
import { AdSlot } from "@/components/AdSlot";
import { RelatedTools } from "@/components/tools/RelatedTools";
import { HowItWorks, FaqSection, FaqJsonLd } from "@/components/tools/SeoContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.description,
    alternates: { canonical: `/tools/${tool.slug}` },
    openGraph: {
      title: tool.title,
      description: tool.description,
      url: `/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  return (
    <article className="container-page py-8 lg:py-12">
      <FaqJsonLd faqs={tool.faqs} />

      {/* Breadcrumb */}
      <nav className="mb-4 text-sm text-slate-500">
        <Link href="/" className="hover:text-slate-800">
          Home
        </Link>
        <span className="mx-1.5">/</span>
        <span className="text-slate-700">{tool.name}</span>
      </nav>

      <header className="mb-6 max-w-2xl">
        <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900">
          <span aria-hidden>{tool.icon}</span>
          {tool.h1}
        </h1>
        <p className="mt-3 text-lg text-slate-600">{tool.intro}</p>
      </header>

      <AdSlot placement="tool-top" />

      <div className="my-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Tool workflow */}
        <div className="flex flex-col gap-4">
          <PrivacyNote />
          <ToolClient slug={tool.slug} />
        </div>

        {/* Sidebar — sticky side-rail ad on desktop for more viewable impressions */}
        <aside>
          <div className="flex flex-col gap-6 lg:sticky lg:top-20">
            <div className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-500">
                100% private
              </h2>
              <p className="text-sm text-slate-600">
                Everything runs in your browser using your device&apos;s own
                processing. No uploads, no storage, no sign-up.
              </p>
            </div>
            <AdSlot placement="sidebar" />
          </div>
        </aside>
      </div>

      <div className="max-w-2xl space-y-2">
        <HowItWorks steps={tool.howItWorks} />
        <FaqSection faqs={tool.faqs} />
      </div>

      <RelatedTools slugs={tool.related} />

      <div className="mt-12">
        <AdSlot placement="tool-bottom" />
      </div>
    </article>
  );
}
