// Renders PDF pages to images using pdf.js. Client-only (uses canvas + a web
// worker). pdf.js is imported dynamically so it stays out of the initial bundle.

let workerReady = false;

async function loadPdfjs() {
  const pdfjs = await import("pdfjs-dist");
  if (!workerReady) {
    // webpack rewrites this to the correct hashed asset URL (honouring basePath).
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      "pdfjs-dist/build/pdf.worker.min.mjs",
      import.meta.url
    ).href;
    workerReady = true;
  }
  return pdfjs;
}

export async function getPdfPageCount(file: File): Promise<number> {
  const pdfjs = await loadPdfjs();
  const data = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data }).promise;
  const count = doc.numPages;
  await doc.destroy();
  return count;
}

export interface RenderedPage {
  pageNumber: number;
  blob: Blob;
  dataUrl: string;
  width: number;
  height: number;
}

async function renderToCanvas(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  page: any,
  scale: number
): Promise<HTMLCanvasElement> {
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not available in this browser.");
  await page.render({ canvasContext: ctx, viewport }).promise;
  return canvas;
}

/** Full-resolution PNG render of every page (for PDF → Images). */
export async function renderPdfToImages(
  file: File,
  scale = 2,
  onProgress?: (done: number, total: number) => void
): Promise<RenderedPage[]> {
  const pdfjs = await loadPdfjs();
  const data = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data }).promise;
  const out: RenderedPage[] = [];
  try {
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const canvas = await renderToCanvas(page, scale);
      const blob = await new Promise<Blob | null>((res) =>
        canvas.toBlob(res, "image/png")
      );
      if (!blob) throw new Error(`Could not render page ${i}.`);
      out.push({
        pageNumber: i,
        blob,
        dataUrl: canvas.toDataURL("image/png"),
        width: canvas.width,
        height: canvas.height,
      });
      page.cleanup();
      onProgress?.(i, doc.numPages);
    }
  } finally {
    await doc.destroy();
  }
  return out;
}

export interface JpegPage {
  bytes: ArrayBuffer;
  /** Original page size in PDF points (72 dpi), so the rebuilt page prints true. */
  widthPt: number;
  heightPt: number;
}

/** Rasterises each page to a JPEG (used by Compress PDF). */
export async function renderPdfToJpegPages(
  file: File,
  scale: number,
  quality: number,
  onProgress?: (done: number, total: number) => void
): Promise<JpegPage[]> {
  const pdfjs = await loadPdfjs();
  const data = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data }).promise;
  const out: JpegPage[] = [];
  try {
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const pointViewport = page.getViewport({ scale: 1 });
      const canvas = await renderToCanvas(page, scale);
      const blob = await new Promise<Blob | null>((res) =>
        canvas.toBlob(res, "image/jpeg", quality)
      );
      if (!blob) throw new Error(`Could not render page ${i}.`);
      out.push({
        bytes: await blob.arrayBuffer(),
        widthPt: pointViewport.width,
        heightPt: pointViewport.height,
      });
      page.cleanup();
      onProgress?.(i, doc.numPages);
    }
  } finally {
    await doc.destroy();
  }
  return out;
}

export interface PdfThumbnail {
  pageNumber: number;
  dataUrl: string;
}

/** Small thumbnails for the Organize PDF UI. */
export async function renderPdfThumbnails(
  file: File,
  scale = 0.45,
  onProgress?: (done: number, total: number) => void
): Promise<PdfThumbnail[]> {
  const pdfjs = await loadPdfjs();
  const data = await file.arrayBuffer();
  const doc = await pdfjs.getDocument({ data }).promise;
  const thumbs: PdfThumbnail[] = [];
  try {
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const canvas = await renderToCanvas(page, scale);
      thumbs.push({ pageNumber: i, dataUrl: canvas.toDataURL("image/jpeg", 0.7) });
      page.cleanup();
      onProgress?.(i, doc.numPages);
    }
  } finally {
    await doc.destroy();
  }
  return thumbs;
}
