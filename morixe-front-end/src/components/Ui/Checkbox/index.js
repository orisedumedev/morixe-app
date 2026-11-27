/**
 * @file Barrel Export: Checkbox Component
 * @overview
 * Provides a stable, centralized export path for the Checkbox component.
 * Barrel files help maintain clean import surfaces and prevent deep or
 * brittle import chains across the application.
 *
 * @architecture
 * - Acts as the public API for the Checkbox module.
 * - Keeps consumers decoupled from internal folder structure.
 * - Enables future expansion (e.g., exporting additional form controls).
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to the underlying file path requires updating this barrel
 * to preserve import stability for all consumers.
 */

// Re-export Checkbox to provide a clean and consistent import path
export { default as Checkbox } from "./Checkbox";
