"use client";

import { useEffect, useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";

const MAX_SIZE = 25 * 1024 * 1024; // 25 MB per image
const MAX_FILES = 50;
const ACCEPT = ["image/png", "image/jpeg", "image/webp"];

interface SourceImage {
  id: string;
  file: File;
  previewUrl: string;
}

export default function ImagesToPdf() {
  const [sources, setSources] = useState<SourceImage[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  // Clean up object URLs.
  useEffect(() => {
    return () => sources.forEach((s) => URL.revokeObjectURL(s.previewUrl));
  }, [sources]);

  const addFiles = (files: File[]) => {
    const mapped = files.map((file, i) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${i}`,
      file,
      previewUrl: URL.createObjectURL(file),
    }));
    setSources((prev) => [...prev, ...mapped]);
    setResult(null);
  };

  const move = (id: string, direction: -1 | 1) => {
    setSources((prev) => {
      const index = prev.findIndex((s) => s.id === id);
      const target = index + direction;
      if (index < 0 || target < 0 || target >= prev.length) return prev;
      const next = [...prev];
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
    setResult(null);
  };

  const items: FileListItem[] = sources.map((s) => ({
    id: s.id,
    name: s.file.name,
    size: s.file.size,
    previewUrl: s.previewUrl,
  }));

  const createPdf = async () => {
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { imagesToPdf } = await import("@/lib/pdf");
      const blob = await imagesToPdf(sources.map((s) => s.file));
      setResult(blob);
    } catch (e) {
      setErrors([
        e instanceof Error
          ? `Couldn't create the PDF: ${e.message}`
          : "Couldn't create the PDF. One of these images may be corrupt or unsupported.",
      ]);
    } finally {
      setBusy(false);
    }
  };

  const reset = () => {
    setSources([]);
    setResult(null);
    setErrors([]);
  };

  return (
    <div className="flex flex-col gap-4">
      <UploadDropzone
        onFiles={addFiles}
        onErrors={setErrors}
        existingCount={sources.length}
        multiple={true}
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        maxFiles={MAX_FILES}
        hint="JPG, PNG or WebP · drag to reorder"
      />

      {errors.length > 0 && (
        <ErrorState messages={errors} onDismiss={() => setErrors([])} />
      )}

      {sources.length > 0 && (
        <FileList
          items={items}
          onRemove={(id) => setSources((prev) => prev.filter((s) => s.id !== id))}
          onMove={move}
        />
      )}

      {sources.length > 0 && !result && (
        busy ? (
          <ProgressBar label="Creating PDF…" />
        ) : (
          <ActionButton onClick={createPdf} disabled={sources.length < 1}>
            {sources.length === 1 ? "Create PDF" : `Create PDF from ${sources.length} images`}
          </ActionButton>
        )
      )}

      {result && (
        <DownloadResult blob={result} filename="images.pdf" onReset={reset} />
      )}
    </div>
  );
}
