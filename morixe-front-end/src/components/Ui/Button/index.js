/**
 * @file Barrel Export: SubmitButton Component
 * @overview
 * Provides a stable, centralized export path for the SubmitButton component.
 * Barrel files help maintain clean import surfaces and prevent deep or
 * brittle import chains across the application.
 *
 * @architecture
 * - Acts as the public API for the SubmitButton module.
 * - Keeps consumers decoupled from internal folder structure.
 * - Enables future expansion (e.g., exporting multiple form-related utilities).
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to the underlying file path requires updating this barrel
 * to preserve import stability for all consumers.
 */

// Re-export SubmitButton to provide a clean and consistent import path
export { default as SubmitButton } from "./SubmitButton";
