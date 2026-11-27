/**
 * @file Barrel Export: Divider Component
 * @overview
 * Centralizes the export path for the Divider component, ensuring a clean
 * and predictable import surface across the application. Barrel files help
 * prevent deep relative paths and improve maintainability.
 *
 * @architecture
 * - Acts as the public API for the Divider module.
 * - Keeps consumers decoupled from internal folder structure.
 * - Supports future expansion (e.g., exporting multiple form utilities).
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to the underlying file path requires updating this barrel
 * to preserve import stability for all consumers.
 */

// Re-export Divider to provide a clean and consistent import path
export { default as Divider } from "./Divider";
