import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the FileTools team with questions or feedback.",
};

export default function ContactPage() {
  return (
    <div className="container-page max-w-2xl py-12 prose-tool">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p>
        Found a bug, have a feature request, or want a new tool? We&apos;d love to
        hear from you.
      </p>

      <h2>Email</h2>
      <p>
        Reach us at{" "}
        <a href="mailto:hello@filetools.example.com" className="text-brand-600 underline">
          hello@filetools.example.com
        </a>
        .
      </p>

      <h2>A note on files</h2>
      <p>
        Please don&apos;t email us your files. Every tool runs entirely in your
        browser, so we can&apos;t access them and won&apos;t need them to help.
      </p>
    </div>
  );
}
