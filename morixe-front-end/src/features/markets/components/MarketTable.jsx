import { useState } from "react";

import MarketFilters from "./MarketFilters";
import MarketRow from "./MarketRow";

const MarketTable = ({
  markets = [],
}) => {
  const [filter, setFilter] =
    useState("All");

  const filteredMarkets =
    markets.filter((market) => {
      switch (filter) {
        case "Gainers":
          return market.change24h > 0;

        case "Losers":
          return market.change24h < 0;

        default:
          return true;
      }
    });

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Markets
        </h2>

        <p className="text-slate-400 text-sm">
          Trade cryptocurrencies in
          real time
        </p>

      </div>

      <MarketFilters
        activeFilter={filter}
        onChange={setFilter}
      />

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-800">

              <th className="py-4 px-4 text-left">
                ★
              </th>

              <th className="py-4 px-4 text-left">
                Market
              </th>

              <th className="py-4 px-4 text-right">
                Price
              </th>

              <th className="py-4 px-4 text-right">
                24H Change
              </th>

              <th className="py-4 px-4 text-right">
                Volume
              </th>

              <th className="py-4 px-4 text-right">
                Market Cap
              </th>

              <th className="py-4 px-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredMarkets.map(
              (market) => (
                <MarketRow
                  key={market.id}
                  market={market}
                />
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default MarketTable;