import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const MarketTicker = ({ asset }) => {
  const positive = asset.change >= 0;

  return (
    <div
      className="
        flex
        justify-between
        items-center
        rounded-xl
        border
        border-slate-800
        bg-slate-950
        p-4
      "
    >
      <div>

        <h3 className="font-semibold">
          {asset.symbol}
        </h3>

        <p className="text-sm text-slate-400">
          {asset.name}
        </p>

      </div>

      <div className="text-right">

        <p className="font-semibold">
          ${asset.price.toLocaleString()}
        </p>

        <p className="text-xs text-slate-400">
          Vol {asset.volume}
        </p>

      </div>

      <div
        className={`
          flex
          items-center
          gap-1
          ${
            positive
              ? "text-emerald-400"
              : "text-red-400"
          }
        `}
      >
        {positive ? (
          <TrendingUp size={18} />
        ) : (
          <TrendingDown size={18} />
        )}

        <span>
          {positive ? "+" : ""}
          {asset.change.toFixed(2)}%
        </span>
      </div>
    </div>
  );
};

export default MarketTicker;