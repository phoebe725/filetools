"use client";

import { useState } from "react";
import { UploadDropzone } from "../UploadDropzone";
import { FileList, type FileListItem } from "../FileList";
import { ErrorState } from "../ErrorState";
import { ProgressBar } from "../ProgressBar";
import { ActionButton, DownloadResult } from "../DownloadButton";
import { withExtension } from "@/lib/files";

const MAX_SIZE = 60 * 1024 * 1024;
const MAX_FILES = 20;
const ACCEPT = [".heic", ".heif", "image/heic", "image/heif"];

interface SourceFile {
  id: string;
  file: File;
}

interface ResultFile {
  id: string;
  blob: Blob;
  filename: string;
  originalSize: number;
}

export default function HeicToJpg() {
  const [sources, setSources] = useState<SourceFile[]>([]);
  const [results, setResults] = useState<ResultFile[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [quality, setQuality] = useState(0.9);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);

  const addFiles = (files: File[]) => {
    const mapped = files.map((file, i) => ({
      id: `${file.name}-${file.size}-${sources.length + i}`,
      file,
    }));
    setSources((prev) => [...prev, ...mapped]);
    setResults([]);
  };

  const items: FileListItem[] = sources.map((s) => ({
    id: s.id,
    name: s.file.name,
    size: s.file.size,
  }));

  const convertAll = async () => {
    setErrors([]);
    setResults([]);
    setBusy(true);
    setProgress(0);
    const { heicToJpeg } = await import("@/lib/heic");
    const out: ResultFile[] = [];
    const failures: string[] = [];
    for (let i = 0; i < sources.length; i++) {
      const src = sources[i];
      try {
        const blob = await heicToJpeg(src.file, quality);
        out.push({
          id: src.id,
          blob,
          filename: withExtension(src.file.name, "jpg"),
          originalSize: src.file.size,
        });
      } catch (e) {
        failures.push(`"${src.file.name}": ${e instanceof Error ? e.message : "failed"}`);
      }
      setProgress(Math.round(((i + 1) / sources.length) * 100));
    }
    setResults(out);
    if (failures.length) setErrors(failures);
    setBusy(false);
  };

  const reset = () => {
    setSources([]);
    setResults([]);
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
        hint="HEIC / HEIF photos · up to 20 files"
      />

      {errors.length > 0 && <ErrorState messages={errors} onDismiss={() => setErrors([])} />}

      {sources.length > 0 && (
        <>
          <FileList
            items={items}
            onRemove={(id) => setSources((prev) => prev.filter((s) => s.id !== id))}
          />
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <label className="flex items-center justify-between text-sm text-slate-600">
              <span>JPG quality</span>
              <span className="font-medium text-slate-800">{Math.round(quality * 100)}%</span>
            </label>
            <input
              type="range"
              min={0.1}
              max={1}
              step={0.05}
              value={quality}
              onChange={(e) => setQuality(parseFloat(e.target.value))}
              className="mt-1 w-full accent-brand-600"
            />
          </div>

          {busy ? (
            <ProgressBar value={progress} label={`Converting… ${progress}%`} />
          ) : (
            <ActionButton onClick={convertAll}>
              Convert {sources.length > 1 ? `${sources.length} photos` : "photo"} to JPG
            </ActionButton>
          )}
        </>
      )}

      {results.length > 0 && (
        <div className="flex flex-col gap-3">
          {results.map((r) => (
            <DownloadResult
              key={r.id}
              blob={r.blob}
              filename={r.filename}
              originalSize={r.originalSize}
            />
          ))}
          <button
            type="button"
            onClick={reset}
            className="self-center rounded-lg border border-slate-300 bg-white px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}
