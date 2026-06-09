"use client";

// Honest banner for best-effort conversions whose layout/formatting may not be
// preserved. The prefix is localized; the specific caveat is passed as children.

import { useWidgets } from "@/components/I18nProvider";

export function FidelityNote({ children }: { children: React.ReactNode }) {
  const w = useWidgets();
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm text-amber-800">
      ⚠️ {w.bestEffort} {children}
    </div>
  );
}
