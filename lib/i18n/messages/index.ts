import type { Locale } from "../config";
import en, { type Messages } from "./en";
import es from "./es";
import pt from "./pt";
import fr from "./fr";
import de from "./de";
import zhHans from "./zh-Hans";
import zhHant from "./zh-Hant";
import ja from "./ja";

const MESSAGES: Record<Locale, Messages> = {
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
  return MESSAGES[locale] ?? en;
}

export type { Messages };
