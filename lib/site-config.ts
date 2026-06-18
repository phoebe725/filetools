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
} as const;

/** Resolved Ko-fi URL, or null when no username is configured yet. */
export function donateUrl(): string | null {
  const u = siteConfig.donation.username.trim();
  return u ? `https://ko-fi.com/${u}` : null;
}
