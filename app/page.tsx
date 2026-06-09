import { locales, defaultLocale } from "@/lib/i18n/config";

// Root entry. Static export can't do server redirects, so this page detects the
// visitor's browser language on the client and forwards to the matching locale
// (honouring the deployment's base path), falling back to English.
const detectScript = `
(function () {
  var supported = ${JSON.stringify(locales)};
  var fallback = ${JSON.stringify(defaultLocale)};
  var base = location.pathname.replace(/\\/+$/, "");
  function pick() {
    var langs = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < langs.length; i++) {
      var l = (langs[i] || "").toLowerCase();
      if (l.indexOf("zh") === 0) {
        return (l.indexOf("tw") > -1 || l.indexOf("hk") > -1 || l.indexOf("hant") > -1)
          ? "zh-Hant" : "zh-Hans";
      }
      var two = l.split("-")[0];
      for (var j = 0; j < supported.length; j++) {
        if (supported[j].toLowerCase() === l || supported[j].toLowerCase() === two) {
          return supported[j];
        }
      }
    }
    return fallback;
  }
  location.replace(base + "/" + pick());
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
