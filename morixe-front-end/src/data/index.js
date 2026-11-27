/**
 * @file Barrel Export: securityData
 * @overview
 * Provides a centralized export path for the securityData configuration
 * module. Barrel files simplify imports across the application and prevent
 * deep or brittle relative paths.
 *
 * @architecture
 * - Acts as the public API for the securityData dataset.
 * - Keeps consumers decoupled from internal folder structure.
 * - Supports scalable grouping as additional security-related config modules
 *   are added in the future.
 *
 * @responsibilities
 * - Re-export the securityData array for use in UI components.
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to the underlying file name or location requires updating this
 * barrel to preserve import stability for all consumers.
 */

export { securityData } from "./securityData";
