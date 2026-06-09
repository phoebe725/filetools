"use client";

interface ErrorStateProps {
  /** A single message or several. */
  messages: string | string[];
  onDismiss?: () => void;
}

export function ErrorState({ messages, onDismiss }: ErrorStateProps) {
  const list = Array.isArray(messages) ? messages : [messages];
  if (list.length === 0) return null;
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800"
    >
      <span aria-hidden className="mt-0.5">
        ⚠️
      </span>
      <div className="flex-1">
        {list.length === 1 ? (
          <p>{list[0]}</p>
        ) : (
          <ul className="list-disc space-y-1 pl-4">
            {list.map((m, i) => (
              <li key={i}>{m}</li>
            ))}
          </ul>
        )}
      </div>
      {onDismiss && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={onDismiss}
          className="text-red-400 hover:text-red-700"
        >
          ✕
        </button>
      )}
    </div>
  );
}
