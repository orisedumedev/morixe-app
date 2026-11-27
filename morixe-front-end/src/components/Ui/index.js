/**
 * @file Barrel Export: UI Component Groups
 * @overview
 * Aggregates exports from multiple component namespaces (Button, Checkbox,
 * Divider, Form, Social, Spinner) into a single unified module. This creates
 * a clean, scalable import surface for the entire UI library.
 *
 * @architecture
 * - Acts as the top-level public API for UI components.
 * - Prevents deep relative imports and improves maintainability.
 * - Enables modular grouping: each folder represents a domain-specific
 *   component set (e.g., Form, Social, Spinner).
 *
 * @responsibilities
 * - Re-export all components from their respective namespaces.
 * - Provide a single import location for consumers of the UI library.
 *
 * @constraints
 * - Must remain declarative; no logic or side effects should be added.
 * - Export paths must remain stable to avoid breaking imports across modules.
 *
 * @changeManagement
 * Adding or removing component groups requires updating this barrel to keep
 * the public API consistent and predictable.
 */

// Component group exports
export * from "./Button";
export * from "./Checkbox";
export * from "./Divider";
export * from "./Form";
export * from "./Social";
export * from "./Spinner";
