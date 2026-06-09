"use client";

import { formatBytes } from "@/lib/files";
import { useWidgets } from "@/components/I18nProvider";

export interface FileListItem {
  id: string;
  name: string;
  size: number;
  /** Optional thumbnail object URL for image previews. */
  previewUrl?: string;
  /** Optional secondary line, e.g. "12 pages" or "1920×1080". */
  meta?: string;
}

interface FileListProps {
  items: FileListItem[];
  onRemove?: (id: string) => void;
  /** When provided, shows up/down reorder controls. */
  onMove?: (id: string, direction: -1 | 1) => void;
}

export function FileList({ items, onRemove, onMove }: FileListProps) {
  const w = useWidgets();
  if (items.length === 0) return null;
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item, index) => (
        <li
          key={item.id}
          className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3"
        >
          {item.previewUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.previewUrl}
              alt={item.name}
              className="h-12 w-12 flex-shrink-0 rounded object-cover"
            />
          ) : (
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded bg-slate-100 text-lg">
              📄
            </div>
          )}
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-slate-800">{item.name}</p>
            <p className="text-xs text-slate-500">
              {formatBytes(item.size)}
              {item.meta ? ` · ${item.meta}` : ""}
            </p>
          </div>
          {onMove && (
            <div className="flex flex-col">
              <button
                type="button"
                aria-label={w.moveUp}
                disabled={index === 0}
                onClick={() => onMove(item.id, -1)}
                className="px-1 text-slate-400 enabled:hover:text-slate-700 disabled:opacity-30"
              >
                ▲
              </button>
              <button
                type="button"
                aria-label={w.moveDown}
                disabled={index === items.length - 1}
                onClick={() => onMove(item.id, 1)}
                className="px-1 text-slate-400 enabled:hover:text-slate-700 disabled:opacity-30"
              >
                ▼
              </button>
            </div>
          )}
          {onRemove && (
            <button
              type="button"
              aria-label={`${w.remove} ${item.name}`}
              onClick={() => onRemove(item.id)}
              className="rounded-md px-2 py-1 text-sm text-slate-400 hover:bg-red-50 hover:text-red-600"
            >
              ✕
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
