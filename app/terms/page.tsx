import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms for using FileTools' free, in-browser file tools.",
};

export default function TermsPage() {
  return (
    <div className="container-page max-w-2xl py-12 prose-tool">
      <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
      <p className="mt-2 text-sm text-slate-500">Last updated: June 2026</p>

      <h2>Acceptance</h2>
      <p>
        By using FileTools you agree to these terms. If you don&apos;t agree, please
        don&apos;t use the site.
      </p>

      <h2>The service</h2>
      <p>
        FileTools provides free, browser-based utilities for working with PDF and
        image files. All processing happens on your device. The service is provided
        &ldquo;as is&rdquo; without warranties of any kind.
      </p>

      <h2>Your responsibility</h2>
      <p>
        You are responsible for the files you process and for keeping your own
        backups. Because processing happens locally, we are not responsible for any
        data loss, and you should always retain a copy of your original files.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Don&apos;t use FileTools to process content you don&apos;t have the rights to,
        or in any way that breaks the law.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, FileTools and its authors are not
        liable for any damages arising from the use of, or inability to use, the
        service.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms from time to time. Continued use of the site
        means you accept the current terms.
      </p>
    </div>
  );
}
