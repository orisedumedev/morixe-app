import {
  ArrowUpRight,
  ArrowDownRight,
  Star,
} from "lucide-react";

const MarketRow = ({
  market,
}) => {
  const positive =
    market.change24h >= 0;

  return (
    <tr
      className="
        border-b
        border-slate-800
        hover:bg-slate-800/40
        transition-colors
      "
    >
      <td className="py-4 px-4">

        <button
          type="button"
          className="
            text-slate-500
            hover:text-yellow-400
            transition
          "
        >
          <Star size={18} />
        </button>

      </td>

      <td className="py-4 px-4">

        <div>

          <h4 className="font-semibold text-white">
            {market.symbol}
          </h4>

          <p className="text-sm text-slate-400">
            {market.name}
          </p>

        </div>

      </td>

      <td className="py-4 px-4 text-right font-medium">
        $
        {market.price.toLocaleString()}
      </td>

      <td
        className={`
          py-4
          px-4
          text-right
          font-semibold
          ${
            positive
              ? "text-emerald-400"
              : "text-red-400"
          }
        `}
      >
        <div className="flex justify-end items-center gap-1">

          {positive ? (
            <ArrowUpRight size={16} />
          ) : (
            <ArrowDownRight size={16} />
          )}

          {positive ? "+" : ""}
          {market.change24h.toFixed(2)}%

        </div>
      </td>

      <td className="py-4 px-4 text-right">
        {market.volume24h}
      </td>

      <td className="py-4 px-4 text-right">
        {market.marketCap}
      </td>

      <td className="py-4 px-4 text-center">

        <button
          type="button"
          className="
            rounded-lg
            bg-blue-600
            hover:bg-blue-700
            px-4
            py-2
            text-sm
            font-medium
            transition
          "
        >
          Trade
        </button>

      </td>

    </tr>
  );
};

export default MarketRow;