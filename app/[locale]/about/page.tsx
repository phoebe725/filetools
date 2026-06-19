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
  const a = getMessages(locale).legal.about;
  return { title: a.title, description: a.intro };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const a = getMessages(locale).legal.about;
  return (
    <div className="container-page max-w-2xl py-12 prose-tool">
      <h1 className="text-3xl font-bold text-slate-900">{a.title}</h1>
      <p className="mt-2 text-lg text-slate-600">{a.intro}</p>
      {a.sections.map((s, i) => (
        <div key={i}>
          <h2>{s.heading}</h2>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}
