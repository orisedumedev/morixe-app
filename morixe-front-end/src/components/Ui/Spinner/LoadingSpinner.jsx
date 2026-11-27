/**
 * @component LoadingSpinner
 * @description
 * Lightweight, self-contained loading indicator designed for inline usage
 * inside buttons or compact UI elements. Uses a CSS-based spinning border
 * animation to avoid layout shifts and external dependencies.
 *
 * @architecture
 * - Pure visual component with no props or state.
 * - Relies entirely on Tailwind utility classes for size, border styling,
 *   and animation behavior.
 * - Border-top transparency creates a clean circular spin effect without
 *   requiring SVGs or external assets.
 *
 * @responsibilities
 * - Render a small, unobtrusive loading spinner.
 * - Maintain consistent sizing across button and form contexts.
 *
 * @constraints
 * - Must remain presentation-only; no dynamic logic or props.
 * - Spinner size and border thickness should remain minimal to avoid
 *   disrupting button text alignment.
 *
 * @risks
 * - Overuse may visually clutter dense interfaces.
 * - Custom overrides to border colors may reduce contrast on dark themes.
 */

const LoadingSpinner = () => {
  return (
    <div
      className="
        w-5 h-5                 /* Compact size for inline usage */
        border-2                /* Spinner thickness */
        border-white            /* Visible border */
        border-t-transparent    /* Creates spinning gap */
        rounded-full            /* Circular shape */
        animate-spin            /* Continuous rotation */
      "
    />
  );
};

export default LoadingSpinner;
