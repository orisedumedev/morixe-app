import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProtectedRoute, PublicRoute } from "@/features/auth";

import {
  DashboardLayout,
  Dashboard,
} from "@/features/dashboard";

import { DashboardLayoutProvider } from "@/features/dashboard/context";

import { Markets } from "@/features/markets";
import { Trading } from "@/features/trading";
import { Wallet } from "@/features/wallets";
import { Withdraw } from "@/features/withdraw";
import { Deposit } from "@/features/deposit";
import { Profile } from "@/features/profile";
import { Settings } from "@/features/settings";
import { Portfolio } from "@/features/portfolio";
import { Notifications } from "@/features/notifications";
import { Transactions } from "@/features/transactions";
import { HelpCenter } from "@/features/help-center";

import { Login, Register, ForgotPassword } from "@/features/auth";
import { Landing, Test } from "@/features/home";
import { PublicLayout } from "@/features/home/layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ============================= */}
        {/* Authentication */}
        {/* ============================= */}

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
            path="/forgot-password"
            element={<ForgotPassword />}
          />

        </Route>


        {/* ============================= */}
        {/* Public Website */}
        {/* ============================= */}
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
             <Route
            index
            element={<Landing />}
          />

          <Route
            path="test"
            element={<Test />}
          />

          <Route
            path="markets"
            element={<Markets />}
          />

          {/*
          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />
          */}

          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/test" element={<Test />} />
        </Route>


        {/* ============================= */}
        {/* Protected Dashboard */}
        {/* ============================= */}
        {/* Protected dashboard routes */}
        
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
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Route>
        

      </Routes>
    </BrowserRouter>
  );
}
