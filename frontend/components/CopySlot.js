/**
 * Visible stand-in when a content slot is still empty.
 * Replace the source string in content/*.js — this component goes away on its own.
 */
export default function CopySlot({ label = "Copy pending" }) {
  return (
    <span className="copy-slot font-mono" data-copy-pending="true">
      [[{label}]]
    </span>
  );
}
