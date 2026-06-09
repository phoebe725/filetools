// Per-locale translations of tool SEO content, keyed by locale then slug.
// English is omitted (it lives in lib/tools.ts and is the fallback). Locale
// files are generated translations; any missing tool/field falls back to English.

import type { Locale } from "./config";
import type { ToolContent } from "./tool-content";

import es from "./tools/es";
import pt from "./tools/pt";
import fr from "./tools/fr";
import de from "./tools/de";
import zhHans from "./tools/zh-Hans";
import zhHant from "./tools/zh-Hant";
import ja from "./tools/ja";

export type ToolTranslations = Partial<Record<string, Partial<ToolContent>>>;

export const toolTranslations: Partial<Record<Locale, ToolTranslations>> = {
  es,
  pt,
  fr,
  de,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
};
