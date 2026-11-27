/**
 * @file Barrel Export: Social Login Utilities
 * @overview
 * Re-exports the social login handler to provide a clean and centralized
 * import path for authentication-related utilities. Barrel files help
 * maintain a consistent module structure and reduce deep import chains.
 *
 * @architecture
 * - This file acts as a public surface for auth utilities.
 * - Keeps feature modules decoupled from internal file structure.
 * - Enables future expansion (e.g., exporting multiple auth utilities).
 *
 * @constraints
 * - Export paths must remain stable to avoid breaking feature imports.
 * - Avoid adding logic here — barrel files should remain declarative.
 *
 * @changeManagement
 * Any change to the underlying file path requires updating all consumers
 * unless they import exclusively through this barrel.
 */

// Re-export the social login handler for cleaner imports across the app
export { default as handleSocialLogin } from "./handleSocialLogin";
