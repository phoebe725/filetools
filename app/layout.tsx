import type { Metadata } from "next";
import "./globals.css";

// Passthrough root layout: the real <html>/<body> live in app/[locale]/layout.tsx
// (so the lang attribute is locale-correct), and the root redirect page renders
// its own document.
export const metadata: Metadata = {
  metadataBase: new URL("https://phoebe725.github.io/filetools"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
