import { Coins } from "lucide-react";

import TradingPairSearch from "./TradingPairSearch";
import TradingPairItem from "./TradingPairItem";

const TradingPairList = ({
  loading,
  search,
  onSearchChange,
  pairs,
  value,
  onChange,
}) => {

  const handleSelect = (pair) => {
    onChange?.(pair.symbol);
  };

  return (
    <aside
      className="
        h-full
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        flex
        flex-col
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-slate-800
          p-5
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-blue-600
          "
        >
          <Coins
            size={22}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="font-semibold text-white">
            Markets
          </h2>

          <p className="text-xs text-slate-400">
            Spot Trading
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="p-4">

        <TradingPairSearch
          value={search}
          onChange={onSearchChange}
        />

      </div>

      {/* List */}

      <div
        className="
          flex-1
          overflow-y-auto
          px-4
          pb-4
          space-y-2
        "
      >
        {loading ? (
          <div className="py-8 text-center text-slate-400">
            Loading...
          </div>
        ) : pairs?.length === 0 ? (
          <div className="py-8 text-center text-slate-500">
            No trading pairs found.
          </div>
        ) : (
          (pairs || []).map((pair) => (
            <TradingPairItem
              key={pair.id}
              pair={pair}
              active={
                value === pair.symbol
              }
              onSelect={
                handleSelect
              }
            />
          ))
        )}

      </div>

    </aside>
  );
};

export default TradingPairList;