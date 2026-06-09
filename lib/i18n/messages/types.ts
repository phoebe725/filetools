// Allows locale message files to be partial: any key they omit falls back to
// the English value at runtime via deepMerge (see ./index.ts). This lets us add
// new UI strings and translate them incrementally without breaking the build.

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

export function deepMerge<T>(base: T, override: DeepPartial<T> | undefined): T {
  if (!override) return base;
  if (Array.isArray(base)) {
    // Arrays: take the override wholesale if provided, else the base.
    return (override as unknown as T) ?? base;
  }
  if (typeof base !== "object" || base === null) {
    return (override as unknown as T) ?? base;
  }
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const key of Object.keys(override as Record<string, unknown>)) {
    const b = (base as Record<string, unknown>)[key];
    const o = (override as Record<string, unknown>)[key];
    if (o === undefined) continue;
    if (
      b &&
      typeof b === "object" &&
      !Array.isArray(b) &&
      o &&
      typeof o === "object" &&
      !Array.isArray(o)
    ) {
      out[key] = deepMerge(b, o as DeepPartial<typeof b>);
    } else {
      out[key] = o;
    }
  }
  return out as T;
}
