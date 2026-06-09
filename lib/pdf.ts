// PDF helpers built on pdf-lib. Imported dynamically by tool components so the
// library stays out of the initial bundle.

import { PDFDocument, degrees } from "pdf-lib";

// pdf-lib's save() returns Uint8Array<ArrayBufferLike>, which current DOM lib
// typings don't accept directly as a BlobPart. This wrapper keeps the cast in
// one place.
function pdfBlob(bytes: Uint8Array): Blob {
  return new Blob([bytes as unknown as BlobPart], { type: "application/pdf" });
}

/** Merges multiple PDF files (in the given order) into one. */
export async function mergePdfs(files: File[]): Promise<Blob> {
  const merged = await PDFDocument.create();
  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const doc = await PDFDocument.load(bytes);
    const pages = await merged.copyPages(doc, doc.getPageIndices());
    pages.forEach((p) => merged.addPage(p));
  }
  const out = await merged.save();
  return pdfBlob(out);
}

/** Reads the page count of a PDF file. */
export async function getPageCount(file: File): Promise<number> {
  const bytes = await file.arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  return doc.getPageCount();
}

/**
 * Parses a page-range string like "1-3, 5, 8-10" into 0-based page indices.
 * Throws on invalid input or out-of-range pages.
 */
export function parsePageRanges(input: string, pageCount: number): number[] {
  const indices: number[] = [];
  const parts = input
    .split(",")
    .map((p) => p.trim())
    .filter(Boolean);
  if (parts.length === 0) throw new Error("Enter at least one page or range.");

  for (const part of parts) {
    const rangeMatch = part.match(/^(\d+)\s*-\s*(\d+)$/);
    const singleMatch = part.match(/^(\d+)$/);
    if (rangeMatch) {
      const start = parseInt(rangeMatch[1], 10);
      const end = parseInt(rangeMatch[2], 10);
      if (start < 1 || end < 1 || start > pageCount || end > pageCount) {
        throw new Error(`Range "${part}" is outside 1–${pageCount}.`);
      }
      const step = start <= end ? 1 : -1;
      for (let p = start; step > 0 ? p <= end : p >= end; p += step) {
        indices.push(p - 1);
      }
    } else if (singleMatch) {
      const p = parseInt(singleMatch[1], 10);
      if (p < 1 || p > pageCount) {
        throw new Error(`Page ${p} is outside 1–${pageCount}.`);
      }
      indices.push(p - 1);
    } else {
      throw new Error(`Could not understand "${part}". Use formats like 1-3, 5, 8-10.`);
    }
  }
  return indices;
}

/** Exports the given 0-based page indices into a new PDF. */
export async function extractPages(file: File, indices: number[]): Promise<Blob> {
  const bytes = await file.arrayBuffer();
  const src = await PDFDocument.load(bytes);
  const out = await PDFDocument.create();
  const pages = await out.copyPages(src, indices);
  pages.forEach((p) => out.addPage(p));
  const saved = await out.save();
  return pdfBlob(saved);
}

/**
 * Rotates pages of a PDF. `pageIndices` is 0-based; pass null to rotate all
 * pages. `angle` is added to each page's existing rotation.
 */
export async function rotatePdf(
  file: File,
  angle: number,
  pageIndices: number[] | null
): Promise<Blob> {
  const bytes = await file.arrayBuffer();
  const doc = await PDFDocument.load(bytes);
  const pages = doc.getPages();
  const target = pageIndices ?? pages.map((_, i) => i);
  const set = new Set(target);
  pages.forEach((page, i) => {
    if (set.has(i)) {
      const current = page.getRotation().angle;
      page.setRotation(degrees((current + angle) % 360));
    }
  });
  const saved = await doc.save();
  return pdfBlob(saved);
}

/** Builds a PDF where each image becomes one page sized to the image. */
export async function imagesToPdf(files: File[]): Promise<Blob> {
  const doc = await PDFDocument.create();
  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const isPng = file.type === "image/png" || file.name.toLowerCase().endsWith(".png");
    let embedded;
    if (isPng) {
      embedded = await doc.embedPng(bytes);
    } else {
      // pdf-lib only embeds PNG/JPG. Convert other formats (e.g. WebP) to PNG
      // via canvas first.
      try {
        embedded = await doc.embedJpg(bytes);
      } catch {
        const pngBytes = await rasterToPng(file);
        embedded = await doc.embedPng(pngBytes);
      }
    }
    const page = doc.addPage([embedded.width, embedded.height]);
    page.drawImage(embedded, {
      x: 0,
      y: 0,
      width: embedded.width,
      height: embedded.height,
    });
  }
  const saved = await doc.save();
  return pdfBlob(saved);
}

/** Converts any browser-decodable image to PNG bytes via canvas. */
async function rasterToPng(file: File): Promise<ArrayBuffer> {
  const url = URL.createObjectURL(file);
  try {
    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const i = new Image();
      i.onload = () => resolve(i);
      i.onerror = () => reject(new Error(`Could not read "${file.name}".`));
      i.src = url;
    });
    const canvas = document.createElement("canvas");
    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas unavailable.");
    ctx.drawImage(img, 0, 0);
    const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, "image/png"));
    if (!blob) throw new Error("Image conversion failed.");
    return blob.arrayBuffer();
  } finally {
    URL.revokeObjectURL(url);
  }
}
