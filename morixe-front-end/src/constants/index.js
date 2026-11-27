/**
 * @file Barrel Export: Application Configuration Modules
 * @overview
 * Aggregates and re-exports core configuration objects such as ROUTES and
 * NAVIGATION. This creates a unified import surface for all routing and
 * navigation metadata used across the application.
 *
 * @architecture
 * - Acts as the public API for configuration modules.
 * - Keeps consumers decoupled from internal folder structure.
 * - Supports scalable expansion as additional config modules are added.
 *
 * @responsibilities
 * - Re-export ROUTES (path definitions, metadata).
 * - Re-export NAVIGATION (sidebar, menu, or top‑nav structure).
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to underlying file names or locations requires updating this
 * barrel to preserve import stability for all consumers.
 */

// Route configuration export
export { default as ROUTES } from "./routes";

// Navigation configuration export
export { default as NAVIGATION } from "./navigation";
