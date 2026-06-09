"use client";

import { useCallback, useRef, useState } from "react";
import { validateFiles, type ValidationOptions } from "@/lib/files";
import { useWidgets } from "@/components/I18nProvider";

interface UploadDropzoneProps extends ValidationOptions {
  /** Called with newly accepted files. */
  onFiles: (files: File[]) => void;
  /** Called with any validation error messages. */
  onErrors?: (errors: string[]) => void;
  /** Current number of already-selected files (for max-files checks). */
  existingCount?: number;
  multiple?: boolean;
  /** Human-readable hint shown under the icon, e.g. "PNG, JPG or WebP". */
  hint?: string;
  disabled?: boolean;
}

export function UploadDropzone({
  onFiles,
  onErrors,
  existingCount = 0,
  multiple = true,
  hint,
  disabled = false,
  accept = [],
  maxSizeBytes,
  maxFiles,
}: UploadDropzoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);
  const w = useWidgets();

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList || fileList.length === 0) return;
      const incoming = Array.from(fileList);
      const { valid, errors } = validateFiles(incoming, existingCount, {
        accept,
        maxSizeBytes,
        maxFiles,
      });
      if (errors.length && onErrors) onErrors(errors);
      if (valid.length) onFiles(valid);
    },
    [accept, existingCount, maxFiles, maxSizeBytes, onErrors, onFiles]
  );

  const acceptAttr = accept.join(",");

  return (
    <div
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={() => !disabled && inputRef.current?.click()}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          inputRef.current?.click();
        }
      }}
      onDragOver={(e) => {
        e.preventDefault();
        if (!disabled) setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);
        if (!disabled) handleFiles(e.dataTransfer.files);
      }}
      className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-12 text-center transition ${
        disabled
          ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-60"
          : dragging
            ? "border-brand-500 bg-brand-50"
            : "border-slate-300 bg-white hover:border-brand-400 hover:bg-slate-50"
      }`}
    >
      <div className="text-4xl" aria-hidden>
        ⬆️
      </div>
      <div>
        <p className="font-semibold text-slate-800">
          {multiple ? w.dropTitleMulti : w.dropTitleSingle}
        </p>
        <p className="text-sm text-slate-500">{w.browse}</p>
      </div>
      {hint && <p className="text-xs text-slate-400">{hint}</p>}
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        multiple={multiple}
        accept={acceptAttr || undefined}
        disabled={disabled}
        onChange={(e) => {
          handleFiles(e.target.files);
          e.target.value = ""; // allow re-selecting the same file
        }}
      />
    </div>
  );
}
