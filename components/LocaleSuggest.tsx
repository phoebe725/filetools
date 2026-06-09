"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  localeNames,
  matchLocale,
  replaceLocaleInPath,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/config";
import { useI18n } from "./I18nProvider";

const DISMISS_KEY = "ft_suggest_dismissed";

// Detect-and-suggest only: if the visitor's browser language differs from the
// page they're on, offer a switch. We never auto-redirect (bad for SEO + UX).
export function LocaleSuggest() {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const router = useRouter();
  const [suggested, setSuggested] = useState<Locale | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISS_KEY)) return;
      // If they've already chosen this language, don't nag.
      if (localStorage.getItem(LOCALE_STORAGE_KEY) === locale) return;
      const langs = navigator.languages || [navigator.language];
      for (const tag of langs) {
        const m = matchLocale(tag);
        if (m) {
          if (m !== locale) setSuggested(m);
          return;
        }
      }
    } catch {
      /* ignore */
    }
  }, [locale]);

  if (!suggested) return null;

  const name = localeNames[suggested];
  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setSuggested(null);
  };
  const accept = () => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, suggested);
    } catch {
      /* ignore */
    }
    router.push(replaceLocaleInPath(pathname || "/", suggested));
  };

  return (
    <div className="border-b border-brand-100 bg-brand-50">
      <div className="container-page flex flex-col gap-2 py-2.5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <span className="text-slate-700">
          {t.suggest.prompt.replace("{lang}", name)}
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={accept}
            className="rounded-md bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-brand-700"
          >
            {t.suggest.accept.replace("{lang}", name)}
          </button>
          <button
            type="button"
            onClick={dismiss}
            className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50"
          >
            {t.suggest.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
