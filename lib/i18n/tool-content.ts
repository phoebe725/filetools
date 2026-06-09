// Resolves the translatable SEO content for a tool in a given locale, falling
// back to the English text in the registry when a translation is missing.

import { getTool } from "../tools";
import type { Faq } from "../tools";
import type { Locale } from "./config";
import { toolTranslations } from "./tool-translations";

export interface ToolContent {
  name: string;
  tagline: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  howItWorks: string[];
  faqs: Faq[];
}

export function getToolContent(slug: string, locale: Locale): ToolContent | null {
  const base = getTool(slug);
  if (!base) return null;
  const tr = toolTranslations[locale]?.[slug];
  return {
    name: tr?.name ?? base.name,
    tagline: tr?.tagline ?? base.tagline,
    title: tr?.title ?? base.title,
    description: tr?.description ?? base.description,
    h1: tr?.h1 ?? base.h1,
    intro: tr?.intro ?? base.intro,
    howItWorks: tr?.howItWorks ?? base.howItWorks,
    faqs: tr?.faqs ?? base.faqs,
  };
}
