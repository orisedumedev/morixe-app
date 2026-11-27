import {
  TrendingDown,
  TrendingUp,
} from "lucide-react";

const PortfolioAssetItem = ({
  asset,
}) => {
  const positive = asset.pnl >= 0;

  return (
    <tr
      className="
        border-t
        border-slate-800
        transition
        hover:bg-slate-800/50
      "
    >
      {/* Asset */}

      <td className="px-6 py-4">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-blue-600
              text-sm
              font-bold
              text-white
            "
          >
            {asset.symbol.charAt(0)}
          </div>

          <div>

            <h3 className="font-medium text-white">
              {asset.symbol}
            </h3>

            <p className="text-sm text-slate-400">
              {asset.name}
            </p>

          </div>

        </div>

      </td>

      {/* Holdings */}

      <td className="px-6 py-4 text-white">
        {asset.holdings}
      </td>

      {/* Price */}

      <td className="px-6 py-4 text-white">
        $
        {asset.price.toLocaleString()}
      </td>

      {/* Value */}

      <td className="px-6 py-4 font-medium text-white">
        $
        {asset.value.toLocaleString()}
      </td>

      {/* Allocation */}

      <td className="px-6 py-4">

        <div className="flex items-center gap-3">

          <div className="h-2 w-28 rounded-full bg-slate-700">

            <div
              className="h-2 rounded-full bg-blue-500"
              style={{
                width: `${asset.allocation}%`,
              }}
            />

          </div>

          <span className="text-slate-300">
            {asset.allocation}%
          </span>

        </div>

      </td>

      {/* Profit */}

      <td className="px-6 py-4">

        <div
          className={`flex items-center gap-2 ${
            positive
              ? "text-emerald-400"
              : "text-red-400"
          }`}
        >
          {positive ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}

          {positive ? "+" : ""}
          {asset.pnl}%

        </div>

      </td>

    </tr>
  );
};

export default PortfolioAssetItem;