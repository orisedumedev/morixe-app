/**
 * @component PasswordField
 * @description
 * Secure password input component with show/hide toggle, dynamic styling,
 * and integrated error messaging. Designed for authentication flows and
 * onboarding screens requiring controlled password input.
 *
 * @architecture
 * - Uses internal state (`showPassword`) to toggle between text/password types.
 * - Controlled input pattern (`value` + `onChange`) ensures predictable
 *   state management from parent components.
 * - Tailwind utility classes provide consistent styling, focus rings,
 *   and dark-themed UI alignment.
 * - ErrorMessage component is rendered beneath the input to maintain
 *   consistent spacing and accessibility.
 *
 * @responsibilities
 * - Render a password field with a visibility toggle button.
 * - Display validation errors and update ARIA attributes accordingly.
 * - Maintain accessible structure using `<label>` and `htmlFor`.
 *
 * @constraints
 * - Must remain presentation-only; no internal validation logic.
 * - Parent components must manage `value`, `onChange`, and `error`.
 *
 * @risks
 * - Incorrect toggle logic may expose password unintentionally.
 * - Overriding padding or width may break alignment in form layouts.
 */

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import ErrorMessage from "./ErrorMessage";

const PasswordField = ({
  id,                // Input identifier for accessibility
  name,              // Form field name
  label,             // Visible label text
  value,             // Controlled value
  onChange,          // Change handler
  error,             // Validation error message
  autoComplete = "off",
  placeholder = "Enter password",
}) => {
  // Local state controlling password visibility
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-5">
      {/* Label */}
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      {/* Input wrapper */}
      <div
        className="
          flex items-center
          rounded-2xl
          border border-slate-700
          bg-slate-900/60
          px-4
          backdrop-blur-md
          focus-within:ring-2
          focus-within:ring-blue-500/30
          focus-within:border-blue-500
        "
      >
        {/* Password input */}
        <input
          id={id}
          autoComplete={autoComplete}
          name={name}
          type={showPassword ? "text" : "password"} /* Toggle visibility */
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            py-4
            bg-transparent
            outline-none
            text-white
          "
        />

        {/* Visibility toggle button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-slate-400 hover:text-white"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>
      </div>

      {/* Error message */}
      <ErrorMessage message={error} />
    </div>
  );
};

export default PasswordField;
