// Shared guide types live in their own leaf module so that the guides registry
// (lib/guides.ts) and the per-locale translation files (lib/i18n/guides/*.ts)
// can both import them WITHOUT creating an import cycle between guides.ts and
// lib/i18n/guides — a cycle made module init order unreliable, which broke
// generateStaticParams for the guides index.

export interface GuideSection {
  heading: string;
  /** Narrative paragraphs. */
  body?: string[];
  /** Optional ordered list (rendered as numbered steps). */
  list?: string[];
}

export interface GuideContent {
  title: string; // <title>
  description: string; // meta description
  h1: string;
  /** One-line summary shown on the index card. */
  excerpt: string;
  intro: string;
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
}
