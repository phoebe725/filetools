// Supported locales. English is the default and the fallback for any missing
// translation. Everything is statically generated per locale.

export const locales = [
  "en",
  "es",
  "pt",
  "fr",
  "de",
  "zh-Hans",
  "zh-Hant",
  "ja",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Native names shown in the language switcher. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
  fr: "Français",
  de: "Deutsch",
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
};

/** Maps our locale to the <html lang> / hreflang value. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt",
  fr: "fr",
  de: "de",
  "zh-Hans": "zh-Hans",
  "zh-Hant": "zh-Hant",
  ja: "ja",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** localStorage key remembering the visitor's chosen language. */
export const LOCALE_STORAGE_KEY = "ft_locale";

/** Swaps (or inserts) the locale segment of a path: /en/tools/x → /es/tools/x. */
export function replaceLocaleInPath(pathname: string, next: Locale): string {
  const segments = (pathname || "/").split("/");
  if (segments[1] && isLocale(segments[1])) segments[1] = next;
  else segments.splice(1, 0, next);
  return segments.join("/") || `/${next}`;
}

/** Best supported locale for a browser language tag (e.g. "pt-BR" → "pt"). */
export function matchLocale(tag: string): Locale | null {
  const l = (tag || "").toLowerCase();
  if (l.startsWith("zh")) {
    return l.includes("tw") || l.includes("hk") || l.includes("hant")
      ? "zh-Hant"
      : "zh-Hans";
  }
  const two = l.split("-")[0];
  return (
    locales.find((s) => s.toLowerCase() === l || s.toLowerCase() === two) ?? null
  );
}

// Absolute site URL used for canonical/hreflang/sitemap. The site is served
// from the root of the custom domain pdffiletool.xyz — change this one constant
// if the domain ever changes. (Only read server-side at build.)
export const SITE_URL = "https://pdffiletool.xyz";
