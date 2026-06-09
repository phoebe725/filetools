import type { Locale } from "../config";
import en, { type Messages } from "./en";
import { deepMerge, type DeepPartial } from "./types";
import es from "./es";
import pt from "./pt";
import fr from "./fr";
import de from "./de";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";
import ja from "./ja";

// Locale files may be partial; any missing key falls back to English.
const RAW: Record<Locale, DeepPartial<Messages>> = {
  en,
  es,
  pt,
  fr,
  de,
  "zh-Hans": zhHans,
  "zh-Hant": zhHant,
  ja,
};

export function getMessages(locale: Locale): Messages {
  return deepMerge(en, RAW[locale]);
}

export type { Messages };
