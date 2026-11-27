import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const WalletAssetItem = ({
  asset,
  active = false,
  onSelect,
}) => {
  const positive =
    asset.change24h >= 0;

  return (
    <button
      type="button"
      onClick={() => onSelect?.(asset)}
      className={`
        w-full
        rounded-xl
        border
        p-4
        transition
        text-left

        ${
          active
            ? "border-blue-500 bg-slate-800"
            : "border-slate-800 bg-slate-900 hover:bg-slate-800"
        }
      `}
    >
      <div className="flex items-center justify-between">

        {/* Coin */}

        <div className="flex items-center gap-4">

          <img
            src={asset.logo}
            alt={asset.symbol}
            className="h-10 w-10 rounded-full"
          />

          <div>

            <h3 className="font-semibold text-white">
              {asset.symbol}
            </h3>

            <p className="text-sm text-slate-400">
              {asset.name}
            </p>

          </div>

        </div>

        {/* Change */}

        <div
          className={`
            flex items-center gap-1 text-sm font-medium

            ${
              positive
                ? "text-emerald-400"
                : "text-red-400"
            }
          `}
        >
          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {positive ? "+" : ""}
          {asset.change24h}%
        </div>

      </div>

      <div className="mt-5 grid grid-cols-3 gap-4">

        <div>

          <p className="text-xs text-slate-500">
            Amount
          </p>

          <p className="mt-1 font-medium text-white">
            {asset.amount}
          </p>

        </div>

        <div>

          <p className="text-xs text-slate-500">
            Value
          </p>

          <p className="mt-1 font-medium text-white">
            $
            {asset.value.toLocaleString()}
          </p>

        </div>

        <div>

          <p className="text-xs text-slate-500">
            Allocation
          </p>

          <p className="mt-1 font-medium text-white">
            {asset.allocation}%
          </p>

        </div>

      </div>
    </button>
  );
};

export default WalletAssetItem;