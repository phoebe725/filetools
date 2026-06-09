// Shared file helpers: validation, formatting, and downloads. No uploads ever —
// downloads are produced from in-memory Blobs via object URLs.

export interface ValidationOptions {
  /** Accepted MIME types or extensions (e.g. "image/png", ".heic"). Empty = any. */
  accept?: string[];
  /** Max size per file in bytes. */
  maxSizeBytes?: number;
  /** Max number of files. */
  maxFiles?: number;
}

export interface ValidationResult {
  valid: File[];
  errors: string[];
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  const value = bytes / Math.pow(1024, i);
  return `${value.toFixed(value >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}

function matchesAccept(file: File, accept: string[]): boolean {
  if (accept.length === 0) return true;
  const name = file.name.toLowerCase();
  const type = file.type.toLowerCase();
  return accept.some((a) => {
    const token = a.toLowerCase().trim();
    if (token.startsWith(".")) return name.endsWith(token);
    if (token.endsWith("/*")) return type.startsWith(token.slice(0, -1));
    return type === token;
  });
}

export function validateFiles(
  incoming: File[],
  existingCount: number,
  opts: ValidationOptions
): ValidationResult {
  const { accept = [], maxSizeBytes, maxFiles } = opts;
  const valid: File[] = [];
  const errors: string[] = [];

  for (const file of incoming) {
    if (!matchesAccept(file, accept)) {
      errors.push(`"${file.name}" is not a supported file type.`);
      continue;
    }
    if (maxSizeBytes && file.size > maxSizeBytes) {
      errors.push(
        `"${file.name}" is too large (${formatBytes(file.size)}). Max is ${formatBytes(
          maxSizeBytes
        )}.`
      );
      continue;
    }
    valid.push(file);
  }

  if (maxFiles && existingCount + valid.length > maxFiles) {
    const allowed = Math.max(0, maxFiles - existingCount);
    errors.push(
      `You can add up to ${maxFiles} file${maxFiles === 1 ? "" : "s"}. ${
        allowed === 0 ? "Remove some first." : `Only the first ${allowed} were added.`
      }`
    );
    return { valid: valid.slice(0, allowed), errors };
  }

  return { valid, errors };
}

/** Triggers a browser download for a Blob without any upload. */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  // Revoke on the next tick so the download has time to start.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

/** Replaces a filename's extension. */
export function withExtension(filename: string, ext: string): string {
  const dot = filename.lastIndexOf(".");
  const base = dot === -1 ? filename : filename.slice(0, dot);
  return `${base}.${ext.replace(/^\./, "")}`;
}
