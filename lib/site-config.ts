






// Central, non-secret site configuration for IDs and external links that aren't
// per-tool (those live in lib/affiliate.ts) and aren't ad slots (those read env
// in components/AdSlot.tsx). One place to flip before / after getting a domain.

export const siteConfig = {
  /** Ko-fi donation. Set `username` to your Ko-fi handle to switch the footer
   *  button on; leave it empty and the button renders nothing. The link opens
   *  https://ko-fi.com/<username> in a new tab. No backend, no SDK. */
  donation: {
    username: "pdffiletool" as string, // → https://ko-fi.com/pdffiletool
  },

  /** Google AdSense. The publisher id is PUBLIC (it appears in the loader script
   *  on every page), so it lives here rather than in a secret env file. An empty
   *  `client` disables AdSense entirely. The loader script loads on every page so
   *  AdSense can verify the site; individual ad units only render once you create
   *  Display ad units in AdSense and paste their numeric slot ids below. */
  adsense: {
    client: "ca-pub-4850580320405062" as string,
    slots: { top: "", bottom: "", inline: "", sidebar: "" },
  },

  /** Global affiliate partners (not per-tool — those live in lib/affiliate.ts).
   *  An empty string hides that partner's CTAs everywhere. All outbound partner
   *  links carry rel="sponsored noopener". */
  partners: {
    pcloud: "https://partner.pcloud.com/r/156179" as string,
  },

  /** Google Analytics 4. The measurement id is PUBLIC. Empty disables analytics.
   *  GA only loads AFTER the visitor accepts the cookie banner (see
   *  components/consent/GoogleAnalytics.tsx), per our privacy policy. */
  analytics: {
    ga4: "G-3QPBN25KSS" as string,
  },
} as const;

/** Resolved Ko-fi URL, or null when no username is configured yet. */
export function donateUrl(): string | null {
  const u = siteConfig.donation.username.trim();
  return u ? `https://ko-fi.com/${u}` : null;
}
