import { Coins } from "lucide-react";

import MarketSidebarSearch from "./MarketSidebarSearch";
import MarketCoinItem from "./MarketCoinItem";

const MarketSidebar = ({
  loading = false,

  search,
  onSearchChange,

  markets = [],

  selectedMarket,
  onSelectMarket,
}) => {
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
            Cryptocurrency Market
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="p-4">

        <MarketSidebarSearch
          value={search}
          onChange={onSearchChange}
        />

      </div>

      {/* Coin List */}

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
          <div className="py-10 text-center text-slate-400">
            Loading markets...
          </div>
        ) : markets.length === 0 ? (
          <div className="py-10 text-center text-slate-500">
            No markets found.
          </div>
        ) : (
          markets.map((market) => (
            <MarketCoinItem
              key={market.id}
              market={market}
              active={
                selectedMarket?.id ===
                market.id
              }
              onSelect={onSelectMarket}
            />
          ))
        )}
      </div>
    </aside>
  );
};

export default MarketSidebar;