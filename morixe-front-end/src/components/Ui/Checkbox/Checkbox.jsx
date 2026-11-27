/**
 * @component Checkbox
 * @description
 * Controlled checkbox component used in forms and authentication flows.
 * Wraps the native checkbox input with a label for improved accessibility
 * and consistent UI alignment.
 *
 * @architecture
 * - Uses a controlled input pattern (`checked` + `onChange`) to ensure
 *   predictable state management from parent components.
 * - The entire label is clickable due to `htmlFor`, improving usability
 *   on touch devices and dense form layouts.
 * - Tailwind utility classes are applied directly for layout consistency.
 *
 * @responsibilities
 * - Render a checkbox with an associated label.
 * - Forward state and change events to parent components.
 * - Maintain accessible structure using `<label>` and `htmlFor`.
 *
 * @constraints
 * - Must remain presentation-only; no internal state.
 * - Parent components must manage `checked` and `onChange`.
 *
 * @risks
 * - Missing `id` breaks label association and reduces accessibility.
 * - Passing non-boolean values to `checked` may cause React warnings.
 */

const Checkbox = ({
  id,        // Unique identifier for input + label association
  name,      // Form field name
  checked,   // Controlled checked state
  onChange,  // Change handler from parent
  label,     // Text displayed next to the checkbox
}) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2">
      {/* Controlled checkbox input */}
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      {/* Label text */}
      {label}
    </label>
  );
};

export default Checkbox;
