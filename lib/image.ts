// Canvas-based image processing: decode, convert, resize, and compress.
// All operations run on the client using HTMLImageElement + canvas.

import type { OutputFormat } from "./feature-detection";

/** Loads a File into an HTMLImageElement. */
export function loadImage(file: File | Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Could not read this image. The file may be corrupt or unsupported."));
    };
    img.src = url;
  });
}

function canvasToBlob(
  canvas: HTMLCanvasElement,
  type: OutputFormat,
  quality?: number
): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) resolve(blob);
        else reject(new Error("Conversion failed. Your browser may not support this output format."));
      },
      type,
      quality
    );
  });
}

interface RenderOptions {
  width?: number;
  height?: number;
  /** Background fill for formats without transparency (JPEG). */
  background?: string;
}

function drawToCanvas(img: HTMLImageElement, opts: RenderOptions): HTMLCanvasElement {
  const width = Math.max(1, Math.round(opts.width ?? img.naturalWidth));
  const height = Math.max(1, Math.round(opts.height ?? img.naturalHeight));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas is not available in this browser.");
  if (opts.background) {
    ctx.fillStyle = opts.background;
    ctx.fillRect(0, 0, width, height);
  }
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(img, 0, 0, width, height);
  return canvas;
}

export interface ConvertOptions {
  format: OutputFormat;
  quality?: number; // 0..1, used by jpeg/webp/avif
}

/** Converts an image File to another format. */
export async function convertImage(
  file: File | Blob,
  opts: ConvertOptions
): Promise<Blob> {
  const img = await loadImage(file);
  const background = opts.format === "image/jpeg" ? "#ffffff" : undefined;
  const canvas = drawToCanvas(img, { background });
  return canvasToBlob(canvas, opts.format, opts.quality);
}

export interface ResizeOptions {
  width?: number;
  height?: number;
  format?: OutputFormat;
  quality?: number;
}

/** Resizes an image to the given dimensions. */
export async function resizeImage(
  file: File | Blob,
  opts: ResizeOptions
): Promise<Blob> {
  const img = await loadImage(file);
  const format = opts.format ?? "image/png";
  const background = format === "image/jpeg" ? "#ffffff" : undefined;
  const canvas = drawToCanvas(img, {
    width: opts.width,
    height: opts.height,
    background,
  });
  return canvasToBlob(canvas, format, opts.quality);
}

/** Compresses an image at a given quality (jpeg/webp). */
export async function compressImage(
  file: File | Blob,
  format: OutputFormat,
  quality: number
): Promise<Blob> {
  const img = await loadImage(file);
  const background = format === "image/jpeg" ? "#ffffff" : undefined;
  const canvas = drawToCanvas(img, { background });
  return canvasToBlob(canvas, format, quality);
}

export interface ImageDimensions {
  width: number;
  height: number;
}

export async function getImageDimensions(
  file: File | Blob
): Promise<ImageDimensions> {
  const img = await loadImage(file);
  return { width: img.naturalWidth, height: img.naturalHeight };
}
