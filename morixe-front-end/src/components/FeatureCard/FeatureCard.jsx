/**
 * @component FeatureCard
 * @description
 * Reusable feature highlight card used in marketing sections, landing pages,
 * and product overviews. Displays an icon, title, and description with subtle
 * hover motion to reinforce interactivity and modern UI polish.
 *
 * @architecture
 * - Tailwind utility classes are composed directly for predictable styling.
 * - Hover animation uses translate + border color transition to maintain
 *   lightweight performance without external animation libraries.
 * - Icon is passed as a React node to allow flexible usage (Lucide icons,
 *   custom SVGs, emojis, etc.).
 *
 * @responsibilities
 * - Present a feature with consistent visual hierarchy.
 * - Provide subtle motion feedback on hover.
 * - Accept dynamic content via props for flexible reuse.
 *
 * @constraints
 * - Must remain presentation-only; no business logic or state.
 * - Icon prop should be a valid React element; strings may break layout.
 *
 * @risks
 * - Overuse of hover motion may distract users if placed in dense layouts.
 * - Changing padding or border radius may break alignment across feature grids.
 */

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div
      className="
        bg-slate-800/80            /* Semi-transparent dark card */
        border border-slate-700    /* Subtle border for depth */
        rounded-2xl                /* Soft modern rounding */
        p-6                        /* Comfortable spacing */
        transition duration-300    /* Smooth hover transitions */
        hover:-translate-y-2       /* Lift effect on hover */
        hover:border-blue-500      /* Highlight border on hover */
      "
    >
      {/* Icon container — visually dominant element */}
      <div
        className="
          text-blue-400            /* Brand accent color */
          text-3xl                 /* Large icon size */
          mb-4                     /* Spacing below icon */
        "
      >
        {icon}
      </div>

      {/* Title — primary text */}
      <h3
        className="
          font-semibold
          text-xl
          mb-2
        "
      >
        {title}
      </h3>

      {/* Description — supporting text */}
      <p className="text-slate-400">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
