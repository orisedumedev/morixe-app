import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const WatchlistItem = ({
  asset,
}) => {
  const positive =
    asset.change24h >= 0;

  return (
    <div
      className="
        flex
        items-center
        justify-between
        py-3
        border-b
        border-slate-800
        last:border-none
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
          $
          {asset.price.toLocaleString()}
        </p>

        <div
          className={`
            flex
            items-center
            justify-end
            gap-1
            text-sm
            ${
              positive
                ? "text-emerald-400"
                : "text-red-400"
            }
          `}
        >

          {positive ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}

          {Math.abs(
            asset.change24h
          ).toFixed(2)}
          %

        </div>

      </div>

    </div>
  );
};

export default WatchlistItem;