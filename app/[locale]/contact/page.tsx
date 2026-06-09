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
  const c = getMessages(locale).legal.contact;
  return { title: c.title, description: c.intro };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const c = getMessages(locale).legal.contact;
  return (
    <div className="container-page max-w-2xl py-12 prose-tool">
      <h1 className="text-3xl font-bold text-slate-900">{c.title}</h1>
      <p>{c.intro}</p>
      <h2>{c.emailHeading}</h2>
      <p>
        <a href="mailto:hello@filetools.example.com" className="text-brand-600 underline">
          {c.emailBody}
        </a>
      </p>
      <h2>{c.filesHeading}</h2>
      <p>{c.filesBody}</p>
    </div>
  );
}
