// Ad slots. When AdSense is configured (env vars set) and a slot id exists for
// the placement, a real AdSense unit renders. Otherwise a subtle, non-intrusive
// placeholder reserves the space — so dev and pre-approval builds stay clean.
//
// Ads must never sit inside the upload box or over action buttons.

import { AdSense } from "./AdSense";

export type AdPlacement =
  | "tool-top"
  | "tool-bottom"
  | "content-inline"
  | "sidebar";

const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

// Each placement maps to an ad-unit slot id created in the AdSense dashboard.
const SLOTS: Record<AdPlacement, string | undefined> = {
  "tool-top": process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP,
  "tool-bottom": process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM,
  "content-inline": process.env.NEXT_PUBLIC_ADSENSE_SLOT_INLINE,
  sidebar: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR,
};

const PLACEHOLDER_SIZES: Record<AdPlacement, string> = {
  "tool-top": "min-h-[90px]",
  "tool-bottom": "min-h-[120px]",
  "content-inline": "min-h-[100px]",
  sidebar: "min-h-[600px]",
};

// Tall side rails read better as vertical units; the rest are responsive auto.
const VERTICAL: AdPlacement[] = ["sidebar"];

export function AdSlot({ placement }: { placement: AdPlacement }) {
  const slot = SLOTS[placement];

  if (ADSENSE_CLIENT && slot) {
    return (
      <div className="w-full overflow-hidden" data-ad-placement={placement}>
        <AdSense
          client={ADSENSE_CLIENT}
          slot={slot}
          format={VERTICAL.includes(placement) ? "vertical" : "auto"}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      data-ad-placement={placement}
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-slate-200 bg-slate-100/60 text-[11px] uppercase tracking-wide text-slate-400 ${PLACEHOLDER_SIZES[placement]}`}
    >
      Advertisement
    </div>
  );
}
