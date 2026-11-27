/**
 * @module ROUTES
 * @description
 * Centralized route definition object for the entire application. This module
 * acts as the single source of truth for all URL paths used across public
 * pages, dashboard pages, navigation menus, and routing components.
 *
 * @architecture
 * - Structured into two main namespaces:
 *   - PUBLIC: unauthenticated routes (landing, login, register, etc.)
 *   - DASHBOARD: authenticated routes rendered inside the dashboard layout
 * - Each key maps directly to a string path used by React Router.
 * - Ensures consistency across navigation, route guards, and deep links.
 *
 * @responsibilities
 * - Provide stable, predictable route paths for all app modules.
 * - Decouple route strings from components to avoid duplication.
 * - Enable safe refactoring by centralizing all path definitions.
 *
 * @constraints
 * - Must remain pure configuration; no logic or functions.
 * - Paths must match those used in AppRoutes and NAVIGATION.
 *
 * @risks
 * - Changing a path here without updating navigation or routing components
 *   will break navigation.
 * - Duplicate or conflicting paths may cause unexpected route matching.
 */

const ROUTES = {
  PUBLIC: {
    LANDING: "/",                 // Landing page
    LOGIN: "/login",              // Authentication: login
    REGISTER: "/register",        // Authentication: register
    FORGOT_PASSWORD: "/forgot-password",
    TEST: "/test",                // Temporary or development route
  },

  DASHBOARD: {
    HOME: "/dashboard",           // Dashboard index

    // Trading
    MARKETS: "/markets",
    TRADING: "/trading",

    // Wallet
    WALLET: "/wallet",
    DEPOSIT: "/deposit",
    WITHDRAW: "/withdraw",
    TRANSACTIONS: "/transactions",

    // Portfolio
    PORTFOLIO: "/portfolio",

    // Account
    PROFILE: "/profile",
    SETTINGS: "/settings",
    NOTIFICATIONS: "/notifications",

    // Support
    HELP_CENTER: "/help-center",
  },
};

export default ROUTES;
