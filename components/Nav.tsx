import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface NavProps {
  locale: Locale;
  t: { pdf: string; image: string; convert: string; language: string };
}

export function Nav({ locale, t }: NavProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2 font-bold text-slate-900"
        >
          <span className="text-xl">🧰</span>
          <span className="text-lg">FileTools</span>
        </Link>
        <div className="flex items-center gap-1 text-sm font-medium text-slate-600">
          <Link href={`/${locale}#convert`} className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            {t.convert}
          </Link>
          <Link href={`/${locale}#pdf`} className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            {t.pdf}
          </Link>
          <Link href={`/${locale}#image`} className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900">
            {t.image}
          </Link>
          <LanguageSwitcher locale={locale} label={t.language} />
        </div>
      </nav>
    </header>
  );
}
