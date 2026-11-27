import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const MarketCoinItem = ({
  market,
  active = false,
  onSelect,
}) => {
  const isPositive =
    market.change24h >= 0;

  const handleClick = () => {
    onSelect?.(market);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`
        w-full
        rounded-xl
        border
        p-3
        text-left
        transition-all
        duration-200

        ${
          active
            ? "border-blue-500 bg-slate-800 shadow-md"
            : "border-transparent hover:border-slate-700 hover:bg-slate-800"
        }
      `}
    >
      {/* Top */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          {/* Coin Logo */}

          <div
            className="
              h-10
              w-10
              overflow-hidden
              rounded-full
              bg-slate-700
              flex
              items-center
              justify-center
              shrink-0
            "
          >
            <img
              src={market.logo}
              alt={market.name}
              className="h-7 w-7 object-contain"
            />
          </div>

          {/* Coin Info */}

          <div>

            <h3 className="font-medium text-white">
              {market.symbol}
            </h3>

            <p className="text-xs text-slate-400">
              {market.name}
            </p>

          </div>

        </div>

        {/* Trend */}

        {isPositive ? (
          <TrendingUp
            size={18}
            className="text-emerald-400"
          />
        ) : (
          <TrendingDown
            size={18}
            className="text-red-400"
          />
        )}

      </div>

      {/* Bottom */}

      <div className="mt-3 flex items-end justify-between">

        <div>

          <p className="font-semibold text-white">
            $
            {market.price.toLocaleString()}
          </p>

          <p className="text-xs text-slate-500">
            {market.pair}
          </p>

        </div>

        <div className="text-right">

          <p
            className={`
              text-sm
              font-semibold

              ${
                isPositive
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            `}
          >
            {isPositive ? "+" : ""}
            {market.change24h}%
          </p>

          <p className="text-xs text-slate-500">
            Vol {market.volume24h}
          </p>

        </div>

      </div>

    </button>
  );
};

export default MarketCoinItem;