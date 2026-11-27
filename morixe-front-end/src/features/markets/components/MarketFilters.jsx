import { useState } from "react";

const FILTERS = [
  "All",
  "Spot",
  "Futures",
  "Gainers",
  "Losers",
  "Favorites",
];

const MarketFilters = ({
  activeFilter = "All",
  onChange,
}) => {
  const [selected, setSelected] =
    useState(activeFilter);

  const handleSelect = (filter) => {
    setSelected(filter);

    if (onChange) {
      onChange(filter);
    }
  };

  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
        mb-6
      "
    >
      {FILTERS.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() =>
            handleSelect(filter)
          }
          className={`
            px-4
            py-2
            rounded-xl
            text-sm
            font-medium
            transition-all
            duration-200
            ${
              selected === filter
                ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default MarketFilters;