// Per-locale translations of the long-form guides, keyed by locale then slug.
// English is omitted (it lives in lib/guides.ts and is the fallback). A guide
// page/sitemap entry is only generated for a locale once that locale's file
// contains the slug, so we never publish English text on a localized URL.

import type { Locale } from "../config";
import type { GuideContent } from "../../guide-types";

import es from "./es";
import pt from "./pt";
import fr from "./fr";
import de from "./de";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";
import ja from "./ja";

export type GuideTranslations = Partial<Record<string, GuideContent>>;

export const guideTranslations: Partial<Record<Locale, GuideTranslations>> = {
  es,
  pt,
  fr,
  de,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
};
