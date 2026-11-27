/**
 * @component AuthLayout
 * @description
 * Structural layout wrapper for all authentication-related pages.
 * Provides a centered viewport, ambient particle background, and
 * controlled layering to ensure a premium, distraction-free auth UI.
 *
 * @architecture
 * - BackgroundParticles is rendered behind all content using absolute
 *   positioning and z-index layering.
 * - The layout uses flexbox to center authentication forms consistently
 *   across screen sizes.
 * - Tailwind utility classes are composed directly for predictable styling
 *   without external CSS dependencies.
 *
 * @responsibilities
 * - Establish a full-screen authentication environment.
 * - Render animated background particles without interfering with content.
 * - Provide a stable container for auth forms and flows.
 *
 * @constraints
 * - Must remain presentation-only; no business logic should be added.
 * - Children should not be constrained by layout-specific styling to
 *   preserve composability across different auth screens.
 *
 * @risks
 * - Incorrect z-index layering may cause particles to overlap form fields.
 * - Removing overflow-hidden may expose particle animations outside bounds.
 */

import BackgroundParticles from "../BackgroundParticles/BackgroundParticles"; // Ambient animated background
import "@/styles/auth.css"; // Auth-specific global styles

/**
 * @function AuthLayout
 * @returns {JSX.Element} Structured authentication layout with background effects.
 */
const AuthLayout = ({ children }) => {
  return (
    <main
      className="
        relative                     /* Enables layered positioning */
        min-h-screen                 /* Full viewport height */
        overflow-hidden              /* Prevent particles from escaping bounds */
        bg-slate-950                 /* Dark theme background */
        flex items-center justify-center /* Center auth content */
        px-6                         /* Responsive horizontal padding */
      "
    >

      {/* Background layer — particles rendered behind all content */}
      <div className="absolute inset-0 z-0">
        <BackgroundParticles />
      </div>

      {/* Foreground content — auth forms, cards, etc. */}
      <div className="relative z-10 w-full max-w-md">
        {children}
      </div>

    </main>
  );
};

export default AuthLayout;
