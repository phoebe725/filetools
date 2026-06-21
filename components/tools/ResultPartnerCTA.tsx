"use client";

// pCloud affiliate CTA shown on a tool's success/result screen, AFTER the
// download button (never blocking it). Reuses the shared <PartnerCTA> and
// <AffiliateDisclosure>; all copy is i18n. Renders nothing if no pCloud link is
// configured. The outbound link carries rel="sponsored noopener" (via PartnerCTA).

import { PartnerCTA } from "@/components/affiliate/PartnerCTA";
import { AffiliateDisclosure } from "@/components/affiliate/AffiliateDisclosure";
import { useI18n } from "@/components/I18nProvider";
import { siteConfig } from "@/lib/site-config";

export function ResultPartnerCTA() {
  const { t } = useI18n();
  const url = siteConfig.partners.pcloud;
  if (!url) return null;
  return (
    <div className="flex flex-col gap-2 text-left">
      <PartnerCTA
        heading={t.affiliate.pcloud.heading}
        body={t.affiliate.pcloud.body}
        cta={t.affiliate.pcloud.button}
        url={url}
        network="pcloud"
      />
      <AffiliateDisclosure text={t.affiliate.disclosure} />
    </div>
  );
}
