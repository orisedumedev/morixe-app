/**
 * @file Barrel Export: LoadingSpinner Component
 * @overview
 * Provides a centralized and stable export path for the LoadingSpinner
 * component. Barrel files simplify imports across the application and
 * prevent deep or brittle relative paths.
 *
 * @architecture
 * - Acts as the public API for the LoadingSpinner module.
 * - Keeps consumers decoupled from internal folder structure.
 * - Supports scalable grouping as additional loading or feedback components
 *   are added in the future.
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to the underlying file name or location requires updating this
 * barrel to preserve import stability for all consumers.
 */

// Re-export LoadingSpinner to provide a clean and consistent import path
export { default as LoadingSpinner } from "./LoadingSpinner";
