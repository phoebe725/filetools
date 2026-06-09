// Central registry of every tool. Pages, the homepage grid, related-tools links,
// and SEO metadata are all driven from this single source of truth. This file is
// pure data (no browser/server APIs) so it can be imported from both server and
// client components.

export type ToolCategory = "pdf" | "image" | "convert";

export type ToolStatus =
  | "live" // fully working in the browser
  | "phase2" // real upload UI, but conversion is a placeholder
  | "soon"; // honest coming-soon, no upload processing

export interface Faq {
  q: string;
  a: string;
}

export interface Tool {
  slug: string;
  name: string;
  /** Short one-liner for the homepage card. */
  tagline: string;
  category: ToolCategory;
  status: ToolStatus;
  /** Emoji used on cards as a lightweight icon. */
  icon: string;
  // --- SEO content ---
  title: string; // <title>
  description: string; // meta description
  h1: string;
  intro: string;
  howItWorks: string[];
  faqs: Faq[];
  /** Slugs of related tools shown below the result. */
  related: string[];
}

export const CATEGORY_LABELS: Record<ToolCategory, string> = {
  pdf: "PDF Tools",
  image: "Image Tools",
  convert: "Convert",
};

export const TOOLS: Tool[] = [
  // ---------------------------------------------------------------- IMAGE
  {
    slug: "image-converter",
    name: "Image Converter",
    tagline: "Convert between PNG, JPG, and WebP.",
    category: "image",
    status: "live",
    icon: "🖼️",
    title: "Image Converter — PNG to JPG, JPG to PNG, WebP (Free, In-Browser)",
    description:
      "Convert images between PNG, JPG, and WebP right in your browser. Free, fast, and private — your files never leave your device.",
    h1: "Image Converter",
    intro:
      "Convert PNG, JPG, and WebP images in any direction, instantly and for free. Everything runs locally in your browser, so your images are never uploaded.",
    howItWorks: [
      "Drag and drop your image, or click to choose a file.",
      "Pick the output format (PNG, JPG, or WebP).",
      "Click Convert — processing happens entirely on your device.",
      "Download your converted image.",
    ],
    faqs: [
      {
        q: "Are my images uploaded to a server?",
        a: "No. Conversion happens locally in your browser using the Canvas API. Your images never leave your device.",
      },
      {
        q: "Why is the AVIF option sometimes disabled?",
        a: "AVIF encoding depends on your browser. We detect support automatically and disable formats your browser can't produce.",
      },
      {
        q: "Will converting to JPG lose transparency?",
        a: "Yes. JPG has no transparency, so transparent areas are filled with white. Use PNG or WebP to keep transparency.",
      },
    ],
    related: ["compress-image", "resize-image", "images-to-pdf"],
  },
  {
    slug: "resize-image",
    name: "Resize Image",
    tagline: "Change image dimensions by width or height.",
    category: "image",
    status: "live",
    icon: "📐",
    title: "Resize Image — Change Width & Height Online (Free, Private)",
    description:
      "Resize images by width and height in your browser, with an option to keep the aspect ratio. Free and private — files never leave your device.",
    h1: "Resize Image",
    intro:
      "Resize any PNG, JPG, or WebP image by setting a new width and height. Keep the aspect ratio locked or set exact dimensions. Runs entirely in your browser.",
    howItWorks: [
      "Upload an image by dragging it in or clicking to browse.",
      "Enter a target width and/or height.",
      "Toggle 'Keep aspect ratio' to avoid distortion.",
      "Click Resize and download the result.",
    ],
    faqs: [
      {
        q: "Does resizing reduce quality?",
        a: "Shrinking an image is generally clean. Enlarging beyond the original dimensions can look soft, since pixels are interpolated.",
      },
      {
        q: "Can I keep the aspect ratio?",
        a: "Yes. Enable 'Keep aspect ratio' and the other dimension is calculated automatically as you type.",
      },
    ],
    related: ["compress-image", "image-converter", "images-to-pdf"],
  },
  {
    slug: "compress-image",
    name: "Compress Image",
    tagline: "Shrink JPG/WebP file size with a quality slider.",
    category: "image",
    status: "live",
    icon: "🗜️",
    title: "Compress Image — Reduce JPG & WebP File Size (Free, In-Browser)",
    description:
      "Compress JPG and WebP images with a quality slider and see the before/after file size. Free, private, and entirely in-browser.",
    h1: "Compress Image",
    intro:
      "Reduce image file size with a simple quality slider and instantly compare the before and after sizes. Great for faster websites and smaller email attachments.",
    howItWorks: [
      "Upload a JPG, PNG, or WebP image.",
      "Drag the quality slider to balance size and quality.",
      "Watch the estimated output size update.",
      "Download the compressed image.",
    ],
    faqs: [
      {
        q: "Which formats compress best?",
        a: "JPG and WebP support lossy quality control. PNG is lossless, so it is re-encoded as JPG or WebP for meaningful savings.",
      },
      {
        q: "Is there a file size limit?",
        a: "There's no hard server limit because nothing is uploaded, but very large images may be slow on low-memory devices.",
      },
    ],
    related: ["resize-image", "image-converter", "images-to-pdf"],
  },
  // ---------------------------------------------------------------- CONVERT
  {
    slug: "images-to-pdf",
    name: "Images to PDF",
    tagline: "Combine JPG/PNG/WebP images into one PDF.",
    category: "convert",
    status: "live",
    icon: "📄",
    title: "Images to PDF — Convert JPG & PNG to PDF Online (Free)",
    description:
      "Combine multiple JPG, PNG, or WebP images into a single PDF in your browser. Reorder pages before exporting. Free and private.",
    h1: "Images to PDF",
    intro:
      "Turn a set of images into a single, shareable PDF. Add as many JPG, PNG, or WebP files as you like, drag to reorder them, and export one clean document.",
    howItWorks: [
      "Upload one or more images.",
      "Drag to reorder them into the page order you want.",
      "Click Create PDF — each image becomes one page.",
      "Download the combined PDF.",
    ],
    faqs: [
      {
        q: "Can I control the page order?",
        a: "Yes. Use the up/down controls on each image to set the exact order before exporting.",
      },
      {
        q: "What page size is used?",
        a: "Each page is sized to its image, so there are no awkward margins or cropping.",
      },
    ],
    related: ["merge-pdf", "image-converter", "compress-image"],
  },
  {
    slug: "heic-to-jpg",
    name: "HEIC to JPG",
    tagline: "Convert iPhone HEIC photos to JPG.",
    category: "convert",
    status: "live",
    icon: "📱",
    title: "HEIC to JPG Converter — iPhone Photos to JPG (Browser-Based)",
    description:
      "Convert HEIC photos from your iPhone to JPG in the browser. Best-effort, fully private conversion — files never leave your device.",
    h1: "HEIC to JPG Converter",
    intro:
      "Convert Apple HEIC photos into universally supported JPG images. HEIC decoding in the browser is best-effort and depends on your browser and device.",
    howItWorks: [
      "Upload one or more .heic photos.",
      "We attempt to decode them in your browser.",
      "Convert to JPG.",
      "Download the results.",
    ],
    faqs: [
      {
        q: "Why might HEIC conversion fail?",
        a: "HEIC is not natively decodable in every browser. We use a best-effort library, but some files may not convert.",
      },
    ],
    related: ["image-converter", "compress-image", "resize-image"],
  },
  // ---------------------------------------------------------------- PDF
  {
    slug: "merge-pdf",
    name: "Merge PDF",
    tagline: "Combine multiple PDFs into one.",
    category: "pdf",
    status: "live",
    icon: "🔗",
    title: "Merge PDF — Combine PDF Files Online (Free, Private)",
    description:
      "Merge multiple PDF files into one document in your browser. Reorder files before combining. Free, fast, and private.",
    h1: "Merge PDF",
    intro:
      "Combine several PDFs into a single document. Add your files, drag them into the order you want, and export one merged PDF — all locally in your browser.",
    howItWorks: [
      "Upload two or more PDF files.",
      "Reorder them into the sequence you want.",
      "Click Merge PDF.",
      "Download your combined document.",
    ],
    faqs: [
      {
        q: "Is there a limit on how many PDFs I can merge?",
        a: "There's no server limit. Practical limits depend on your device's memory and the total file size.",
      },
      {
        q: "Are my PDFs uploaded?",
        a: "No. Merging is done locally with pdf-lib. Your documents never leave your device.",
      },
    ],
    related: ["split-pdf", "rotate-pdf", "images-to-pdf"],
  },
  {
    slug: "split-pdf",
    name: "Split PDF",
    tagline: "Extract page ranges into a new PDF.",
    category: "pdf",
    status: "live",
    icon: "✂️",
    title: "Split PDF — Extract Pages & Page Ranges Online (Free)",
    description:
      "Split a PDF by selecting page ranges and export them as a new document. Runs entirely in your browser — private and free.",
    h1: "Split PDF",
    intro:
      "Pull specific pages or ranges out of a PDF into a new file. Enter ranges like 1-3, 5, 8-10 and export exactly the pages you need.",
    howItWorks: [
      "Upload a single PDF.",
      "Enter the page ranges to keep (e.g. 1-3, 5, 8-10).",
      "Click Split PDF.",
      "Download the new document with just those pages.",
    ],
    faqs: [
      {
        q: "What range format should I use?",
        a: "Use commas and dashes, like 1-3, 5, 8-10. Pages are exported in the order you list them.",
      },
    ],
    related: ["merge-pdf", "rotate-pdf", "pdf-to-images"],
  },
  {
    slug: "rotate-pdf",
    name: "Rotate PDF",
    tagline: "Rotate selected pages or the whole PDF.",
    category: "pdf",
    status: "live",
    icon: "🔄",
    title: "Rotate PDF — Rotate Pages 90/180/270° Online (Free)",
    description:
      "Rotate all pages or specific pages of a PDF by 90, 180, or 270 degrees. Free, private, in-browser PDF rotation.",
    h1: "Rotate PDF",
    intro:
      "Fix sideways or upside-down pages. Rotate the entire PDF or just the pages you choose, then export the corrected file.",
    howItWorks: [
      "Upload a single PDF.",
      "Choose the rotation angle and which pages to rotate.",
      "Click Rotate PDF.",
      "Download the rotated document.",
    ],
    faqs: [
      {
        q: "Can I rotate only some pages?",
        a: "Yes. Enter specific page numbers or ranges, or leave it blank to rotate every page.",
      },
    ],
    related: ["merge-pdf", "split-pdf", "pdf-to-images"],
  },
  {
    slug: "pdf-to-images",
    name: "PDF to Images",
    tagline: "Export each PDF page as a PNG.",
    category: "pdf",
    status: "live",
    icon: "🏞️",
    title: "PDF to Images — Convert PDF Pages to PNG (Browser-Based)",
    description:
      "Convert each page of a PDF into a PNG image, right in your browser. Private and free.",
    h1: "PDF to Images",
    intro:
      "Render each page of a PDF as an image you can download. Useful for thumbnails, previews, or pasting pages into other apps.",
    howItWorks: [
      "Upload a single PDF.",
      "We render each page in your browser.",
      "Export pages as PNG images.",
      "Download the results.",
    ],
    faqs: [
      {
        q: "Are my files uploaded?",
        a: "No. Rendering uses pdf.js locally in your browser.",
      },
    ],
    related: ["split-pdf", "rotate-pdf", "merge-pdf"],
  },
  {
    slug: "organize-pdf",
    name: "Organize PDF",
    tagline: "Delete and reorder PDF pages.",
    category: "pdf",
    status: "live",
    icon: "🗂️",
    title: "Organize PDF — Delete & Reorder Pages Online (Browser-Based)",
    description:
      "Delete unwanted pages and reorder the rest of a PDF in your browser. Private and free.",
    h1: "Organize PDF Pages",
    intro:
      "Clean up a PDF by removing pages you don't need and dragging the rest into the right order.",
    howItWorks: [
      "Upload a single PDF.",
      "Remove pages you don't want.",
      "Reorder the remaining pages.",
      "Export the organized PDF.",
    ],
    faqs: [
      {
        q: "Is the original file changed?",
        a: "No. A new PDF is generated; your original file is untouched.",
      },
    ],
    related: ["split-pdf", "merge-pdf", "rotate-pdf"],
  },
  {
    slug: "add-page-numbers",
    name: "Add Page Numbers",
    tagline: "Stamp page numbers onto a PDF.",
    category: "pdf",
    status: "live",
    icon: "🔢",
    title: "Add Page Numbers to PDF — Online & Private (Browser-Based)",
    description:
      "Add page numbers to a PDF document in your browser. Choose position and format. Private and free.",
    h1: "Add Page Numbers to PDF",
    intro:
      "Stamp clean, consistent page numbers onto every page of your PDF without any uploads.",
    howItWorks: [
      "Upload a single PDF.",
      "Choose the position and starting number.",
      "Apply page numbers.",
      "Download the numbered PDF.",
    ],
    faqs: [
      {
        q: "Can I choose where numbers appear?",
        a: "Yes — you'll be able to pick a corner or the center of the footer.",
      },
    ],
    related: ["merge-pdf", "split-pdf", "organize-pdf"],
  },
  // ---------------------------------------------------------------- COMING SOON
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    tagline: "Reduce PDF file size.",
    category: "pdf",
    status: "soon",
    icon: "📉",
    title: "Compress PDF — Reduce PDF File Size (Coming Soon)",
    description:
      "Compress PDF files to reduce their size. Coming soon — a private, in-browser PDF compressor.",
    h1: "Compress PDF",
    intro:
      "Reduce the file size of large PDFs for easier sharing and emailing. This tool is in development.",
    howItWorks: [
      "Upload a PDF.",
      "Choose a compression level.",
      "Compress (coming soon).",
      "Download the smaller PDF.",
    ],
    faqs: [
      {
        q: "When will this be available?",
        a: "Soon. In-browser PDF compression is technically tricky, so we're getting it right before release.",
      },
    ],
    related: ["merge-pdf", "split-pdf", "images-to-pdf"],
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    tagline: "Convert PDF to an editable Word document.",
    category: "convert",
    status: "soon",
    icon: "📝",
    title: "PDF to Word — Convert PDF to DOCX (Coming Soon)",
    description:
      "Convert PDF documents to editable Word (DOCX) files. Coming soon.",
    h1: "PDF to Word",
    intro:
      "Turn PDFs into editable Word documents. This conversion is in development.",
    howItWorks: [
      "Upload a PDF.",
      "Convert to Word (coming soon).",
      "Download the DOCX file.",
    ],
    faqs: [
      {
        q: "Why isn't this ready yet?",
        a: "High-fidelity PDF-to-Word conversion is complex to do well in the browser. We'd rather ship it right.",
      },
    ],
    related: ["word-to-pdf", "pdf-to-excel", "pdf-to-powerpoint"],
  },
  {
    slug: "word-to-pdf",
    name: "Word to PDF",
    tagline: "Convert Word documents to PDF.",
    category: "convert",
    status: "soon",
    icon: "📃",
    title: "Word to PDF — Convert DOCX to PDF (Coming Soon)",
    description: "Convert Word (DOCX) documents into PDF files. Coming soon.",
    h1: "Word to PDF",
    intro: "Convert Word documents into shareable PDFs. This tool is in development.",
    howItWorks: [
      "Upload a Word document.",
      "Convert to PDF (coming soon).",
      "Download the PDF.",
    ],
    faqs: [
      {
        q: "When is this coming?",
        a: "We're working on it. Sign up to be notified when it launches.",
      },
    ],
    related: ["pdf-to-word", "merge-pdf", "images-to-pdf"],
  },
  {
    slug: "pdf-to-excel",
    name: "PDF to Excel",
    tagline: "Extract tables from PDF to Excel.",
    category: "convert",
    status: "soon",
    icon: "📊",
    title: "PDF to Excel — Convert PDF Tables to XLSX (Coming Soon)",
    description: "Extract tables from PDFs into Excel spreadsheets. Coming soon.",
    h1: "PDF to Excel",
    intro:
      "Pull tabular data out of PDFs into editable Excel spreadsheets. This conversion is in development.",
    howItWorks: [
      "Upload a PDF.",
      "Convert tables to Excel (coming soon).",
      "Download the XLSX file.",
    ],
    faqs: [
      {
        q: "Why is this hard?",
        a: "Reliable table detection in PDFs is a difficult problem. We're building it carefully.",
      },
    ],
    related: ["pdf-to-word", "pdf-to-powerpoint", "merge-pdf"],
  },
  {
    slug: "pdf-to-powerpoint",
    name: "PDF to PowerPoint",
    tagline: "Convert PDF pages to slides.",
    category: "convert",
    status: "soon",
    icon: "📽️",
    title: "PDF to PowerPoint — Convert PDF to PPTX (Coming Soon)",
    description: "Convert PDF pages into PowerPoint slides. Coming soon.",
    h1: "PDF to PowerPoint",
    intro:
      "Turn PDF pages into editable PowerPoint slides. This conversion is in development.",
    howItWorks: [
      "Upload a PDF.",
      "Convert to slides (coming soon).",
      "Download the PPTX file.",
    ],
    faqs: [
      {
        q: "When will it be ready?",
        a: "Soon. Leave your email to be notified at launch.",
      },
    ],
    related: ["pdf-to-word", "pdf-to-excel", "pdf-to-images"],
  },
  {
    slug: "ocr-pdf",
    name: "OCR PDF",
    tagline: "Turn scanned PDFs into searchable text.",
    category: "pdf",
    status: "soon",
    icon: "🔎",
    title: "OCR PDF — Scanned PDF to Text (Coming Soon)",
    description:
      "Recognize text in scanned PDFs and make them searchable. Coming soon.",
    h1: "OCR — Scanned PDF to Text",
    intro:
      "Extract text from scanned documents and image-based PDFs. This tool is in development.",
    howItWorks: [
      "Upload a scanned PDF.",
      "Run OCR (coming soon).",
      "Download a searchable PDF or text.",
    ],
    faqs: [
      {
        q: "Will OCR run in my browser?",
        a: "That's the plan — fully local OCR so your documents stay private.",
      },
    ],
    related: ["pdf-to-word", "pdf-to-images", "compress-pdf"],
  },
  {
    slug: "edit-pdf-text",
    name: "Edit PDF Text",
    tagline: "Edit existing text inside a PDF.",
    category: "pdf",
    status: "soon",
    icon: "✏️",
    title: "Edit PDF Text — Modify PDF Content Online (Coming Soon)",
    description: "Edit existing text directly inside PDF files. Coming soon.",
    h1: "Edit PDF Text",
    intro:
      "Change wording and fix typos directly in a PDF. This advanced editor is in development.",
    howItWorks: [
      "Upload a PDF.",
      "Edit the text (coming soon).",
      "Download the updated PDF.",
    ],
    faqs: [
      {
        q: "Why is editing PDF text hard?",
        a: "PDFs store text as positioned glyphs, not flowing paragraphs, so editing in place is complex. We're working on it.",
      },
    ],
    related: ["organize-pdf", "add-page-numbers", "rotate-pdf"],
  },
];

export const TOOLS_BY_SLUG: Record<string, Tool> = Object.fromEntries(
  TOOLS.map((t) => [t.slug, t])
);

export function getTool(slug: string): Tool | undefined {
  return TOOLS_BY_SLUG[slug];
}

export function toolsByCategory(category: ToolCategory): Tool[] {
  return TOOLS.filter((t) => t.category === category && t.status !== "soon");
}

export function comingSoonTools(): Tool[] {
  return TOOLS.filter((t) => t.status === "soon");
}
