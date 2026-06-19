// English is the canonical message set. Its shape (via `typeof`) defines the
// Messages type every other locale must satisfy. Use "{count}" style
// placeholders for interpolation. Keep this serialisable (no functions).

const en = {
  nav: {
    pdf: "PDF",
    image: "Image",
    convert: "Convert",
    language: "Language",
  },
  footer: {
    tagline: "Private, in-browser file tools",
    home: "Home",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact",
    about: "About",
    support: "Support us",
  },
  home: {
    title: "Free, private file tools",
    subtitle:
      "Convert, compress, and combine PDFs and images — right in your browser. Nothing is uploaded. Your files never leave your device.",
    badge: "🔒 100% in-browser · No sign-up · No file storage",
    toolsCount: "{count} tools and counting.",
  },
  categories: {
    pdf: "PDF Tools",
    image: "Image Tools",
    convert: "Convert",
  },
  tool: {
    trust: "100% in your browser · files never uploaded · no sign-up",
    home: "Home",
    howItWorks: "How it works",
    faq: "Frequently asked questions",
    related: "Related tools",
    privateHeading: "100% private",
    privateBody:
      "Everything runs in your browser using your device's own processing. No uploads, no storage, no sign-up.",
  },
  privacyNote:
    "Your files are processed in your browser and never leave your device.",
  // Generic labels used inside the interactive tool widgets.
  widgets: {
    dropTitleMulti: "Drag & drop files here",
    dropTitleSingle: "Drag & drop a file here",
    browse: "or click to browse",
    remove: "Remove",
    moveUp: "Move up",
    moveDown: "Move down",
    working: "Working…",
    loadingTool: "Loading tool…",
    ready: "Your file is ready",
    download: "Download",
    startOver: "Start over",
    was: "was",
    smaller: "smaller",
    larger: "larger",
    dismiss: "Dismiss",
    bestEffort: "Best-effort conversion:",
    comingSoonBanner: "This tool is in development and not available yet.",
    betaConversion: "🚧 Beta — this conversion is coming soon.",
    emailDemo:
      "We're still building this one. Leave your email and we'll let you know the moment it's ready.",
    emailPlaceholder: "you@example.com",
    notifyMe: "Notify me",
    notifyThanks: "Thanks! We'll be in touch. (This is a UI demo and isn't stored.)",
  },
  // Affiliate / partner copy (Prompt B). Shown only on hard-feature pages.
  affiliate: {
    disclosure:
      "Some links on this page are affiliate links. If you buy through them we may earn a commission, at no extra cost to you.",
    ctaHeading: "Need a perfect conversion every time?",
    ctaBody:
      "This in-browser tool is free and best-effort. For pixel-perfect results on complex or large files, a dedicated desktop app can do more.",
    ctaButton: "See recommended tool",
  },
  // Cookie-consent banner (CMP). Ads/analytics load only after acceptance.
  consent: {
    message:
      "We use cookies for analytics and, in the future, advertising. You can accept or reject non-essential cookies.",
    accept: "Accept",
    reject: "Reject",
    learnMore: "Privacy policy",
  },
  // Language suggestion banner — detect & suggest only, never auto-redirect.
  suggest: {
    prompt: "View this site in {lang}?",
    accept: "Switch to {lang}",
    dismiss: "No thanks",
  },
  notFound: {
    title: "Page not found",
    body: "That tool or page doesn't exist (yet).",
    cta: "Back to all tools",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "Last updated: June 2026",
      sections: [
        {
          heading: "The short version",
          body: "Your files are processed in your browser and never leave your device. We don't upload them, we don't store them, and we can't see them.",
        },
        {
          heading: "How file processing works",
          body: "Every tool on FileTools runs entirely as client-side JavaScript. When you select a file, it is read into your browser's memory, processed on your own device, and offered back to you as a download. No file data is ever transmitted to a server.",
        },
        {
          heading: "Cookies",
          body: "We use cookies for two things: remembering your preferences (such as your chosen language), and — only after you accept our cookie banner — analytics and advertising. You can reject non-essential cookies and every tool still works fully.",
        },
        {
          heading: "Advertising",
          body: "We show ads from Google AdSense to keep FileTools free. Google and its partners may use cookies to serve ads based on your prior visits to this and other websites. Ads load only after you accept cookies. You can control personalised advertising in Google's Ads Settings (adssettings.google.com).",
        },
        {
          heading: "Affiliate links",
          body: "Some pages contain affiliate links to third-party products, such as desktop software. If you click one and make a purchase, we may earn a commission at no extra cost to you. These links are disclosed on the page and never affect our free in-browser tools.",
        },
        {
          heading: "Analytics",
          body: "We may use privacy-friendly, aggregate analytics to understand which tools are popular. This never includes the contents of your files, which are never sent to us. We do not sell your personal data.",
        },
        {
          heading: "Your choices",
          body: "You can accept or reject non-essential cookies at any time through the cookie banner, and use your browser settings or Google's Ads Settings to limit ad personalisation.",
        },
        {
          heading: "Contact",
          body: "Questions about privacy? See our contact page.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      updated: "Last updated: June 2026",
      sections: [
        {
          heading: "Acceptance",
          body: "By using FileTools you agree to these terms. If you don't agree, please don't use the site.",
        },
        {
          heading: "The service",
          body: "FileTools provides free, browser-based utilities for working with PDF and image files. All processing happens on your device. The service is provided “as is” without warranties of any kind.",
        },
        {
          heading: "Your responsibility",
          body: "You are responsible for the files you process and for keeping your own backups. Because processing happens locally, we are not responsible for any data loss, and you should always retain a copy of your original files.",
        },
        {
          heading: "Acceptable use",
          body: "Don't use FileTools to process content you don't have the rights to, or in any way that breaks the law.",
        },
        {
          heading: "Limitation of liability",
          body: "To the maximum extent permitted by law, FileTools and its authors are not liable for any damages arising from the use of, or inability to use, the service.",
        },
        {
          heading: "Changes",
          body: "We may update these terms from time to time. Continued use of the site means you accept the current terms.",
        },
      ],
    },
    contact: {
      title: "Contact",
      intro:
        "Found a bug, have a feature request, or want a new tool? We'd love to hear from you.",
      emailHeading: "Email",
      emailBody: "Reach us at hello@filetools.example.com.",
      filesHeading: "A note on files",
      filesBody:
        "Please don't email us your files. Every tool runs entirely in your browser, so we can't access them and won't need them to help.",
    },
    about: {
      title: "About FileTools",
      intro:
        "FileTools is a free collection of privacy-first tools for working with PDFs and images — all running entirely in your browser.",
      sections: [
        {
          heading: "Our mission",
          body: "We want everyday file tasks — merging PDFs, converting images, compressing files — to be fast, free, and private, without forcing you to upload sensitive documents to someone else's server.",
        },
        {
          heading: "How it's different",
          body: "Every tool runs as client-side code on your own device. Your files never leave your browser, there's no sign-up, and nothing is stored. What you do here stays on your computer.",
        },
        {
          heading: "How we keep it free",
          body: "FileTools is funded by unobtrusive ads and occasional affiliate links to tools we genuinely find useful. That lets us keep every tool free for everyone. See our Privacy Policy for the details.",
        },
        {
          heading: "Get in touch",
          body: "Have a bug, an idea, or a tool you wish existed? Visit our Contact page — we'd love to hear from you.",
        },
      ],
    },
  },
};

// Shape (widened, not literal) that every other locale must satisfy.
export type Messages = typeof en;
export default en;
