/**
 * @file Barrel Export: Form Components
 * @overview
 * Centralizes exports for all form-related components, providing a clean,
 * stable import surface for consumers. This prevents deep relative paths
 * and improves maintainability across the application.
 *
 * @architecture
 * - Acts as the public API for the form input module group.
 * - Keeps consumers decoupled from internal folder structure.
 * - Enables scalable grouping as additional form components are added.
 *
 * @responsibilities
 * - Re-export InputField, PasswordField, CountrySelect, and ErrorMessage.
 * - Provide a single import location for all form controls.
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Any change to underlying file names or locations requires updating this
 * barrel to preserve import stability for all consumers.
 */

// Form input components
export { default as InputField } from "./InputField";
export { default as PasswordField } from "./PasswordField";
export { default as CountrySelect } from "./CountrySelect";
export { default as ErrorMessage } from "./ErrorMessage";
