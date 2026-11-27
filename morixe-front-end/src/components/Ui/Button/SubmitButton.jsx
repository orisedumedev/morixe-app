/**
 * @component SubmitButton
 * @description
 * Primary form submission button with integrated loading and disabled states.
 * Designed for authentication flows, dashboards, and any form requiring
 * asynchronous submission feedback.
 *
 * @architecture
 * - Loading state replaces children with a spinner component.
 * - Disabled state is automatically derived from `loading` or `disabled` props.
 * - Tailwind utility classes are composed directly for predictable styling.
 * - Consumers may extend styling via the `className` prop.
 *
 * @responsibilities
 * - Render a full-width submit button with consistent styling.
 * - Display a loading spinner during async operations.
 * - Prevent user interaction when disabled or loading.
 *
 * @constraints
 * - Must remain presentation-only; no internal form logic.
 * - Spinner component must exist and be lightweight to avoid layout shift.
 *
 * @risks
 * - Overriding padding or width may break alignment in form layouts.
 * - Excessive custom class overrides may disrupt visual consistency.
 */

import LoadingSpinner from "../Spinner/LoadingSpinner";

const SubmitButton = ({
  children,
  loading = false,   // Indicates async operation in progress
  disabled = false,  // External disabled state
  type = "submit",   // Default button type
  className = "",    // Allows style extension
  ...props           // Forward remaining props to <button>
}) => {
  return (
    <button
      type={type}
      disabled={loading || disabled} // Prevent interaction during loading or manual disable
      className={`
        w-full                     /* Full-width button for form layouts */
        mt-6                       /* Vertical spacing from previous field */
        py-4                       /* Large tappable area */
        rounded-2xl                /* Soft modern rounding */
        bg-blue-500                /* Primary brand color */
        hover:bg-blue-600          /* Hover state */
        transition-all duration-300/* Smooth transitions */
        font-semibold text-white   /* Strong visual hierarchy */
        flex justify-center items-center /* Center spinner or text */
        disabled:opacity-60        /* Dim when disabled */
        disabled:cursor-not-allowed /* Prevent pointer interaction */
        ${className}               /* Allow consumer overrides */
      `}
      {...props}
    >
      {/* Render spinner when loading, otherwise render button content */}
      {loading ? <LoadingSpinner /> : children}
    </button>
  );
};

export default SubmitButton;
