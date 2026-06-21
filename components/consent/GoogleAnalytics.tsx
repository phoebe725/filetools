"use client";

import Script from "next/script";
import { useConsent } from "./ConsentContext";
import { siteConfig } from "@/lib/site-config";

const GA_ID = siteConfig.analytics.ga4;

// Loads Google Analytics 4 ONLY after the visitor accepts the cookie banner, and
// only when a measurement id is configured. This keeps analytics consent-gated
// (GDPR/UK-compliant, and matches what our privacy policy promises). If the
// visitor rejects or hasn't chosen, nothing loads and no analytics cookie is set.
export function GoogleAnalytics() {
  const { consent } = useConsent();
  if (!GA_ID || consent !== "accepted") return null;
  return (
    <>
      <Script
        id="ga4-loader"
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
