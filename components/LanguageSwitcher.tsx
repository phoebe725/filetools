"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  locales,
  localeNames,
  replaceLocaleInPath,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/config";

interface Props {
  locale: Locale;
  label: string;
}

// Swaps the locale segment of the current path AND remembers the choice, so the
// root entry page can honour it later. We never auto-redirect by IP.
export function LanguageSwitcher({ locale, label }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
      document.cookie = `${LOCALE_STORAGE_KEY}=${next};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
    router.push(replaceLocaleInPath(pathname || "/", next));
  };

  return (
    <label className="ml-1 flex items-center">
      <span className="sr-only">{label}</span>
      <select
        aria-label={label}
        value={locale}
        onChange={(e) => switchTo(e.target.value as Locale)}
        className="cursor-pointer rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300"
      >
        {locales.map((l) => (
          <option key={l} value={l}>
            {localeNames[l]}
          </option>
        ))}
      </select>
    </label>
  );
}
