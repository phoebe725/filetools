import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import { donateUrl, siteConfig } from "@/lib/site-config";
import { getMessages } from "@/lib/i18n/messages";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";

interface FooterProps {
  locale: Locale;
  t: {
    tagline: string;
    home: string;
    privacy: string;
    terms: string;
    contact: string;
    about: string;
    support: string;
    recommended: string;
    pcloud: string;
  };
}

export function Footer({ locale, t }: FooterProps) {
  // Renders only when a Ko-fi username is set in lib/site-config.ts.
  const kofi = donateUrl();
  const pcloud = siteConfig.partners.pcloud;
  const disclosure = getMessages(locale).affiliate.disclosure;

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container-page flex flex-col gap-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span>🧰</span>
          <span className="font-semibold text-slate-700">FileTools</span>
          <span className="text-slate-400">· {t.tagline}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <Link href={`/${locale}`} className="hover:text-slate-900">
            {t.home}
          </Link>
          <Link href={`/${locale}/about`} className="hover:text-slate-900">
            {t.about}
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
          {kofi && (
            <a
              href={kofi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#ff5e5b] px-3 py-1.5 font-semibold text-white hover:bg-[#ff4542]"
            >
              <span aria-hidden>☕</span>
              {t.support}
            </a>
          )}
        </div>
      </div>

      {pcloud && (
        <div className="container-page border-t border-slate-100 py-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {t.recommended}
          </p>
          <a
            href={pcloud}
            target="_blank"
            rel="sponsored noopener noreferrer"
            data-network="pcloud"
            className="mt-2 inline-block text-sm text-slate-600 hover:text-slate-900"
          >
            ☁️ {t.pcloud}
          </a>
          <div className="mt-3 max-w-2xl">
            <AffiliateDisclosure text={disclosure} />
          </div>
        </div>
      )}
    </footer>
  );
}
