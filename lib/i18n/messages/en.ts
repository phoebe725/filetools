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
          heading: "Analytics and cookies",
          body: "We may use privacy-friendly, aggregate analytics to understand which tools are popular. We do not sell personal data. If advertising is added in the future, this policy will be updated to describe it clearly.",
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
  },
};

// Shape (widened, not literal) that every other locale must satisfy.
export type Messages = typeof en;
export default en;
