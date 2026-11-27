/**
 * @file Application Bootstrap
 * @overview
 * Initializes the React 18 rendering root, registers global providers,
 * and mounts the application shell. This file must remain free of
 * business logic and should only orchestrate top‑level initialization.
 *
 * @architecture
 * - Provider order is intentional and affects routing, hydration,
 *   and global state availability.
 * - StrictMode is enabled to surface development‑time warnings and
 *   detect unsafe lifecycle patterns.
 *
 * @constraints
 * - The #root element must exist in index.html; renaming it requires
 *   updates to deployment templates and SSR hydration logic.
 * - AuthProvider must wrap <App /> to ensure authentication state
 *   is available during initial render and routing.
 *
 * @changeManagement
 * Any modification to provider hierarchy or rendering strategy should
 * undergo architectural review due to potential impact on global state,
 * routing guards, and hydration behavior.
 */

import React from "react";                     // Core React runtime
import ReactDOM from "react-dom/client";       // React 18 root API (required for concurrent rendering)

import App from "./App";                       // Main application shell
import "./index.css";                          // Global stylesheet (non‑scoped)

/**
 * @provider AuthProvider
 * @description
 * Supplies global authentication context, including session state,
 * user identity, and authorization roles. Required before routing
 * and feature modules initialize.
 *
 * @note
 * Do not relocate this provider below <App /> — doing so will break
 * protected route evaluation and login persistence.
 */
import { AuthProvider } from "@/features/auth/context";

// Create the React root and mount the application.
// This is the only place where ReactDOM.createRoot should be called.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* StrictMode activates additional runtime checks during development */}
    <AuthProvider>
      {/* AuthProvider ensures authentication state is available before App renders */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
