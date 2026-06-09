"use client";

import { useEffect, useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { resizeImage, getImageDimensions } from "@/lib/image";
import { type OutputFormat } from "@/lib/feature-detection";
import { withExtension } from "@/lib/files";

const MAX_SIZE = 25 * 1024 * 1024; // 25 MB
const ACCEPT = ["image/png", "image/jpeg", "image/webp"];

interface SourceImage {
  id: string;
  file: File;
  previewUrl: string;
  naturalWidth: number;
  naturalHeight: number;
}

function formatFor(type: string): { mime: OutputFormat; ext: string } {
  switch (type) {
    case "image/jpeg":
      return { mime: "image/jpeg", ext: "jpg" };
    case "image/webp":
      return { mime: "image/webp", ext: "webp" };
    case "image/png":
    default:
      return { mime: "image/png", ext: "png" };
  }
}

export default function ResizeImage() {
  const [source, setSource] = useState<SourceImage | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [keepAspect, setKeepAspect] = useState(true);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  // Clean up the preview object URL.
  useEffect(() => {
    if (!source) return;
    const url = source.previewUrl;
    return () => URL.revokeObjectURL(url);
  }, [source]);

  const addFiles = async (files: File[]) => {
    setErrors([]);
    setResult(null);
    const file = files[0];
    if (!file) return;
    try {
      const { width: w, height: h } = await getImageDimensions(file);
      setSource({
        id: `${file.name}-${file.size}-${Date.now()}-0`,
        file,
        previewUrl: URL.createObjectURL(file),
        naturalWidth: w,
        naturalHeight: h,
      });
      setWidth(String(w));
      setHeight(String(h));
    } catch (e) {
      setErrors([
        e instanceof Error
          ? `Couldn't read this image: ${e.message}`
          : "Couldn't read this image. It may be corrupt or unsupported.",
      ]);
    }
  };

  const onWidthChange = (value: string) => {
    setWidth(value);
    setResult(null);
    if (keepAspect && source) {
      const w = parseInt(value, 10);
      if (Number.isFinite(w) && w > 0) {
        setHeight(String(Math.round((w * source.naturalHeight) / source.naturalWidth)));
      }
    }
  };

  const onHeightChange = (value: string) => {
    setHeight(value);
    setResult(null);
    if (keepAspect && source) {
      const h = parseInt(value, 10);
      if (Number.isFinite(h) && h > 0) {
        setWidth(String(Math.round((h * source.naturalWidth) / source.naturalHeight)));
      }
    }
  };

  const items: FileListItem[] = source
    ? [
        {
          id: source.id,
          name: source.file.name,
          size: source.file.size,
          previewUrl: source.previewUrl,
          meta: `${source.naturalWidth} × ${source.naturalHeight}`,
        },
      ]
    : [];

  const reset = () => {
    setSource(null);
    setWidth("");
    setHeight("");
    setResult(null);
    setErrors([]);
  };

  const resize = async () => {
    if (!source) return;
    setErrors([]);
    setResult(null);

    const w = parseInt(width, 10);
    const h = parseInt(height, 10);
    const issues: string[] = [];
    if (!Number.isInteger(w) || w <= 0 || String(w) !== width.trim()) {
      issues.push("Width must be a positive whole number.");
    }
    if (!Number.isInteger(h) || h <= 0 || String(h) !== height.trim()) {
      issues.push("Height must be a positive whole number.");
    }
    if (issues.length) {
      setErrors(issues);
      return;
    }

    setBusy(true);
    try {
      const { mime } = formatFor(source.file.type);
      const blob = await resizeImage(source.file, {
        width: w,
        height: h,
        format: mime,
        quality: 0.92,
      });
      setResult(blob);
    } catch (e) {
      setErrors([
        e instanceof Error
          ? `Couldn't resize this image: ${e.message}`
          : "Couldn't resize this image. Please try again.",
      ]);
    } finally {
      setBusy(false);
    }
  };

  const ext = source ? formatFor(source.file.type).ext : "png";

  return (
    <div className="flex flex-col gap-4">
      <UploadDropzone
        onFiles={addFiles}
        onErrors={setErrors}
        existingCount={source ? 1 : 0}
        multiple={false}
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        maxFiles={1}
        hint="PNG, JPG or WebP"
      />

      {errors.length > 0 && (
        <ErrorState messages={errors} onDismiss={() => setErrors([])} />
      )}

      {source && (
        <>
          <FileList items={items} onRemove={reset} />

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <p className="mb-3 text-sm font-medium text-slate-700">New size</p>
            <div className="flex flex-wrap items-end gap-4">
              <label className="flex flex-col gap-1 text-sm text-slate-600">
                <span>Width (px)</span>
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={width}
                  onChange={(e) => onWidthChange(e.target.value)}
                  className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-brand-500 focus:outline-none"
                />
              </label>
              <span className="pb-2 text-slate-400">×</span>
              <label className="flex flex-col gap-1 text-sm text-slate-600">
                <span>Height (px)</span>
                <input
                  type="number"
                  min={1}
                  step={1}
                  value={height}
                  onChange={(e) => onHeightChange(e.target.value)}
                  className="w-32 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 focus:border-brand-500 focus:outline-none"
                />
              </label>
            </div>
            <label className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                checked={keepAspect}
                onChange={(e) => setKeepAspect(e.target.checked)}
                className="h-4 w-4 accent-brand-600"
              />
              <span>Keep aspect ratio</span>
            </label>
          </div>

          {!result &&
            (busy ? (
              <ProgressBar label="Resizing…" />
            ) : (
              <ActionButton onClick={resize}>Resize image</ActionButton>
            ))}
        </>
      )}

      {source && result && (
        <DownloadResult
          blob={result}
          filename={withExtension(source.file.name, ext)}
          originalSize={source.file.size}
          onReset={reset}
        />
      )}
    </div>
  );
}
