/**
 * @component MarketPreview
 * @description
 * Displays a compact market overview section with a list of major crypto
 * trading pairs. Designed for landing pages and dashboard previews where
 * quick market visibility is needed without full charting or analytics.
 *
 * @architecture
 * - Market data is defined as a static array to keep the component
 *   presentation-only and avoid unnecessary re-renders.
 * - Tailwind utility classes are used directly for predictable styling
 *   aligned with the design system.
 * - Section layout uses centered max-width container for consistent
 *   alignment across marketing pages.
 *
 * @responsibilities
 * - Render a headline and CTA for navigating to full market listings.
 * - Display a list of crypto pairs with price and change indicators.
 * - Provide lightweight market context without interactive features.
 *
 * @constraints
 * - Must remain presentation-only; no API calls or dynamic pricing.
 * - Change values are treated as strings; consumers must validate format
 *   if integrating real data later.
 *
 * @risks
 * - Static values may appear outdated if used outside marketing contexts.
 * - Overuse of borders and dark backgrounds may reduce contrast on some themes.
 */

const markets = [
  { coin: "BTC/USD", price: "$67,245", change: "+4.25%" },
  { coin: "ETH/USD", price: "$3,456", change: "+2.14%" },
  { coin: "SOL/USD", price: "$152", change: "-1.23%" },
];

export default function MarketPreview() {
  return (
    <section
      className="
        max-w-7xl mx-auto   /* Centered content container */
        px-6 py-24          /* Spacious vertical rhythm */
      "
    >
      {/* Header row — title + CTA */}
      <div
        className="
          flex justify-between items-center
          mb-10
        "
      >
        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Market Overview
        </h2>

        <button
          className="
            text-blue-400     /* CTA link color */
          "
        >
          View Markets
        </button>
      </div>

      {/* Market list container */}
      <div
        className="
          bg-slate-900
          border border-slate-800
          rounded-3xl
          overflow-hidden
        "
      >
        {markets.map((item) => (
          <div
            key={item.coin}
            className="
              flex justify-between
              p-6
              border-b border-slate-800
            "
          >
            {/* Trading pair */}
            <span>{item.coin}</span>

            {/* Price */}
            <span>{item.price}</span>

            {/* Change indicator — always green in this static preview */}
            <span className="text-emerald-400">{item.change}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
