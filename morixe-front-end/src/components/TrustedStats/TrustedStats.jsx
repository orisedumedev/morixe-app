/**
 * @component TrustedStats
 * @description
 * Trust-building statistics section used in landing pages and marketing
 * surfaces. Displays key platform metrics (traders, countries, uptime,
 * volume) in a responsive grid layout.
 *
 * @architecture
 * - Stats are defined in a static array to keep the component
 *   presentation-only and avoid unnecessary re-renders.
 * - Grid layout adapts responsively using Tailwind’s `md:grid-cols-4`.
 * - Each stat card uses consistent spacing, borders, and hover states
 *   to maintain visual hierarchy and interaction polish.
 *
 * @responsibilities
 * - Present high-level platform metrics to reinforce credibility.
 * - Maintain consistent visual rhythm across marketing sections.
 * - Provide responsive layout behavior across screen sizes.
 *
 * @constraints
 * - Must remain presentation-only; no dynamic fetching or real-time updates.
 * - Values are treated as strings; consumers must validate format if
 *   integrating real data later.
 *
 * @risks
 * - Static values may appear outdated if reused outside marketing contexts.
 * - Overuse of dark backgrounds may reduce contrast on certain themes.
 */

const stats = [
  { number: "5M+", label: "Active Traders" },
  { number: "150+", label: "Countries Supported" },
  { number: "99.99%", label: "Platform Uptime" },
  { number: "$2B+", label: "Trading Volume" },
];

export default function TrustedStats() {
  return (
    <section
      className="
        max-w-7xl mx-auto     /* Centered content container */
        px-6 py-24            /* Spacious vertical rhythm */
      "
    >
      <div
        className="
          grid
          grid-cols-2          /* Two columns on small screens */
          md:grid-cols-4       /* Four columns on medium+ screens */
          gap-6
        "
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="
              bg-slate-900
              border border-slate-800
              rounded-2xl
              p-8
              text-center
              hover:border-blue-500/40 /* Subtle hover highlight */
              transition
            "
          >
            {/* Stat number */}
            <h2
              className="
                text-4xl
                font-bold
                text-white
              "
            >
              {item.number}
            </h2>

            {/* Stat label */}
            <p
              className="
                text-slate-400
                mt-2
              "
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
