/**
 * @component CountrySelect
 * @description
 * Country selection input built on top of `react-select` with a custom
 * dark-themed UI, integrated icon, and full accessibility support.
 * Designed for onboarding and authentication flows requiring structured
 * country data.
 *
 * @architecture
 * - Uses `react-select-country-list` to generate ISO country data.
 * - `useMemo` ensures the country list is computed once for performance.
 * - Custom styles override react-select’s default theme to match the
 *   application's dark UI and focus states.
 * - Globe icon is absolutely positioned to create a native input feel.
 *
 * @responsibilities
 * - Render a searchable country dropdown with consistent styling.
 * - Provide accessible labeling and error messaging.
 * - Support controlled input behavior via `value` and `onChange`.
 *
 * @constraints
 * - Must remain presentation-only; no internal state.
 * - `react-select` styles must be overridden carefully to avoid regressions.
 *
 * @risks
 * - Incorrect custom styles may break focus rings or accessibility.
 * - Overuse of absolute positioning may cause alignment issues on small screens.
 */

import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { Globe } from "lucide-react";

const CountrySelect = ({
  label = "Country",            // Visible label text
  inputId = "country",          // Input identifier for accessibility
  name = "country",             // Form field name
  value,                        // Controlled value
  onChange,                     // Change handler
  error,                        // Error message string
  placeholder = "Select your country",
  isDisabled = false,           // Disable state
}) => {
  // Memoized country list to avoid recomputation
  const options = useMemo(() => countryList().getData(), []);

  // Custom react-select styling to match dark UI theme
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "rgba(15,23,42,0.6)",
      borderColor: error
        ? "#EF4444"            // Error state border
        : state.isFocused
        ? "#3B82F6"            // Focus border
        : "#334155",           // Default border
      borderRadius: "16px",
      minHeight: "58px",
      paddingLeft: "42px",     // Space for Globe icon
      boxShadow: state.isFocused
        ? "0 0 0 3px rgba(59,130,246,.25)"
        : "none",
      transition: "all .25s",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#3B82F6",
      },
    }),

    menu: (provided) => ({
      ...provided,
      backgroundColor: "#0F172A",
      borderRadius: "14px",
      overflow: "hidden",
      zIndex: 9999,
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#1E40AF" : "#0F172A",
      color: "#fff",
      cursor: "pointer",
      padding: "12px 16px",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "#fff",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#64748B",
    }),

    input: (provided) => ({
      ...provided,
      color: "#fff",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#94A3B8",
    }),

    indicatorSeparator: () => ({
      display: "none",
    }),

    valueContainer: (provided) => ({
      ...provided,
      padding: "2px 0",
    }),
  };

  return (
    <div className="space-y-2">
      {/* Input label */}
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-slate-300"
      >
        {label}
      </label>

      <div className="relative">
        {/* Decorative Globe icon */}
        <Globe
          size={20}
          className="
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            z-10
            pointer-events-none
          "
        />

        {/* React-select dropdown */}
        <Select
          inputId={inputId}
          name={name}
          options={options}
          value={value}
          onChange={onChange}
          isDisabled={isDisabled}
          placeholder={placeholder}
          styles={customStyles}
          isSearchable
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
      </div>

      {/* Error message */}
      {error && (
        <p
          id={`${inputId}-error`}
          className="text-sm text-red-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default CountrySelect;
