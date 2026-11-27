/**
 * @component InputField
 * @description
 * Reusable controlled input component with optional icon, validation state,
 * accessibility support, and integrated error messaging.
 */

import ErrorMessage from "./ErrorMessage";

const InputField = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  icon: Icon,
  value,
  onChange,
  autoComplete = "off",
  error,
  required = false,
  disabled = false,
}) => {
  const inputId = id || name;

  return (
    <div className="mb-5">
      {/* Label */}
      <label
        htmlFor={inputId}
        className="mb-2 block text-sm font-medium text-slate-300"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-400">
            *
          </span>
        )}
      </label>

      {/* Input Container */}
      <div
        className={`
          flex
          items-center
          rounded-2xl
          border
          px-4

          bg-slate-900/90
          supports-[backdrop-filter]:bg-slate-900/70

          transition-all
          duration-300

          ${
            error
              ? `
                border-red-500
                ring-2
                ring-red-500/20
              `
              : `
                border-slate-700
                hover:border-slate-600
                focus-within:border-blue-500
                focus-within:ring-2
                focus-within:ring-blue-500/20
              `
          }

          ${
            disabled
              ? "cursor-not-allowed opacity-60"
              : ""
          }
        `}
      >
        {/* Icon */}
        {Icon && (
          <Icon
            size={20}
            className="
              mr-3
              shrink-0
              text-slate-400
            "
          />
        )}

        {/* Input */}
        <input
          id={inputId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-invalid={!!error}
          aria-describedby={
            error
              ? `${inputId}-error`
              : undefined
          }
          className="
            w-full
            bg-transparent

            py-4

            text-white
            text-sm

            placeholder:text-slate-500

            outline-none

            disabled:cursor-not-allowed
          "
        />
      </div>

      {/* Error */}
      <ErrorMessage
        id={`${inputId}-error`}
        message={error}
      />
    </div>
  );
};

export default InputField;