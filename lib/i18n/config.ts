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

// Absolute site URL used for canonical/hreflang/sitemap. Includes the GitHub
// Pages base path at build time; change this one constant when moving to a
// custom domain. (Only read server-side at build.)
const BASE_PATH = process.env.GITHUB_PAGES === "true" ? "/filetools" : "";
export const SITE_URL = `https://phoebe725.github.io${BASE_PATH}`;
