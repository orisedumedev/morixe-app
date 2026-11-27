/**
 * @file Barrel Export: Routing Module
 * @overview
 * Exposes the application's routing entry point through a stable,
 * centralized import path. Barrel files help maintain a clean module
 * structure and prevent deep or brittle import chains.
 *
 * @architecture
 * - This file acts as the public surface for routing utilities.
 * - Keeps consumers decoupled from internal folder structure.
 * - Enables future expansion (e.g., exporting multiple route utilities).
 *
 * @constraints
 * - Must remain declarative; no logic should be added here.
 * - Export paths must remain stable to avoid breaking imports across
 *   feature modules.
 *
 * @changeManagement
 * Any change to the underlying file path requires updating all consumers
 * unless they import exclusively through this barrel.
 */

// Re-export AppRoutes to provide a clean and consistent import path
export { default as AppRoutes } from "./AppRoutes";
