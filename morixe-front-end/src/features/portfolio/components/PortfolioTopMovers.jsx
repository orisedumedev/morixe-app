import {
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const PortfolioTopMovers = ({
  assets = [],
}) => {
  const sorted = [...assets].sort(
    (a, b) => b.pnl - a.pnl
  );

  const gainers = sorted.slice(0, 3);

  const losers = [...sorted]
    .reverse()
    .slice(0, 3);

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
      <h2 className="text-xl font-semibold text-white">
        Top Movers
      </h2>

      {/* Gainers */}

      <div className="mt-6">

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-emerald-400">
          Top Gainers
        </h3>

        <div className="space-y-3">

          {gainers.map((asset) => (

            <div
              key={asset.id}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                bg-slate-800
                p-4
              "
            >
              <div>

                <h4 className="font-medium text-white">
                  {asset.symbol}
                </h4>

                <p className="text-sm text-slate-400">
                  {asset.name}
                </p>

              </div>

              <div className="flex items-center gap-2 text-emerald-400">

                <TrendingUp size={18} />

                +{asset.pnl}%

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Losers */}

      <div className="mt-8">

        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-red-400">
          Top Losers
        </h3>

        <div className="space-y-3">

          {losers.map((asset) => (

            <div
              key={asset.id}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                bg-slate-800
                p-4
              "
            >
              <div>

                <h4 className="font-medium text-white">
                  {asset.symbol}
                </h4>

                <p className="text-sm text-slate-400">
                  {asset.name}
                </p>

              </div>

              <div
                className={`flex items-center gap-2 ${
                  asset.pnl >= 0
                    ? "text-emerald-400"
                    : "text-red-400"
                }`}
              >
                {asset.pnl >= 0 ? (
                  <TrendingUp size={18} />
                ) : (
                  <TrendingDown size={18} />
                )}

                {asset.pnl >= 0 ? "+" : ""}
                {asset.pnl}%

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default PortfolioTopMovers;