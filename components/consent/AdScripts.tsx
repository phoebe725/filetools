"use client";

import Script from "next/script";
import { useConsent } from "./ConsentContext";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

// Loads the AdSense script ONLY after the visitor accepts cookies and a network
// is configured. Until then nothing is loaded (GDPR/UK-compliant by default).
export function AdScripts() {
  const { consent } = useConsent();
  if (!ADSENSE_CLIENT || consent !== "accepted") return null;
  return (
    <Script
      id="adsbygoogle-init"
      async
      strategy="afterInteractive"
      crossOrigin="anonymous"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
    />
  );
}
