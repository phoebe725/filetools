"use client";

import { useEffect, useRef } from "react";

interface AdSenseProps {
  /** Publisher id, e.g. "ca-pub-1234567890123456". */
  client: string;
  /** Ad unit slot id from the AdSense dashboard. */
  slot: string;
  /** "auto" (responsive) is the default; use "vertical" for tall side rails. */
  format?: string;
  responsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

// Renders a single AdSense display unit. The loader script is injected once in
// the root layout; here we just declare the <ins> and ask AdSense to fill it.
export function AdSense({
  client,
  slot,
  format = "auto",
  responsive = true,
  className,
  style,
}: AdSenseProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] };
      w.adsbygoogle = w.adsbygoogle || [];
      w.adsbygoogle.push({});
      pushed.current = true;
    } catch {
      // AdSense not loaded yet (e.g. blocked or not approved). Ignore silently.
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`}
      style={{ display: "block", ...style }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}
