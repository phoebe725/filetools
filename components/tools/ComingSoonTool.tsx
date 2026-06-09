"use client";

import { useState } from "react";
import { UploadDropzone } from "./UploadDropzone";
import { FileList, type FileListItem } from "./FileList";
import { ErrorState } from "./ErrorState";
import { ActionButton } from "./DownloadButton";

interface ComingSoonToolProps {
  /** Accepted types, e.g. ["application/pdf"] or [".docx"]. Empty = any. */
  accept?: string[];
  hint?: string;
  multiple?: boolean;
  /** Verb shown on the action button, e.g. "Convert" or "Compress". */
  actionLabel?: string;
}

/**
 * Honest coming-soon tool. It keeps the full upload → preview → action workflow
 * so the experience is consistent, but never fakes a successful output. The
 * email field is UI-only and is not wired to any backend.
 */
export function ComingSoonTool({
  accept = [],
  hint = "Any file",
  multiple = false,
  actionLabel = "Convert",
}: ComingSoonToolProps) {
  const [items, setItems] = useState<FileListItem[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const addFiles = (files: File[]) => {
    const mapped = files.map((f, i) => ({
      id: `${f.name}-${f.size}-${i}-${items.length}`,
      name: f.name,
      size: f.size,
    }));
    setItems(multiple ? [...items, ...mapped] : mapped.slice(0, 1));
    setSubmitted(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-800">
        🚧 This tool is in development and not available yet.
      </div>

      <UploadDropzone
        onFiles={addFiles}
        onErrors={setErrors}
        existingCount={items.length}
        multiple={multiple}
        accept={accept}
        hint={hint}
      />

      {errors.length > 0 && (
        <ErrorState messages={errors} onDismiss={() => setErrors([])} />
      )}

      {items.length > 0 && (
        <FileList items={items} onRemove={(id) => setItems(items.filter((it) => it.id !== id))} />
      )}

      {items.length > 0 && !submitted && (
        <ActionButton onClick={() => setSubmitted(true)}>{actionLabel}</ActionButton>
      )}

      {submitted && (
        <div className="flex flex-col gap-4 rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p className="text-lg font-semibold text-amber-900">
            🚧 Beta — this conversion is coming soon.
          </p>
          <p className="text-sm text-amber-800">
            We&apos;re still building this one. Leave your email and we&apos;ll let you
            know the moment it&apos;s ready.
          </p>
          {notified ? (
            <p className="text-sm font-medium text-emerald-700">
              Thanks! We&apos;ll be in touch. (This is a UI demo and isn&apos;t stored.)
            </p>
          ) : (
            <form
              className="mx-auto flex w-full max-w-sm flex-col gap-2 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                // UI only — intentionally not sent anywhere.
                if (email.trim()) setNotified(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
              />
              <button
                type="submit"
                className="rounded-lg bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
