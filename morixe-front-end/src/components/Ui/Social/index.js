/**
 * @file Barrel Export: SocialLoginButton Component
 * @overview
 * Centralizes the export path for the SocialLoginButton component, ensuring
 * a clean and predictable import surface across the application. Barrel files
 * prevent deep relative paths and improve long-term maintainability.
 *
 * @architecture
 * - Acts as the public API for the SocialLoginButton module.
 * - Keeps consumers decoupled from internal folder structure.
 * - Supports scalable grouping as additional social auth utilities are added.
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to the underlying file name or location requires updating this
 * barrel to preserve import stability for all consumers.
 */

// Re-export SocialLoginButton to provide a clean and consistent import path
export { default as SocialLoginButton } from "./SocialLoginButton";
