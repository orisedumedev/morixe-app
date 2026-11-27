/**
 * @component Divider
 * @description
 * Horizontal divider used in authentication and form layouts to visually
 * separate actions (e.g., "OR" between login methods). Provides balanced
 * spacing and consistent alignment across UI flows.
 *
 * @architecture
 * - Uses flex layout to center the divider text between two horizontal lines.
 * - Tailwind utility classes ensure predictable spacing and color hierarchy.
 * - Text is customizable via the `text` prop for flexible reuse.
 *
 * @responsibilities
 * - Render a horizontal divider with optional label text.
 * - Maintain consistent spacing and alignment across form sections.
 *
 * @constraints
 * - Must remain presentation-only; no logic or state.
 * - Divider lines rely on background color; theme changes may require updates.
 *
 * @risks
 * - Overuse may clutter form layouts.
 * - Long custom text may break visual symmetry.
 */

const Divider = ({ text = "OR" }) => {
  return (
    <div className="flex items-center my-8">
      {/* Left horizontal line */}
      <div className="flex-1 h-px bg-slate-700"></div>

      {/* Divider text */}
      <span className="mx-4 text-slate-400 text-sm">
        {text}
      </span>

      {/* Right horizontal line */}
      <div className="flex-1 h-px bg-slate-700"></div>
    </div>
  );
};

export default Divider;
