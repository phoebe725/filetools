"use client";

import Link from "next/link";
import { useConsent } from "./ConsentContext";
import { useI18n } from "../I18nProvider";

// Cookie-consent banner (CMP). Required before showing ads in the EU/UK.
// Ad/analytics scripts stay gated behind "accepted" (see AdScripts / AdSlot).
export function CookieConsent() {
  const { consent, ready, setConsent } = useConsent();
  const { locale, t } = useI18n();

  if (!ready || consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur"
    >
      <div className="container-page flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          {t.consent.message}{" "}
          <Link href={`/${locale}/privacy`} className="text-brand-600 underline">
            {t.consent.learnMore}
          </Link>
        </p>
        <div className="flex flex-shrink-0 gap-2">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            {t.consent.reject}
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-700"
          >
            {t.consent.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
