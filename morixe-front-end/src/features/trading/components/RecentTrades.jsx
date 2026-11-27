import {
  ArrowUpRight,
  ArrowDownRight,
  Clock,
} from "lucide-react";

const formatPrice = (price) =>
  Number(price).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

const formatAmount = (amount) =>
  Number(amount).toFixed(4);

const TradeRow = ({ trade }) => {
  const isBuy = trade.side === "BUY";

  return (
    <div
      className="
        grid
        grid-cols-3
        gap-2
        items-center
        py-3
        px-3
        rounded-lg
        hover:bg-slate-800/50
        transition
      "
    >
      <div
        className={`
          flex
          items-center
          gap-1
          font-medium
          ${
            isBuy
              ? "text-emerald-400"
              : "text-red-400"
          }
        `}
      >
        {isBuy ? (
          <ArrowUpRight size={15} />
        ) : (
          <ArrowDownRight size={15} />
        )}

        ${formatPrice(trade.price)}
      </div>

      <div className="text-right text-slate-300">
        {formatAmount(trade.amount)}
      </div>

      <div
        className="
          flex
          justify-end
          items-center
          gap-1
          text-slate-500
          text-sm
        "
      >
        <Clock size={14} />
        {trade.time}
      </div>
    </div>
  );
};

const RecentTrades = ({
  trades = [],
}) => {
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
      {/* Header */}

      <div className="mb-5">

        <h2 className="text-xl font-semibold text-white">
          Recent Trades
        </h2>

        <p className="text-sm text-slate-400">
          Latest executed market trades
        </p>

      </div>

      {/* Column Header */}

      <div
        className="
          grid
          grid-cols-3
          gap-2
          text-xs
          uppercase
          tracking-wide
          text-slate-500
          border-b
          border-slate-800
          pb-2
          mb-2
        "
      >
        <div>Price</div>

        <div className="text-right">
          Amount
        </div>

        <div className="text-right">
          Time
        </div>

      </div>

      {/* Trade List */}

      <div className="space-y-1">

        {trades.length > 0 ? (
          trades.map((trade) => (
            <TradeRow
              key={trade.id}
              trade={trade}
            />
          ))
        ) : (
          <div className="py-10 text-center text-slate-500">
            No recent trades available.
          </div>
        )}

      </div>
    </div>
  );
};

export default RecentTrades;