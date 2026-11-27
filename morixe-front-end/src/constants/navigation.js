/**
 * @module NAVIGATION
 * @description
 * Centralized navigation schema for the dashboard. Defines all sidebar and
 * navbar items, their metadata, icons, visibility rules, and route bindings.
 * This configuration powers the entire dashboard navigation system.
 *
 * @architecture
 * - Structured as an array of "sections", each containing multiple "items".
 * - Each item maps directly to a route defined in ROUTES.DASHBOARD.
 * - Icons are imported React components from lucide-react for consistent UI.
 * - Visibility flags (`showInSidebar`, `showInNavbar`) allow flexible
 *   rendering across different navigation surfaces.
 *
 * @responsibilities
 * - Provide a single source of truth for dashboard navigation.
 * - Decouple navigation UI from route definitions.
 * - Enable dynamic rendering of sidebar and navbar menus.
 *
 * @constraints
 * - Must remain pure configuration; no logic or functions.
 * - Route paths must match ROUTES.DASHBOARD to avoid broken navigation.
 *
 * @risks
 * - Incorrect path mapping may break navigation.
 * - Missing visibility flags may cause items to disappear unintentionally.
 */

import {
  BarChart3,
  Bell,
  CircleDollarSign,
  HelpCircle,
  Home,
  LineChart,
  Settings,
  User,
  Wallet,
} from "lucide-react";

import ROUTES from "./routes";

/**
 * Navigation schema used by sidebar and navbar components.
 * Each section groups related dashboard features.
 */
const NAVIGATION = [
  {
    section: "Main", // Primary dashboard features

    items: [
      {
        id: "dashboard",
        title: "Dashboard",
        description: "Overview of your account",
        icon: Home,
        path: ROUTES.DASHBOARD.HOME,
        showInSidebar: true,
        showInNavbar: true,
      },

      {
        id: "markets",
        title: "Markets",
        description: "Live cryptocurrency markets",
        icon: LineChart,
        path: ROUTES.DASHBOARD.MARKETS,
        showInSidebar: true,
        showInNavbar: true,
      },

      {
        id: "trading",
        title: "Trading",
        description: "Buy and sell cryptocurrencies",
        icon: BarChart3,
        path: ROUTES.DASHBOARD.TRADING,
        showInSidebar: true,
        showInNavbar: true,
      },
    ],
  },

  {
    section: "Wallet", // Wallet-related operations

    items: [
      {
        id: "wallet",
        title: "Wallet",
        description: "Wallet overview",
        icon: Wallet,
        path: ROUTES.DASHBOARD.WALLET,
        showInSidebar: true,
        showInNavbar: false,
      },

      {
        id: "deposit",
        title: "Deposit",
        description: "Deposit crypto assets",
        icon: CircleDollarSign,
        path: ROUTES.DASHBOARD.DEPOSIT,
        showInSidebar: true,
        showInNavbar: false,
      },

      {
        id: "withdraw",
        title: "Withdraw",
        description: "Withdraw crypto assets",
        icon: CircleDollarSign,
        path: ROUTES.DASHBOARD.WITHDRAW,
        showInSidebar: true,
        showInNavbar: false,
      },

      {
        id: "transactions",
        title: "Transactions",
        description: "Transaction history",
        icon: CircleDollarSign,
        path: ROUTES.DASHBOARD.TRANSACTIONS,
        showInSidebar: true,
        showInNavbar: false,
      },

      {
        id: "portfolio",
        title: "Portfolio",
        description: "Portfolio overview",
        icon: BarChart3,
        path: ROUTES.DASHBOARD.PORTFOLIO,
        showInSidebar: true,
        showInNavbar: false,
      },
    ],
  },

  {
    section: "Account", // User account management

    items: [
      {
        id: "profile",
        title: "Profile",
        description: "Manage your profile",
        icon: User,
        path: ROUTES.DASHBOARD.PROFILE,
        showInSidebar: true,
        showInNavbar: false,
      },

      {
        id: "notifications",
        title: "Notifications",
        description: "Notification center",
        icon: Bell,
        path: ROUTES.DASHBOARD.NOTIFICATIONS,
        showInSidebar: true,
        showInNavbar: true,
      },

      {
        id: "settings",
        title: "Settings",
        description: "Application settings",
        icon: Settings,
        path: ROUTES.DASHBOARD.SETTINGS,
        showInSidebar: true,
        showInNavbar: false,
      },

      {
        id: "help-center",
        title: "Help Center",
        description: "Support and documentation",
        icon: HelpCircle,
        path: ROUTES.DASHBOARD.HELP_CENTER,
        showInSidebar: true,
        showInNavbar: false,
      },
    ],
  },
];

export default NAVIGATION;
