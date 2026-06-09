// Affiliate / partner configuration. The PartnerCTA appears only on the "hard
// feature" pages where a paid desktop app is a genuine upgrade over our
// best-effort in-browser conversion. Fill in real URLs + networks later.
//
// 💡 Amazon is per-country: use an Amazon OneLink universal link here so visitors
// are auto-routed to their local Amazon store. For non-Amazon partners a single
// global affiliate URL is fine.

export interface PartnerConfig {
  /** Network identifier, e.g. "amazon-onelink", "impact", "shareasale". */
  network: string;
  /** Affiliate URL (placeholder "#" until you add a real one). */
  url: string;
}

export const AFFILIATE_TOOLS: Record<string, PartnerConfig> = {
  "pdf-to-word": { network: "placeholder", url: "#" },
  "word-to-pdf": { network: "placeholder", url: "#" },
  "pdf-to-excel": { network: "placeholder", url: "#" },
  "pdf-to-powerpoint": { network: "placeholder", url: "#" },
  "ocr-pdf": { network: "placeholder", url: "#" },
  "edit-pdf-text": { network: "placeholder", url: "#" },
};

export function getPartner(slug: string): PartnerConfig | null {
  return AFFILIATE_TOOLS[slug] ?? null;
}
