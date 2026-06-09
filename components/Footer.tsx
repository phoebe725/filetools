import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";

interface FooterProps {
  locale: Locale;
  t: { tagline: string; home: string; privacy: string; terms: string; contact: string };
}

export function Footer({ locale, t }: FooterProps) {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span>🧰</span>
          <span className="font-semibold text-slate-700">FileTools</span>
          <span className="text-slate-400">· {t.tagline}</span>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <Link href={`/${locale}`} className="hover:text-slate-900">
            {t.home}
          </Link>
          <Link href={`/${locale}/privacy`} className="hover:text-slate-900">
            {t.privacy}
          </Link>
          <Link href={`/${locale}/terms`} className="hover:text-slate-900">
            {t.terms}
          </Link>
          <Link href={`/${locale}/contact`} className="hover:text-slate-900">
            {t.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
