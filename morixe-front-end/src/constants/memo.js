/**
 * @component ProtectedDashboardRoutes
 * @description
 * Defines all authenticated dashboard routes wrapped inside both a
 * `ProtectedRoute` guard and the `DashboardLayoutProvider`. This structure
 * ensures that:
 * - Users must be authenticated before accessing any dashboard page.
 * - All dashboard pages share the same layout (sidebar, header, etc.).
 * - Dashboard context is available throughout the nested route tree.
 *
 * @architecture
 * - Outer <Route element={<ProtectedRoute />}> enforces authentication.
 * - Inner <Route element={<DashboardLayoutProvider><DashboardLayout/></DashboardLayoutProvider>}>
 *   provides layout + context for every dashboard page.
 * - Each child route maps directly to a dashboard feature page.
 *
 * @responsibilities
 * - Protect dashboard routes from unauthenticated access.
 * - Provide consistent UI layout and shared state across dashboard pages.
 * - Define all dashboard-related navigation endpoints.
 *
 * @constraints
 * - Authentication logic must be handled inside ProtectedRoute.
 * - DashboardLayoutProvider must wrap DashboardLayout to ensure context
 *   availability for nested pages.
 *
 * @risks
 * - Incorrect nesting may break layout rendering or context propagation.
 * - Missing paths may cause navigation inconsistencies.
 */

import { DashboardLayout } from "@/features/dashboard/layout";
import { DashboardLayoutProvider } from "@/features/dashboard/context";

<Route element={<ProtectedRoute />}>
  <Route
    element={
      <DashboardLayoutProvider>
        <DashboardLayout />
      </DashboardLayoutProvider>
    }
  >
    {/* ---------------- Dashboard Root ---------------- */}
    <Route path="/dashboard" element={<Dashboard />} />

    {/* ---------------- Dashboard Pages ---------------- */}

    <Route path="/markets" element={<Markets />} />
    <Route path="/trading" element={<Trading />} />

    {/* Wallet */}
    <Route path="/wallet" element={<Wallet />} />
    <Route path="/deposit" element={<Deposit />} />
    <Route path="/withdraw" element={<Withdraw />} />
    <Route path="/transactions" element={<Transactions />} />

    {/* Portfolio */}
    <Route path="/portfolio" element={<Portfolio />} />

    {/* Account */}
    <Route path="/profile" element={<Profile />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/notifications" element={<Notifications />} />

    {/* Support */}
    <Route path="/help-center" element={<HelpCenter />} />

  </Route>
</Route>
