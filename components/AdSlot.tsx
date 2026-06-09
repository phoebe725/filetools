"use client";

// Ad slots reserve FIXED dimensions so enabling a network later causes no layout
// shift. They render nothing until (a) a network is configured via env and
// (b) the visitor has accepted cookies. Never place these in the conversion flow.

import { AdSense } from "./AdSense";
import { useConsent } from "./consent/ConsentContext";

export type AdPlacement =
  | "tool-top"
  | "tool-bottom"
  | "content-inline"
  | "sidebar";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

const SLOTS: Record<AdPlacement, string | undefined> = {
  "tool-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP,
  "tool-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM,
  "content-inline": process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE,
  sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR,
};

// Fixed, reserved dimensions per placement (prevents cumulative layout shift).
const DIMS: Record<AdPlacement, string> = {
  "tool-top": "h-[90px]",
  "tool-bottom": "h-[120px]",
  "content-inline": "h-[100px]",
  sidebar: "h-[250px] lg:h-[600px]",
};

export function AdSlot({ placement }: { placement: AdPlacement }) {
  const { consent } = useConsent();
  const slot = SLOTS[placement];
  const configured = Boolean(ADSENSE_CLIENT && slot);

  // No network configured yet → render nothing (keeps the site clean now).
  // Once env vars are set, the fixed box below reserves space immediately, so
  // going live with ads introduces no layout shift.
  if (!configured) return null;

  return (
    <div
      data-ad-placement={placement}
      className={`w-full overflow-hidden rounded-lg ${DIMS[placement]}`}
    >
      {consent === "accepted" && (
        <AdSense
          client={ADSENSE_CLIENT as string}
          slot={slot as string}
          format={placement === "sidebar" ? "vertical" : "auto"}
        />
      )}
    </div>
  );
}
