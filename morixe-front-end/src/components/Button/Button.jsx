/**
 * @component Button
 * @description
 * Reusable primary action button styled with TailwindCSS. Designed for
 * authentication flows and general UI actions requiring strong visual
 * emphasis.
 *
 * @architecture
 * - Tailwind utility classes are composed directly to ensure consistent
 *   styling aligned with the design system.
 * - The component is intentionally minimal and stateless to maximize
 *   reusability across different contexts.
 *
 * @responsibilities
 * - Render a styled button element.
 * - Accept arbitrary children (text, icons, etc.) for flexible usage.
 *
 * @constraints
 * - Must remain presentation-only; no internal logic or event handling.
 * - Consumers are responsible for attaching onClick or other handlers.
 *
 * @risks
 * - Overriding Tailwind classes may break visual consistency.
 * - Excessive padding or font changes may disrupt layout alignment.
 */

export default function Button({ children }) {
  return (
    <button
      className="
        bg-blue-500            /* Primary brand color */
        hover:bg-blue-600      /* Slightly darker hover state */
        text-white             /* High contrast text */
        px-6 py-3              /* Balanced padding for touch targets */
        rounded-xl             /* Soft, modern rounded corners */
        font-semibold          /* Strong visual weight */
        transition             /* Smooth hover transitions */
      "
    >
      {/* Render any content passed into the button (text, icons, etc.) */}
      {children}
    </button>
  );
}
