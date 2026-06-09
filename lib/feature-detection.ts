// Browser feature detection for image output formats. Canvas.toBlob support for
// a given MIME type tells us whether the browser can *encode* that format.

export type OutputFormat = "image/png" | "image/jpeg" | "image/webp" | "image/avif";

/**
 * Detects whether the browser's canvas can encode the given image MIME type.
 * Returns false on the server (no document).
 */
export function canEncode(mime: OutputFormat): boolean {
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 1;
    canvas.height = 1;
    const dataUrl = canvas.toDataURL(mime);
    // If unsupported, browsers fall back to image/png.
    return dataUrl.startsWith(`data:${mime}`);
  } catch {
    return false;
  }
}

export interface FormatSupport {
  png: boolean;
  jpeg: boolean;
  webp: boolean;
  avif: boolean;
}

export function detectFormatSupport(): FormatSupport {
  return {
    png: canEncode("image/png"),
    jpeg: canEncode("image/jpeg"),
    webp: canEncode("image/webp"),
    avif: canEncode("image/avif"),
  };
}
