/** Deterministic pseudo-UUID so IDs are stable across renders. */
export function sid(prefix: string, n: number): string {
  const hex = (s: string) =>
    Array.from(s)
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");
  const base = hex(`${prefix}-${n}`).padEnd(32, "0").slice(0, 32);
  return [base.slice(0, 8), base.slice(8, 12), base.slice(12, 16), base.slice(16, 20), base.slice(20, 32)].join("-");
}
