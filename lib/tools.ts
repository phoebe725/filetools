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
    status: "live",
    icon: "📉",
    title: "Compress PDF — Reduce PDF File Size Online (Free, In-Browser)",
    description:
      "Compress PDF files to reduce their size, right in your browser. Best for scanned or image-heavy PDFs. Free and private.",
    h1: "Compress PDF",
    intro:
      "Reduce the file size of large PDFs for easier sharing and emailing. This works by rasterising pages, so it's most effective on scanned or image-heavy documents — and it runs entirely in your browser.",
    howItWorks: [
      "Upload a PDF.",
      "Choose a compression level (strong, balanced, or light).",
      "Click Compress — pages are re-rendered and re-saved locally.",
      "Download the smaller PDF and compare the before/after size.",
    ],
    faqs: [
      {
        q: "Will the text still be selectable?",
        a: "No. Compression rasterises each page (text becomes part of the image), which is why it shrinks scanned PDFs so well but isn't ideal for text-only documents.",
      },
      {
        q: "Why didn't my PDF get smaller?",
        a: "Text-only PDFs are already compact. This tool gives the biggest savings on scans and photo-heavy PDFs.",
      },
    ],
    related: ["merge-pdf", "split-pdf", "images-to-pdf"],
  },
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    tagline: "Extract PDF text into an editable Word doc.",
    category: "convert",
    status: "live",
    icon: "📝",
    title: "PDF to Word — Convert PDF to Editable DOCX (Free, In-Browser)",
    description:
      "Extract the text from a PDF into an editable Word (.docx) document, in your browser. Best-effort, free and private.",
    h1: "PDF to Word",
    intro:
      "Pull the text out of a PDF into an editable Word document. This is a best-effort conversion — the text comes across so you can edit it, but columns, images, and exact layout are not preserved. Runs entirely in your browser.",
    howItWorks: [
      "Upload a PDF.",
      "Click Convert — the text is extracted locally.",
      "A .docx is built in your browser.",
      "Download and edit it in Word, Google Docs, or Pages.",
    ],
    faqs: [
      {
        q: "Will it look exactly like my PDF?",
        a: "No. This extracts the text into an editable document; complex layout, columns, and images aren't reproduced. It's ideal when you mainly need the words back.",
      },
      {
        q: "Are my files uploaded?",
        a: "No — extraction and the .docx are produced entirely in your browser.",
      },
    ],
    related: ["word-to-pdf", "pdf-to-excel", "pdf-to-powerpoint"],
  },
  {
    slug: "word-to-pdf",
    name: "Word to PDF",
    tagline: "Convert a .docx into a shareable PDF.",
    category: "convert",
    status: "live",
    icon: "📃",
    title: "Word to PDF — Convert DOCX to PDF Online (Free, In-Browser)",
    description:
      "Convert a Word (.docx) document into a shareable PDF in your browser. Best-effort, free and private.",
    h1: "Word to PDF",
    intro:
      "Turn a Word .docx into a PDF you can share. Text and paragraph flow are preserved; heavy styling, images, and tables may be simplified. Everything runs in your browser.",
    howItWorks: [
      "Upload a .docx document.",
      "Click Convert — the document is read locally.",
      "A PDF is generated in your browser.",
      "Download your PDF.",
    ],
    faqs: [
      {
        q: "Which files are supported?",
        a: "Modern Word .docx files. The older .doc format isn't supported — re-save it as .docx first.",
      },
      {
        q: "Will it match Word's layout exactly?",
        a: "It's a best-effort conversion focused on text and paragraphs; complex formatting may be simplified.",
      },
    ],
    related: ["pdf-to-word", "merge-pdf", "images-to-pdf"],
  },
  {
    slug: "pdf-to-excel",
    name: "PDF to Excel",
    tagline: "Extract PDF text into a spreadsheet.",
    category: "convert",
    status: "live",
    icon: "📊",
    title: "PDF to Excel — Convert PDF Text to XLSX (Free, In-Browser)",
    description:
      "Extract text from a PDF into an editable Excel (.xlsx) spreadsheet in your browser. Best-effort table detection, free and private.",
    h1: "PDF to Excel",
    intro:
      "Get the text out of a PDF into a spreadsheet. Each line becomes a row, and wide gaps are treated as column breaks. Real-world tables vary, so review the result — but it saves a lot of retyping. Runs in your browser.",
    howItWorks: [
      "Upload a PDF.",
      "Click Convert — text is extracted locally.",
      "An .xlsx is built, splitting columns on wide gaps.",
      "Download and tidy up the columns in Excel or Google Sheets.",
    ],
    faqs: [
      {
        q: "Will it detect my tables perfectly?",
        a: "Not always. PDFs don't store true table structure, so columns are guessed from spacing. Expect to fix some cells, especially in complex layouts.",
      },
      {
        q: "Is it private?",
        a: "Yes — extraction and the spreadsheet are produced entirely in your browser.",
      },
    ],
    related: ["pdf-to-word", "pdf-to-powerpoint", "merge-pdf"],
  },
  {
    slug: "pdf-to-powerpoint",
    name: "PDF to PowerPoint",
    tagline: "Turn each PDF page into a slide.",
    category: "convert",
    status: "live",
    icon: "📽️",
    title: "PDF to PowerPoint — Convert PDF to PPTX (Free, In-Browser)",
    description:
      "Convert PDF pages into PowerPoint (.pptx) slides in your browser. Each page becomes a full-slide image. Free and private.",
    h1: "PDF to PowerPoint",
    intro:
      "Turn a PDF into a PowerPoint deck where each page becomes a slide. Slides look exactly like the PDF (each page is placed as a full-slide image), so they're great for presenting — though the text on them isn't individually editable. Runs in your browser.",
    howItWorks: [
      "Upload a PDF.",
      "Click Convert — each page is rendered locally.",
      "A .pptx is built with one slide per page.",
      "Download and open it in PowerPoint, Keynote, or Google Slides.",
    ],
    faqs: [
      {
        q: "Can I edit the text on the slides?",
        a: "Not directly — each slide is a high-resolution image of the page. This keeps the look identical to the PDF.",
      },
      {
        q: "Is it private?",
        a: "Yes — pages are rendered and the .pptx is built entirely in your browser.",
      },
    ],
    related: ["pdf-to-word", "pdf-to-excel", "pdf-to-images"],
  },
  {
    slug: "ocr-pdf",
    name: "OCR PDF",
    tagline: "Extract text from scanned PDFs & images.",
    category: "pdf",
    status: "live",
    icon: "🔎",
    title: "OCR PDF — Scanned PDF & Image to Text (Free, In-Browser)",
    description:
      "Recognise text in scanned PDFs and images and copy or download it as plain text. Runs entirely in your browser — free and private.",
    h1: "OCR — Scanned PDF & Image to Text",
    intro:
      "Pull the text out of scanned documents, photos, and image-based PDFs using on-device OCR. Everything runs locally in your browser, so your documents stay private. English language.",
    howItWorks: [
      "Upload a scanned PDF or images (PNG/JPG).",
      "Click Extract text — the first run downloads the recognition engine (~10 MB).",
      "Each page is read locally on your device.",
      "Copy the text or download it as a .txt file.",
    ],
    faqs: [
      {
        q: "Does OCR run in my browser?",
        a: "Yes — it uses Tesseract (WebAssembly) entirely on your device. Your files are never uploaded.",
      },
      {
        q: "Which languages are supported?",
        a: "Currently English. The engine downloads its language model on first use, then caches it.",
      },
      {
        q: "Why is the first run slow?",
        a: "The recognition engine and English model (~10 MB) download once on first use. After that it's much faster.",
      },
    ],
    related: ["pdf-to-images", "compress-pdf", "split-pdf"],
  },
  {
    slug: "edit-pdf-text",
    name: "Edit PDF Text",
    tagline: "Extract, edit, and rebuild PDF text.",
    category: "pdf",
    status: "live",
    icon: "✏️",
    title: "Edit PDF Text — Extract, Edit & Rebuild (Free, In-Browser)",
    description:
      "Extract the text from a PDF, edit it page by page, and rebuild a clean text PDF — all in your browser. Free and private.",
    h1: "Edit PDF Text",
    intro:
      "Fix typos and change wording in a PDF. This extracts the text so you can edit it page by page, then rebuilds a clean, text-only PDF. The original fonts, images, and exact layout aren't preserved — it's best when you mainly need to change the words. Runs in your browser.",
    howItWorks: [
      "Upload a PDF.",
      "Edit the extracted text in the box for each page.",
      "Click Rebuild — a new text PDF is generated locally.",
      "Download your edited PDF.",
    ],
    faqs: [
      {
        q: "Does it keep the original design?",
        a: "No. PDFs store text as positioned glyphs, not editable paragraphs, so true in-place editing isn't possible for free in the browser. This rebuilds a clean text PDF from your edits instead.",
      },
      {
        q: "Are my files uploaded?",
        a: "No — extraction and the rebuilt PDF happen entirely on your device.",
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
