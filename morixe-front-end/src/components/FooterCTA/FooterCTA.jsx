/**
 * @component FooterCTA
 * @description
 * Call‑to‑action footer section used on landing and marketing pages.
 * Reinforces conversion intent by presenting a strong headline, supporting
 * text, and a primary action button. Includes brand footer metadata.
 *
 * @architecture
 * - Tailwind utility classes are composed directly for predictable styling.
 * - Section uses centered layout with generous vertical spacing to maintain
 *   visual hierarchy and breathing room.
 * - CTA button is intentionally high‑contrast to maximize conversion focus.
 *
 * @responsibilities
 * - Present a clear CTA encouraging account creation.
 * - Display brand metadata and legal footer information.
 * - Provide a visually consistent closing section for landing pages.
 *
 * @constraints
 * - Must remain presentation‑only; no business logic or routing.
 * - CTA button does not include click handlers — consumers must attach them.
 *
 * @risks
 * - Overly large spacing may feel disconnected on compact layouts.
 * - Changing background or border colors may break theme consistency.
 */

export default function FooterCTA() {
  return (
    <footer
      className="
        mt-20                 /* Large spacing from previous section */
        bg-slate-900          /* Dark footer background */
        border-t border-slate-800 /* Subtle top border separation */
      "
    >
      <div
        className="
          max-w-7xl mx-auto   /* Centered content container */
          px-6 py-20          /* Comfortable padding */
          text-center         /* CTA-focused alignment */
        "
      >
        {/* CTA Headline */}
        <h2
          className="
            text-4xl          /* Strong visual hierarchy */
            font-bold
          "
        >
          Start Trading Smarter Today
        </h2>

        {/* Supporting text */}
        <p
          className="
            text-slate-400
            mt-4
          "
        >
          Join thousands of traders using MORIXE.
        </p>

        {/* Primary CTA button */}
        <button
          className="
            mt-8
            bg-blue-500        /* High-contrast action color */
            px-10 py-4         /* Large tappable area */
            rounded-xl
            font-semibold
          "
        >
          Create Account
        </button>

        {/* Footer metadata */}
        <p
          className="
            mt-16
            text-slate-500
          "
        >
          © 2026 MORIXE Crypto Trading Platform
        </p>
      </div>
    </footer>
  );
}
