import type { Metadata } from "next";
import { isLocale, defaultLocale } from "@/lib/i18n/config";
import { getMessages } from "@/lib/i18n/messages";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const t = getMessages(locale).legal.terms;
  return { title: t.title, description: t.sections[0]?.body };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const t = getMessages(locale).legal.terms;
  return (
    <div className="container-page max-w-2xl py-12 prose-tool">
      <h1 className="text-3xl font-bold text-slate-900">{t.title}</h1>
      <p className="mt-2 text-sm text-slate-500">{t.updated}</p>
      {t.sections.map((s, i) => (
        <div key={i}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
