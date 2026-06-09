"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Consent = "accepted" | "rejected" | null;

const STORAGE_KEY = "ft_consent";

interface ConsentValue {
  consent: Consent;
  /** True once we've read the stored value (avoids hydration mismatch). */
  ready: boolean;
  setConsent: (c: Exclude<Consent, null>) => void;
}

const ConsentContext = createContext<ConsentValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "accepted" || stored === "rejected") setConsentState(stored);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  const setConsent = (c: Exclude<Consent, null>) => {
    try {
      localStorage.setItem(STORAGE_KEY, c);
    } catch {
      /* ignore */
    }
    setConsentState(c);
  };

  return (
    <ConsentContext.Provider value={{ consent, ready, setConsent }}>
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent(): ConsentValue {
  const ctx = useContext(ConsentContext);
  if (!ctx) throw new Error("useConsent must be used within ConsentProvider");
  return ctx;
}
