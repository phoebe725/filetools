"use client";

interface ProgressBarProps {
  /** 0..100. If omitted, shows an indeterminate animated bar. */
  value?: number;
  label?: string;
}

export function ProgressBar({ value, label }: ProgressBarProps) {
  const indeterminate = value === undefined;
  return (
    <div className="flex flex-col gap-1.5">
      {label && <p className="text-sm text-slate-600">{label}</p>}
      <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full bg-brand-500 transition-[width] ${
            indeterminate ? "w-1/3 animate-pulse" : ""
          }`}
          style={indeterminate ? undefined : { width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
}
