import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  ProtectedRoute,
  PublicRoute,
} from "@/features/auth";

import {
  DashboardLayout,
  Dashboard,
} from "@/features/dashboard";

import { Markets } from "@/features/markets";
import { Trading } from "@/features/trading";
import { Wallet } from "@/features/wallets";
import { Withdraw } from "@/features/withdraw";
import { Deposit } from "@/features/deposit";
import { Profile } from "@/features/profile";
import {Settings }from "@/features/settings";
import { Portfolio } from "@/features/portfolio";
import { Notifications } from "@/features/notifications";
import { Transactions } from "@/features/transactions";
import { HelpCenter } from "@/features/help-center";
import {
  DashboardLayoutProvider,
} from "@/features/dashboard/context";

import {
  Login,
  Register,
  ForgotPassword,
} from "@/features/auth";
//import { Dashboard } from "@/features/dashboard";
import { Landing, Test } from "@/features/home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicRoute />}>
          <Route
              path="/login"
          element={<Login />}
          />

          <Route
          path="/register"
          element={<Register />}
          />

          <Route 
          path="/test" 
          element={<Test />} 
          />

          <Route
          path="/forgot-password"
          element={<ForgotPassword />}
          />
        </Route>
        <Route
          element={
            <DashboardLayoutProvider>
              <DashboardLayout />
            </DashboardLayoutProvider>
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />

          {/* Account */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/notifications" element={<Notifications />} />

          {/* Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/help-center" element={<HelpCenter />} />
        </Route>

        {/* Public landing page */}
        <Route
          path="/"
          element={<Landing />}
        />
      </Routes>
    </BrowserRouter>
  );
}