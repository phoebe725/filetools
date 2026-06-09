"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";

const MAX_SIZE = 100 * 1024 * 1024; // 100 MB per PDF
const MAX_FILES = 30;
const ACCEPT = ["application/pdf", ".pdf"];

interface SourcePdf {
  id: string;
  file: File;
}

export default function MergePdf() {
  const [sources, setSources] = useState<SourcePdf[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const addFiles = (files: File[]) => {
    const mapped = files.map((file, i) => ({
      id: `${file.name}-${file.size}-${Date.now()}-${i}`,
      file,
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
  }));

  const merge = async () => {
    setErrors([]);
    setBusy(true);
    setResult(null);
    try {
      const { mergePdfs } = await import("@/lib/pdf");
      const blob = await mergePdfs(sources.map((s) => s.file));
      setResult(blob);
    } catch (e) {
      setErrors([
        e instanceof Error
          ? `Couldn't merge these PDFs: ${e.message}`
          : "Couldn't merge these PDFs. One of them may be corrupt or password-protected.",
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
        accept={ACCEPT}
        maxSizeBytes={MAX_SIZE}
        maxFiles={MAX_FILES}
        hint="PDF files · drag to reorder after adding"
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
          <ProgressBar label="Merging PDFs…" />
        ) : (
          <ActionButton onClick={merge} disabled={sources.length < 2}>
            {sources.length < 2 ? "Add at least 2 PDFs" : `Merge ${sources.length} PDFs`}
          </ActionButton>
        )
      )}

      {result && (
        <DownloadResult blob={result} filename="merged.pdf" onReset={reset} />
      )}
    </div>
  );
}
