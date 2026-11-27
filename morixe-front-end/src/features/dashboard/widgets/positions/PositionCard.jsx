import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const PositionCard = ({ position }) => {
  const pnl =
    (position.currentPrice -
      position.entryPrice) *
    position.quantity;

  const roi =
    ((position.currentPrice -
      position.entryPrice) /
      position.entryPrice) *
    100;

  const profit = pnl >= 0;

  return (
    <div
      className="
        rounded-xl
        border
        border-slate-800
        bg-slate-950
        p-5
      "
    >
      <div className="flex justify-between items-center mb-4">

        <div>

          <h3 className="text-lg font-semibold">
            {position.symbol}
          </h3>

          <p className="text-sm text-slate-400">
            {position.type}
          </p>

        </div>

        {profit ? (
          <TrendingUp
            className="text-emerald-400"
            size={22}
          />
        ) : (
          <TrendingDown
            className="text-red-400"
            size={22}
          />
        )}

      </div>

      <div className="space-y-2 text-sm">

        <div className="flex justify-between">
          <span className="text-slate-400">
            Quantity
          </span>

          <span>
            {position.quantity}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Entry
          </span>

          <span>
            $
            {position.entryPrice.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">
            Current
          </span>

          <span>
            $
            {position.currentPrice.toLocaleString()}
          </span>
        </div>

        <div className="border-t border-slate-800 my-3" />

        <div className="flex justify-between font-semibold">

          <span>P/L</span>

          <span
            className={
              profit
                ? "text-emerald-400"
                : "text-red-400"
            }
          >
            {profit ? "+" : "-"}$
            {Math.abs(pnl).toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between">

          <span>ROI</span>

          <span
            className={
              profit
                ? "text-emerald-400"
                : "text-red-400"
            }
          >
            {profit ? "+" : ""}
            {roi.toFixed(2)}%
          </span>

        </div>

      </div>
    </div>
  );
};

export default PositionCard;