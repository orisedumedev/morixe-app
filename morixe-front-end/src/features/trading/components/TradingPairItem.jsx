import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const TradingPairItem = ({
  pair,
  active = false,
  onSelect,
}) => {
  const positive =
    pair.change24h >= 0;

  return (
    <button
      type="button"
      onClick={() =>
        onSelect(pair)
      }
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
            ? "border-blue-500 bg-slate-800"
            : "border-transparent hover:border-slate-700 hover:bg-slate-800"
        }
      `}
    >
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
            "
          >
            <img
              src={pair.logo}
              alt={pair.baseAsset}
              className="h-7 w-7 object-contain"
            />
          </div>

          <div>

            <h3 className="font-medium text-white">
              {pair.symbol}
            </h3>

            <p className="text-xs text-slate-400">
              {pair.name}
            </p>

          </div>

        </div>

        {positive ? (
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

      <div className="mt-3 flex items-center justify-between">

        <div>

          <p className="text-white font-medium">
            $
            {pair.price.toLocaleString()}
          </p>

          <p className="text-xs text-slate-500">
            Vol {pair.volume24h}
          </p>

        </div>

        <span
          className={`
            text-sm
            font-semibold

            ${
              positive
                ? "text-emerald-400"
                : "text-red-400"
            }
          `}
        >
          {positive ? "+" : ""}
          {pair.change24h}%
        </span>

      </div>

    </button>
  );
};

export default TradingPairItem;