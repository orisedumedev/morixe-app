/**
 * @component SocialLoginButton
 * @description
 * Reusable social authentication button supporting multiple providers,
 * icon injection, variant-based styling, and disabled interaction states.
 * Designed for login and onboarding flows requiring OAuth entry points.
 *
 * @architecture
 * - Styling variants are defined as a lookup object to ensure predictable
 *   theme behavior and easy extension (light, dark, outline).
 * - Icon is passed as a React component, allowing flexible integration
 *   with Lucide icons or custom SVGs.
 * - Controlled disabled state prevents accidental multiple submissions.
 *
 * @responsibilities
 * - Render a provider-specific social login button.
 * - Apply variant-based styling for different UI themes.
 * - Display an icon and provider label in a consistent layout.
 *
 * @constraints
 * - Must remain presentation-only; no OAuth logic is handled here.
 * - Parent components must supply the `onClick` handler.
 *
 * @risks
 * - Incorrect variant keys may break styling.
 * - Overriding padding or width may disrupt alignment in authentication layouts.
 */

const SocialLoginButton = ({
  icon: Icon,          // Optional icon component (e.g., Google, GitHub)
  provider,            // Provider name displayed in the button
  onClick,             // Click handler for initiating OAuth flow
  variant = "light",   // Styling variant: light | dark | outline
  disabled = false,    // Disable state
}) => {
  // Variant-based styling map
  const variants = {
    light:
      "bg-white text-slate-900 border border-slate-200 hover:bg-slate-100",
    dark:
      "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700",
    outline:
      "bg-transparent text-white border border-slate-600 hover:bg-slate-800",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        w-full
        flex items-center justify-center
        gap-3
        py-4
        rounded-2xl
        font-medium
        transition-all duration-300
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}   /* Apply selected variant */
      `}
    >
      {/* Optional provider icon */}
      {Icon && <Icon size={22} />}

      {/* Provider label */}
      <span>Continue with {provider}</span>
    </button>
  );
};

export default SocialLoginButton;
