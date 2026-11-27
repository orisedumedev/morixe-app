/**
 * @component SecuritySection
 * @description
 * Security overview section used in landing pages and product marketing.
 * Renders a grid of security features sourced from a structured data file.
 * Each item includes an icon, title, and descriptive text.
 *
 * @architecture
 * - Data is imported from a centralized module (`securityData`) to keep
 *   the component stateless and presentation-focused.
 * - Grid layout adapts responsively using Tailwind’s `md:grid-cols-3`.
 * - Icons are passed as React components inside the data structure,
 *   enabling flexible rendering without conditional logic.
 *
 * @responsibilities
 * - Present a clear, visually consistent overview of platform security.
 * - Render each security item with proper hierarchy and spacing.
 * - Maintain responsive behavior across screen sizes.
 *
 * @constraints
 * - Must remain presentation-only; no dynamic fetching or logic.
 * - `securityData` must contain valid React components for `item.icon`.
 *
 * @risks
 * - Incorrect icon components may break rendering.
 * - Overuse of dark backgrounds may reduce contrast on certain themes.
 */

import { securityData } from "@/data/securityData";

export default function SecuritySection() {
  return (
    <section
      className="
        max-w-7xl mx-auto     /* Centered content container */
        px-6 py-24            /* Spacious vertical rhythm */
      "
    >
      {/* Section heading */}
      <h2
        className="
          text-3xl font-bold
          mb-12
          text-center
        "
      >
        Security First
      </h2>

      {/* Security grid */}
      <div
        className="
          grid
          md:grid-cols-3       /* Three-column layout on medium+ screens */
          gap-6
        "
      >
        {securityData.map((item) => (
          <div
            key={item.id}
            className="
              bg-slate-900
              border border-slate-800
              rounded-2xl
              p-8
            "
          >
            {/* Icon component from data */}
            <item.icon
              className="
                text-blue-500
                mb-5
              "
            />

            {/* Title */}
            <h3
              className="
                font-bold
                text-xl
              "
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              className="
                text-slate-400
                mt-3
              "
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
