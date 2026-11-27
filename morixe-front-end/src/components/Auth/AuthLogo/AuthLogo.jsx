/**
 * @component AuthLogo
 * @description
 * Branding component used across authentication screens. Provides a
 * consistent visual identity for the MORIXE platform through typography
 * and color hierarchy.
 *
 * @architecture
 * - Typography and spacing are intentionally minimal to maintain focus
 *   on authentication actions.
 * - Tailwind utility classes are composed directly for predictable,
 *   design-system-aligned styling.
 *
 * @responsibilities
 * - Display the platform name and tagline.
 * - Serve as a reusable header for login, signup, and verification flows.
 *
 * @constraints
 * - Must remain presentation-only; no business logic or dynamic state.
 * - Should not enforce layout constraints on parent containers.
 *
 * @risks
 * - Altering font sizes or spacing may break visual consistency across
 *   multiple authentication screens.
 */

const AuthLogo = () => {
  return (
    <div className="text-center mb-8">
      {/* Primary brand title */}
      <h1
        className="
          text-4xl            /* Large, bold brand presence */
          font-extrabold      /* Strong visual weight */
          text-blue-500       /* Brand color accent */
          tracking-wider      /* Slight letter spacing for premium feel */
        "
      >
        MORIXE
      </h1>

      {/* Supporting tagline */}
      <p className="text-slate-400 mt-2">
        Smart Crypto Trading Platform
      </p>
    </div>
  );
};

export default AuthLogo;
