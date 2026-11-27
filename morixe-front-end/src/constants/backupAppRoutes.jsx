/**
 * @component AppRoutes
 * @description
 * Central routing configuration for the entire application. Defines public,
 * protected, nested, and fallback routes using React Router v6. This module
 * acts as the navigation backbone for all user flows including authentication,
 * trading, wallet management, portfolio tracking, and support.
 *
 * @architecture
 * - Uses <BrowserRouter> as the top-level router provider.
 * - Organizes routes into logical domains: Public, Protected, Trading,
 *   Wallet, Portfolio, Account, Support, and Error handling.
 * - Protected routes are nested under `/app` using <MainLayout>, enabling
 *   shared UI (sidebar, header, etc.) and persistent layout structure.
 * - Index routes are used for default dashboard rendering.
 *
 * @responsibilities
 * - Define all application routes and their corresponding page components.
 * - Enforce layout boundaries between public and authenticated sections.
 * - Provide a fallback 404 route for unmatched paths.
 *
 * @constraints
 * - Authentication enforcement must be handled inside MainLayout or a
 *   dedicated guard; this file only declares route structure.
 * - Route paths must remain stable to avoid breaking deep links or bookmarks.
 *
 * @risks
 * - Incorrect nesting may break layout rendering.
 * - Missing wildcard route may expose users to blank screens instead of 404.
 */

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

/* Dashboard */
import Dashboard from "@/pages/Dashboard";

/* Trading */
import Markets from "@/pages/Markets";
import SpotTrading from "@/pages/SpotTrading";
import FuturesTrading from "@/pages/FuturesTrading";

/* Wallet */
import Wallet from "@/pages/Wallet";
import Deposit from "@/pages/Deposit";
import Withdraw from "@/pages/Withdraw";
import Transactions from "@/pages/Transactions";

/* Portfolio */
import Portfolio from "@/pages/Portfolio";

/* Account */
import Profile from "@/pages/Profile";
import Settings from "@/pages/Settings";
import Notifications from "@/pages/Notifications";

/* Support */
import HelpCenter from "@/pages/HelpCenter";

/* Authentication */
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ForgotPassword from "@/pages/ForgotPassword";

/* Landing */
import Landing from "@/pages/Landing";

/* Errors */
import NotFound from "@/pages/NotFound";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* -------------------- Public Routes -------------------- */}

        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* -------------------- Protected Routes -------------------- */}
        {/* MainLayout enforces authentication + shared UI (sidebar, header) */}


        <Route path="/app" element={<MainLayout />}>

          {/* Dashboard (index route) */}
          <Route index element={<Dashboard />} />

          {/* -------------------- Trading -------------------- */}
          <Route path="markets" element={<Markets />} />
          <Route path="spot" element={<SpotTrading />} />
          <Route path="futures" element={<FuturesTrading />} />

          {/* -------------------- Wallet -------------------- */}
          <Route path="wallet" element={<Wallet />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transactions" element={<Transactions />} />

          {/* -------------------- Portfolio -------------------- */}
          <Route path="portfolio" element={<Portfolio />} />

          {/* -------------------- Account -------------------- */}
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="notifications" element={<Notifications />} />

          {/* -------------------- Support -------------------- */}
          <Route path="help-center" element={<HelpCenter />} />

        </Route>

        {/* -------------------- 404 Fallback -------------------- */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
