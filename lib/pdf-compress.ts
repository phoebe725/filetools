// Best-effort PDF compression by rasterising each page to a JPEG and rebuilding
// the document. This makes text non-selectable, but gives real savings on
// scanned or image-heavy PDFs. All client-side (pdf.js + pdf-lib).

import { PDFDocument } from "pdf-lib";

export interface CompressOptions {
  /** Render scale — higher = sharper but larger. */
  scale: number;
  /** JPEG quality 0..1. */
  quality: number;
  onProgress?: (done: number, total: number) => void;
}

export async function compressPdf(
  file: File,
  opts: CompressOptions
): Promise<Blob> {
  const { renderPdfToJpegPages } = await import("./pdf-render");
  const pages = await renderPdfToJpegPages(
    file,
    opts.scale,
    opts.quality,
    opts.onProgress
  );

  const doc = await PDFDocument.create();
  for (const p of pages) {
    const img = await doc.embedJpg(p.bytes);
    const page = doc.addPage([p.widthPt, p.heightPt]);
    page.drawImage(img, { x: 0, y: 0, width: p.widthPt, height: p.heightPt });
  }
  const out = await doc.save();
  return new Blob([out as unknown as BlobPart], { type: "application/pdf" });
}
