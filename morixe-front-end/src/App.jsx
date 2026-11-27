/**
 * @component App
 * @description
 * Root-level application shell responsible for composing global providers
 * and orchestrating the initial authentication flow and route rendering.
 *
 * @architecture
 * - AuthProvider is intentionally placed here (not only in index.jsx)
 *   to ensure feature-level modules have access to auth state even when
 *   the app is rendered inside nested environments (microfrontends,
 *   testing harnesses, or isolated storybook contexts).
 *
 * - AutoLogin executes session restoration logic before route evaluation,
 *   ensuring protected routes behave consistently across refreshes.
 *
 * - AppRoutes encapsulates the full routing table for the application.
 *
 * @responsibilities
 * - Provide global authentication context.
 * - Trigger automatic login/session restoration.
 * - Render the application’s route hierarchy.
 *
 * @risks
 * - Removing AutoLogin may cause inconsistent auth state on page reload.
 * - Changing provider order may break protected route evaluation.
 */

import { AuthProvider } from "@/features/auth/context";   // Global auth context provider
import { AutoLogin } from "@/features/auth/auto";         // Restores session on initial load
import { AppRoutes } from "@/routes";                     // Application routing table

/**
 * @function App
 * @returns {JSX.Element} Application shell with global providers and routing.
 */
function App() {

  // Wrap the entire app in AuthProvider so all components can access auth state
  return (
    <AuthProvider>
      {/* AutoLogin restores user session before routes render */}
      <AutoLogin />

      {/* AppRoutes contains all route definitions and navigation logic */}
      <AppRoutes />
      
    </AuthProvider>
  );
}

export default App;
