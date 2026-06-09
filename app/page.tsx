import { locales, defaultLocale } from "@/lib/i18n/config";

// Root entry. Static export can't do server redirects, so this page forwards on
// the client to the visitor's REMEMBERED language (set by the switcher), falling
// back to English. We deliberately do NOT auto-detect by browser/IP here — the
// LocaleSuggest banner handles detection as a non-intrusive suggestion instead.
const detectScript = `
(function () {
  var supported = ${JSON.stringify(locales)};
  var fallback = ${JSON.stringify(defaultLocale)};
  var base = location.pathname.replace(/\\/+$/, "");
  var chosen = fallback;
  try {
    var stored = localStorage.getItem("${"ft_locale"}");
    if (stored && supported.indexOf(stored) > -1) chosen = stored;
  } catch (e) {}
  location.replace(base + "/" + chosen);
})();
`;

export default function RootRedirect() {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <meta httpEquiv="refresh" content={`0; url=./${defaultLocale}`} />
        <title>FileTools</title>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: detectScript }} />
      </head>
      <body>
        <noscript>
          <a href={`./${defaultLocale}`}>Continue to FileTools</a>
        </noscript>
      </body>
    </html>
  );
}
