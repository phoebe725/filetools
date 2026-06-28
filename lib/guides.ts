// Long-form, long-tail SEO guides. Each guide targets a specific search intent
// and links to the tool that solves it. Pure data (server + client safe).
//
// Content is keyed by locale with English required; getGuideContent() falls back
// to English. Pages/sitemap are only generated for locales that actually have
// content (see guideLocales / generateStaticParams), so we never publish English
// text on a localized URL — translations are added locale-by-locale over time.

import type { Locale } from "./i18n/config";
import type { GuideContent } from "./guide-types";
import { guideTranslations } from "./i18n/guides";

export type { GuideSection, GuideContent } from "./guide-types";

export interface Guide {
  slug: string;
  /** Emoji used on the index card. */
  icon: string;
  /** Tool slugs this guide links to. */
  relatedTools: string[];
  /** ISO date (for Article schema). */
  date: string;
  /** Translations keyed by locale; English ("en") is required. */
  content: Partial<Record<Locale, GuideContent>>;
}

export const GUIDES: Guide[] = [
  // ---------------------------------------------------------------- 1
  {
    slug: "compress-pdf-for-email",
    icon: "📉",
    relatedTools: ["compress-pdf", "merge-pdf", "split-pdf"],
    date: "2026-06-28",
    content: {
      en: {
        title: "How to Compress a PDF for Email (Free, No Upload)",
        description:
          "Email bouncing because your PDF is too big? Here's how to shrink a PDF under the 10–25 MB limit for free, in your browser, without uploading the file anywhere.",
        h1: "How to Compress a PDF for Email",
        excerpt:
          "Get a big PDF under the 10–25 MB email limit — free, and without uploading it anywhere.",
        intro:
          "Most email providers reject attachments over a certain size — Gmail caps you at 25 MB, Outlook at 20 MB, and many corporate servers at just 10 MB. A scanned contract or an image-heavy report can blow past that easily. The good news: you can shrink almost any PDF back under the limit in a few seconds, for free, without sending your document to a stranger's server.",
        sections: [
          {
            heading: "Why PDFs get so big in the first place",
            body: [
              "PDFs balloon for one main reason: images. A document that's mostly text is usually tiny — a few hundred kilobytes. But the moment you scan pages, paste in screenshots, or export from a design tool, each page becomes a high-resolution image, and the file size multiplies fast.",
              "That's also why the most effective compression works by re-encoding those images at a more sensible resolution. Text-only PDFs are already compact, so don't expect miracles there — the big wins come from scans and photo-heavy documents.",
            ],
          },
          {
            heading: "Compress your PDF in the browser (step by step)",
            list: [
              "Open the free Compress PDF tool — nothing is uploaded; it runs on your device.",
              "Drag in the PDF you need to email.",
              "Pick a compression level: 'strong' for the smallest file, 'balanced' for a good middle ground.",
              "Download the result and check the new size against your email limit (it shows the before/after).",
            ],
          },
          {
            heading: "If it's still too big",
            body: [
              "Two reliable fallbacks: split the PDF into parts and send them across separate emails, or remove pages you don't actually need before compressing. Both keep quality intact rather than squashing the whole thing harder.",
              "For documents you'll share often, the cleanest long-term fix is to put the file in cloud storage and email a link instead of the attachment — no size limit, and the recipient always gets the latest version.",
            ],
          },
          {
            heading: "A note on privacy",
            body: [
              "Plenty of 'compress PDF' websites work by uploading your file to their servers, processing it there, and sending it back. For an invoice, contract, or medical form, that's a real privacy concern. The tool above does everything locally in your browser using your own device's processing — the file never leaves your computer.",
            ],
          },
        ],
        faqs: [
          {
            q: "What's the maximum email attachment size?",
            a: "Gmail allows 25 MB, Outlook.com 20 MB, and many workplace email servers cap at 10 MB. Aim to get under the lowest limit your recipient might have.",
          },
          {
            q: "Will compressing ruin the quality?",
            a: "For scans and image-heavy PDFs the change is usually barely noticeable at 'balanced' quality. Text stays readable; only the images are re-encoded.",
          },
          {
            q: "Is it safe to compress confidential PDFs online?",
            a: "Only if the tool processes the file in your browser. The Compress PDF tool here never uploads your document, so confidential files stay on your device.",
          },
        ],
      },
    },
  },
  // ---------------------------------------------------------------- 2
  {
    slug: "merge-pdf-without-uploading",
    icon: "🔗",
    relatedTools: ["merge-pdf", "organize-pdf", "split-pdf"],
    date: "2026-06-28",
    content: {
      en: {
        title: "How to Merge PDF Files Without Uploading Them",
        description:
          "Combine several PDFs into one document without uploading anything to a server. A free, private, in-browser way to merge PDFs on any computer.",
        h1: "How to Merge PDF Files Without Uploading Them",
        excerpt:
          "Combine multiple PDFs into one file privately — the merge happens in your browser, not on a server.",
        intro:
          "Combining PDFs is one of the most common document tasks: stapling an invoice to a receipt, joining scanned pages, or assembling a report from several exports. Most online mergers upload your files to do it. If your documents are sensitive — and PDFs usually are — here's how to merge them without anything leaving your computer.",
        sections: [
          {
            heading: "Why 'without uploading' matters",
            body: [
              "When a website merges your PDFs, the traditional approach sends every file to its servers, combines them there, and returns the result. Your documents sit on someone else's machine, however briefly, and you're trusting their retention and security policies.",
              "Modern browsers are powerful enough to do the whole job locally. A tool built that way reads your files into the browser's memory, merges them on your own device, and hands the finished PDF straight back to you — no server round-trip, no upload.",
            ],
          },
          {
            heading: "Merge your PDFs (step by step)",
            list: [
              "Open the free Merge PDF tool — it runs entirely in your browser.",
              "Add two or more PDF files by dragging them in.",
              "Drag the files into the exact order you want them combined.",
              "Click Merge, then download your single combined document.",
            ],
          },
          {
            heading: "Tips for a clean result",
            body: [
              "Order matters: arrange the files before merging so you don't have to redo it. If you only need some pages from a file, trim it first with a split or organize tool, then merge the smaller piece.",
              "Merging copies each page as-is, so text stays selectable and image quality is preserved exactly — you're not flattening or re-rendering anything.",
            ],
          },
        ],
        faqs: [
          {
            q: "Is there a limit on how many PDFs I can merge?",
            a: "There's no server limit because nothing is uploaded. The practical limit is your device's memory and the total file size.",
          },
          {
            q: "Will merging change the quality or make text unselectable?",
            a: "No. Pages are copied into the new document unchanged, so text stays selectable and images keep their original resolution.",
          },
          {
            q: "Does this work on a Mac, Windows, or Chromebook?",
            a: "Yes. Because it runs in the browser, it works on any operating system with a modern browser — no install needed.",
          },
        ],
      },
    },
  },
  // ---------------------------------------------------------------- 3
  {
    slug: "convert-heic-to-jpg-on-windows",
    icon: "📱",
    relatedTools: ["heic-to-jpg", "image-converter", "compress-image"],
    date: "2026-06-28",
    content: {
      en: {
        title: "How to Convert HEIC to JPG on Windows (Free)",
        description:
          "Windows won't open your iPhone's HEIC photos? Convert HEIC to JPG for free in your browser — no software to install, and your photos never get uploaded.",
        h1: "How to Convert HEIC to JPG on Windows",
        excerpt:
          "Open iPhone HEIC photos on Windows by converting them to JPG — free, no install, no upload.",
        intro:
          "iPhones save photos in HEIC, a format that keeps quality high while using less space. The catch: Windows, older software, and many websites still can't open HEIC files. Converting them to JPG fixes that instantly — and you can do it for free in your browser without installing anything or handing your photos to a website.",
        sections: [
          {
            heading: "Why your iPhone photos are HEIC",
            body: [
              "Since iOS 11, Apple defaults to HEIC (High Efficiency Image Container) because it stores the same image quality in roughly half the file size of JPG. It's great on your phone, but compatibility elsewhere is still patchy — which is why a photo that looks fine on your iPhone refuses to open on a Windows PC or upload to an older web form.",
              "JPG, by contrast, opens literally everywhere. Converting is the quickest way to make your photos universally usable.",
            ],
          },
          {
            heading: "Convert HEIC to JPG (step by step)",
            list: [
              "Open the free HEIC to JPG tool in your browser on the Windows PC.",
              "Drag in one or more .heic photos.",
              "Let the tool decode them and convert to JPG on your device.",
              "Download the JPGs — now openable in Photos, Office, and any website.",
            ],
          },
          {
            heading: "Stop new photos saving as HEIC (optional)",
            body: [
              "If you'd rather avoid converting every time, you can make your iPhone shoot JPG directly: open Settings → Camera → Formats, and choose 'Most Compatible'. New photos will be JPG from then on. Your existing HEIC library still needs converting, but new shots won't.",
            ],
          },
          {
            heading: "Keeping your photos private",
            body: [
              "Photos are personal, so it's worth knowing that many HEIC converters upload your images to their servers. The tool here decodes and converts everything in your browser — your photos never leave the computer, which matters when you're converting a whole camera roll.",
            ],
          },
        ],
        faqs: [
          {
            q: "Will I lose quality converting HEIC to JPG?",
            a: "There's a small change because JPG is a lossy format, but it's visually negligible for everyday photos — and you gain compatibility everywhere.",
          },
          {
            q: "Do I need to install software on Windows?",
            a: "No. The conversion runs in your browser, so there's nothing to download or install.",
          },
          {
            q: "Why does HEIC conversion sometimes fail?",
            a: "HEIC isn't natively decodable in every browser. The tool uses a best-effort decoder; if a file won't convert, trying a different browser often helps.",
          },
        ],
      },
    },
  },
  // ---------------------------------------------------------------- 4
  {
    slug: "convert-pdf-to-editable-word",
    icon: "📝",
    relatedTools: ["pdf-to-word", "word-to-pdf", "edit-pdf-text"],
    date: "2026-06-28",
    content: {
      en: {
        title: "How to Convert a PDF to an Editable Word Document (Free)",
        description:
          "Need to edit the text in a PDF? Here's how to convert a PDF into an editable Word (.docx) file for free in your browser, and what to expect from the result.",
        h1: "How to Convert a PDF to an Editable Word Document",
        excerpt:
          "Pull the text out of a PDF into an editable .docx — free, in your browser, with realistic expectations.",
        intro:
          "PDFs are designed to look the same everywhere, which is exactly why they're awkward to edit. If you need to change the wording in a PDF — fix a typo, update a figure, reuse a paragraph — the usual route is to convert it to an editable Word document first. Here's how to do that for free in your browser, plus an honest look at what converts well and what doesn't.",
        sections: [
          {
            heading: "What 'PDF to Word' can and can't do",
            body: [
              "It helps to set expectations up front. A PDF stores text as positioned glyphs, not as flowing paragraphs, so no free tool can perfectly rebuild a complex layout. What a good converter does well is extract the words into an editable .docx you can rework — the text comes across cleanly so you can edit it.",
              "What doesn't always survive: multi-column layouts, exact fonts, embedded images, and intricate tables. If your PDF is mostly prose, you'll get an excellent result. If it's a heavily designed brochure, expect to do some reformatting.",
            ],
          },
          {
            heading: "Convert PDF to Word (step by step)",
            list: [
              "Open the free PDF to Word tool — it extracts text locally in your browser.",
              "Drag in your PDF.",
              "Click Convert; the text is pulled out and a .docx is built on your device.",
              "Download the .docx and open it in Word, Google Docs, or Pages to edit.",
            ],
          },
          {
            heading: "What if the PDF is a scan?",
            body: [
              "If your PDF is a scanned image of a page, there's no real text inside it to extract — it's a picture. In that case, run it through OCR (optical character recognition) first to turn the image into recognizable text, then convert. Our OCR tool does this in the browser too.",
            ],
          },
          {
            heading: "Editing without converting",
            body: [
              "Sometimes you only need to fix a few words and don't want a full Word document. In that case an in-browser 'edit PDF text' tool lets you extract the text, change it, and rebuild a clean text PDF — handy for quick corrections.",
            ],
          },
        ],
        faqs: [
          {
            q: "Will the Word file look exactly like my PDF?",
            a: "Not exactly. The text converts well so you can edit it, but complex layouts, columns, and images aren't perfectly reproduced. It's ideal when you mainly need the words back.",
          },
          {
            q: "Are my files uploaded during conversion?",
            a: "No. Extraction and the .docx are produced entirely in your browser, so the document never leaves your device.",
          },
          {
            q: "Can I convert a scanned PDF to Word?",
            a: "Run it through OCR first to recognize the text, then convert. A scan on its own has no extractable text — it's an image.",
          },
        ],
      },
    },
  },
  // ---------------------------------------------------------------- 5
  {
    slug: "reduce-image-size-without-losing-quality",
    icon: "🗜️",
    relatedTools: ["compress-image", "resize-image", "image-converter"],
    date: "2026-06-28",
    content: {
      en: {
        title: "How to Reduce Image File Size Without Losing Quality (Free)",
        description:
          "Shrink JPG, PNG, and WebP images for faster websites and smaller uploads — without an obvious drop in quality. Free and private, right in your browser.",
        h1: "How to Reduce Image File Size Without Losing Quality",
        excerpt:
          "Make images smaller for the web and uploads while keeping them looking sharp — free and in-browser.",
        intro:
          "Big image files slow down websites, bloat email, and bump into upload limits. The trick is reducing the file size without a visible drop in quality — and most of the time that's entirely possible, because images carry far more data than the eye actually needs. Here's how to do it for free in your browser.",
        sections: [
          {
            heading: "Compress vs. resize: know the difference",
            body: [
              "These two get confused constantly. Compressing lowers the file size by storing the image more efficiently while keeping the same width and height. Resizing changes the actual pixel dimensions. For most 'my image is too big' problems, the right first move is to compress; resize only when the image is also larger on screen than it needs to be.",
              "Often the best results come from doing both: resize a 6000-pixel-wide photo down to the 1600 pixels your website actually displays, then compress that. The savings can be enormous.",
            ],
          },
          {
            heading: "Reduce file size (step by step)",
            list: [
              "Open the free Compress Image tool in your browser.",
              "Drag in a JPG, PNG, or WebP image.",
              "Drag the quality slider down while watching the estimated output size — 70–80% is usually invisible to the eye.",
              "Download the smaller image and compare the before/after size.",
            ],
          },
          {
            heading: "Pick the right format",
            body: [
              "Format choice matters. JPG is best for photographs. PNG is best for graphics with sharp edges or transparency, but it's lossless and often large — converting a photo from PNG to JPG or WebP can cut the size dramatically. WebP frequently beats both at the same quality, if every device that needs the image supports it.",
            ],
          },
          {
            heading: "Why do this in the browser",
            body: [
              "Uploading images to a compression site is slow for large files and means your photos pass through someone else's server. An in-browser tool compresses instantly on your own device — faster, and your images stay private.",
            ],
          },
        ],
        faqs: [
          {
            q: "How much can I compress before quality suffers?",
            a: "For photos, 70–80% quality is usually indistinguishable from the original while cutting size substantially. Push lower for thumbnails where detail matters less.",
          },
          {
            q: "Does compressing change the image's dimensions?",
            a: "No. Compression keeps the same width and height; it only stores the image more efficiently. Use a resize tool if you also want smaller dimensions.",
          },
          {
            q: "Which format gives the smallest file?",
            a: "For photos, WebP is usually smallest, then JPG. PNG is best reserved for graphics and transparency, where it shines despite larger sizes.",
          },
        ],
      },
    },
  },
  // ---------------------------------------------------------------- 6
  {
    slug: "split-pdf-extract-pages",
    icon: "✂️",
    relatedTools: ["split-pdf", "organize-pdf", "merge-pdf"],
    date: "2026-06-28",
    content: {
      en: {
        title: "How to Split a PDF or Extract Specific Pages (Free)",
        description:
          "Pull specific pages or page ranges out of a PDF into a new file — free, private, and in your browser. A simple guide to splitting and extracting PDF pages.",
        h1: "How to Split a PDF or Extract Specific Pages",
        excerpt:
          "Extract just the pages you need from a PDF into a new file — free and entirely in your browser.",
        intro:
          "Not every PDF needs to be shared whole. Maybe you only want pages 3 to 5 of a long report, or you need to pull a single signed page out of a contract. Splitting a PDF lets you extract exactly the pages you need into a new file — and you can do it for free in your browser, without uploading the original anywhere.",
        sections: [
          {
            heading: "Splitting vs. organizing",
            body: [
              "There are two related jobs. Splitting (or extracting) pulls a set of pages out into a brand-new PDF, leaving your original untouched. Organizing reorders and deletes pages within a document. If your goal is 'I just want these specific pages as their own file', splitting is what you want.",
            ],
          },
          {
            heading: "Extract pages (step by step)",
            list: [
              "Open the free Split PDF tool in your browser.",
              "Drag in the PDF you want to pull pages from.",
              "Enter the pages or ranges to keep — for example 1-3, 5, 8-10.",
              "Click Split and download the new PDF containing only those pages.",
            ],
          },
          {
            heading: "Range syntax, explained",
            body: [
              "Ranges use commas and dashes. '1-3' means pages one through three; a single number like '5' grabs just that page; and you can combine them: '1-3, 5, 8-10'. Pages are exported in the order you list them, so you can reorder while you extract.",
              "Want a single page? Just enter its number on its own — for example '4' — to export a one-page PDF.",
            ],
          },
          {
            heading: "Private by design",
            body: [
              "Splitting happens entirely in your browser using your device's own processing, so a confidential contract or report never gets uploaded. When you're done, the original file is unchanged — you've simply created a new, smaller PDF alongside it.",
            ],
          },
        ],
        faqs: [
          {
            q: "What range format should I use?",
            a: "Use commas and dashes, like 1-3, 5, 8-10. Pages are exported in the order you list them.",
          },
          {
            q: "Can I extract just one page?",
            a: "Yes — enter that page number on its own (for example, 4) to export a one-page PDF.",
          },
          {
            q: "Does splitting change my original file?",
            a: "No. A new PDF is created with the pages you chose; your original document is left untouched.",
          },
        ],
      },
    },
  },
];

export const GUIDES_BY_SLUG: Record<string, Guide> = Object.fromEntries(
  GUIDES.map((g) => [g.slug, g])
);

export function getGuide(slug: string): Guide | undefined {
  return GUIDES_BY_SLUG[slug];
}

/** Resolved content for a locale, falling back to English. English lives in the
 *  registry; other locales live in lib/i18n/guides/<locale>.ts. */
export function getGuideContent(slug: string, locale: Locale): GuideContent | null {
  const g = getGuide(slug);
  if (!g) return null;
  if (locale === "en") return g.content.en ?? null;
  return guideTranslations[locale]?.[slug] ?? g.content.en ?? null;
}

/** Whether a guide has real (non-fallback) content for this locale. */
export function guideHasLocale(slug: string, locale: Locale): boolean {
  if (locale === "en") return Boolean(getGuide(slug)?.content.en);
  return Boolean(guideTranslations[locale]?.[slug]);
}

/** Guides that have real content for a locale (used for index + static params). */
export function guidesForLocale(locale: Locale): Guide[] {
  return GUIDES.filter((g) => guideHasLocale(g.slug, locale));
}
