import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "FileTools processes every file locally in your browser. We don't upload, store, or see your files.",
};

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-2xl py-12 prose-tool">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: June 2026</p>

      <h2>The short version</h2>
      <p>
        Your files are processed in your browser and never leave your device. We
        don&apos;t upload them, we don&apos;t store them, and we can&apos;t see them.
      </p>

      <h2>How file processing works</h2>
      <p>
        Every tool on FileTools runs entirely as client-side JavaScript. When you
        select a file, it is read into your browser&apos;s memory, processed on your
        own device, and offered back to you as a download. No file data is ever
        transmitted to a server.
      </p>

      <h2>Analytics and cookies</h2>
      <p>
        We may use privacy-friendly, aggregate analytics to understand which tools
        are popular. We do not sell personal data. If advertising is added in the
        future, this policy will be updated to describe it clearly.
      </p>

      <h2>The email field on &ldquo;coming soon&rdquo; tools</h2>
      <p>
        The optional email field shown on in-development tools is currently a UI
        demonstration only and is not transmitted or stored anywhere.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? See our <a href="/contact" className="text-brand-600 underline">contact page</a>.
      </p>
    </div>
  );
}
