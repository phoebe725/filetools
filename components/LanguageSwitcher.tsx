"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeNames, isLocale, type Locale } from "@/lib/i18n/config";

interface Props {
  locale: Locale;
  label: string;
}

// Swaps the locale segment of the current path and navigates there, preserving
// the rest of the route (e.g. /en/tools/merge-pdf → /es/tools/merge-pdf).
export function LanguageSwitcher({ locale, label }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: Locale) => {
    const segments = (pathname || "/").split("/");
    // segments[0] === "" ; segments[1] is the current locale (if present).
    if (segments[1] && isLocale(segments[1])) {
      segments[1] = next;
    } else {
      segments.splice(1, 0, next);
    }
    router.push(segments.join("/") || `/${next}`);
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
