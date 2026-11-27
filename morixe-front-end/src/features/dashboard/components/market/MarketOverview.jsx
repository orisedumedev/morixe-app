import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

import useMarket from "./useMarket";

import {
  Card,
  SectionHeader,
} from "@/features/dashboard/components";

const MarketOverview = () => {
  const {
    markets,
    loading,
    error,
  } = useMarket();

  if (loading) {
    return (
      <Card>
        Loading market...
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <p className="text-red-400">
          {error}
        </p>
      </Card>
    );
  }

  return (
    <Card>

      <SectionHeader
        title="Market Overview"
        subtitle="Live market snapshot"
      />

      <div className="space-y-4">

        {markets.map((market) => (
          <div
            key={market.id}
            className="
              flex
              justify-between
              items-center
              border-b
              border-slate-800
              pb-4
              last:border-none
            "
          >
            <div>

              <h3 className="font-medium">
                {market.symbol}
              </h3>

              <p className="text-sm text-slate-400">
                {market.price}
              </p>

            </div>

            <div
              className={`
                flex
                items-center
                gap-2
                ${
                  market.positive
                    ? "text-green-400"
                    : "text-red-400"
                }
              `}
            >
              {market.positive ? (
                <TrendingUp size={18} />
              ) : (
                <TrendingDown size={18} />
              )}

              {market.change}
            </div>

          </div>
        ))}

      </div>

    </Card>
  );
};

export default MarketOverview;