/**
 * @module securityData
 * @description
 * Configuration dataset powering the "Security First" section of the landing
 * page. Each entry represents a security feature with an icon, title, and
 * descriptive text. This module is consumed by UI components to render
 * consistent, declarative security messaging.
 *
 * @architecture
 * - Structured as an array of objects, each describing a single security item.
 * - Icons are imported React components from lucide-react for visual consistency.
 * - IDs provide stable keys for React rendering and analytics tracking.
 *
 * @responsibilities
 * - Provide a centralized, maintainable list of security features.
 * - Decouple UI components from hardcoded strings or icon imports.
 * - Enable easy expansion of security features without modifying UI logic.
 *
 * @constraints
 * - Must remain pure configuration; no functions or dynamic logic.
 * - Icon components must remain compatible with the consuming UI.
 *
 * @risks
 * - Changing IDs may break component keys or analytics.
 * - Removing items without updating UI layout may cause spacing inconsistencies.
 */

import { ShieldCheck, Lock, Server } from "lucide-react";

/**
 * Array of security feature definitions used by the SecuritySection component.
 */
export const securityData = [
  {
    id: "secure-trading",           // Unique identifier
    icon: ShieldCheck,              // Icon component
    title: "Secure Trading",        // Feature title
    text: "Advanced protection for your digital assets.", // Description
  },
  {
    id: "data-encryption",
    icon: Lock,
    title: "Data Encryption",
    text: "Your information stays protected.",
  },
  {
    id: "reliable-infrastructure",
    icon: Server,
    title: "Reliable Infrastructure",
    text: "High performance trading systems.",
  },
];
