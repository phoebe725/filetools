// Extracts text from a PDF using pdf.js. Layout is approximated by line, using
// pdf.js's end-of-line hints. Client-only.

let workerReady = false;

async function loadPdfjs() {
  const pdfjs = await import("pdfjs-dist");
  if (!workerReady) {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).href;
    workerReady = true;
  }
  return pdfjs;
}

/** Returns the text of each page as an array of lines. */
export async function extractPdfPagesAsLines(file: File): Promise<string[][]> {
  const pdfjs = await loadPdfjs();
  const data = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data }).promise;
  const pages: string[][] = [];
  try {
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      const lines: string[] = [];
      let line = "";
      for (const item of content.items) {
        if (!("str" in item)) continue;
        line += item.str;
        // pdf.js marks the last fragment of a visual line with hasEOL.
        if ((item as { hasEOL?: boolean }).hasEOL) {
          lines.push(line.trimEnd());
          line = "";
        }
      }
      if (line.trim()) lines.push(line.trimEnd());
      pages.push(lines);
      page.cleanup();
    }
  } finally {
    await doc.destroy();
  }
  return pages;
}

/** Returns each page's text as a single string. */
export async function extractPdfPagesAsText(file: File): Promise<string[]> {
  const pages = await extractPdfPagesAsLines(file);
  return pages.map((lines) => lines.join("\n"));
}
