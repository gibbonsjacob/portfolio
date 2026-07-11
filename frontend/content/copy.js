/**
 * Site copy lives here so scaffolding can render without invented prose.
 *
 * Convention:
 * - Use COPY_PENDING for any string Jacob still needs to write.
 * - Structural fields (slugs, URLs, form labels) can be real.
 * - Pages should show a visible “copy pending” state when a slot is empty/pending.
 */

export const COPY_PENDING = "";

export function isCopyPending(value) {
  if (value == null) return true;
  if (typeof value === "string") return value.trim() === "";
  if (Array.isArray(value)) return value.length === 0;
  return false;
}
