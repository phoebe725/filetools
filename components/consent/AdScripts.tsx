import { siteConfig } from "@/lib/site-config";

const ADSENSE_CLIENT =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT || siteConfig.adsense.client;

// Emits the AdSense loader script on every page whenever a publisher id is
// configured. Rendered as a plain <script async> (not next/script) so it appears
// as a LITERAL tag in the static HTML — React 19 hoists `<script async>` into
// <head>. This is loaded UNCONDITIONALLY (not behind cookie consent) because the
// AdSense verification/review crawler must be able to find the script in the
// page source — a consent-gated or runtime-injected loader can fail site
// verification. Actual ad UNITS still render only via <AdSlot>, which respects
// cookie consent before requesting an ad.
export function AdScripts() {
  if (!ADSENSE_CLIENT) return null;
  return (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      async
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
    />
  );
}
