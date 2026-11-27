/**
 * @component ErrorMessage
 * @description
 * Lightweight form error message component. Displays animated red text
 * when a validation or submission error occurs. Automatically hides itself
 * when no message is provided.
 *
 * @architecture
 * - Uses a simple conditional return to avoid rendering empty DOM nodes.
 * - Tailwind utility classes provide consistent spacing, color hierarchy,
 *   and subtle animation for visibility.
 * - Designed to be dropped beneath any input component without layout shift.
 *
 * @responsibilities
 * - Render an accessible error message when provided.
 * - Avoid unnecessary DOM rendering when `message` is falsy.
 *
 * @constraints
 * - Must remain presentation-only; no internal validation logic.
 * - Parent components must supply the error message string.
 *
 * @risks
 * - Overuse of `animate-pulse` may distract users in dense forms.
 * - Long error messages may break layout if not wrapped properly.
 */

const ErrorMessage = ({ message }) => {
  // Do not render anything if no error message is provided
  if (!message) return null;

  return (
    <p
      className="
        mt-2              /* Spacing from input */
        text-sm           /* Compact text size */
        text-red-400      /* Error color */
        animate-pulse     /* Subtle attention cue */
      "
    >
      {message}
    </p>
  );
};

export default ErrorMessage;
