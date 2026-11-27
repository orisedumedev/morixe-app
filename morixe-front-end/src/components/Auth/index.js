/**
 * @file Barrel Export: Authentication UI Components
 * @overview
 * Centralizes exports for all authentication-related UI components.
 * This file provides a stable and predictable import surface, reducing
 * deep import paths and improving maintainability across feature modules.
 *
 * @architecture
 * - Acts as the public API for the auth UI layer.
 * - Keeps consumers decoupled from internal folder structure.
 * - Enables scalable expansion (e.g., adding new auth components).
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across
 *   authentication flows and shared modules.
 *
 * @changeManagement
 * Any change to folder structure or file names requires updating this
 * barrel to preserve import stability for all consumers.
 */

// Export layout wrapper for authentication screens
export { default as AuthLayout } from "./AuthLayout/AuthLayout";

// Export reusable authentication card container
export { default as AuthCard } from "./AuthCard/AuthCard";

// Export branding/logo component for auth flows
export { default as AuthLogo } from "./AuthLogo/AuthLogo";

// Export animated background particle component
export { default as BackgroundParticles } from "./BackgroundParticles/BackgroundParticles";
