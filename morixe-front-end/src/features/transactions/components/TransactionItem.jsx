import {
  ArrowDownLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  ShoppingCart,
  TrendingDown,
  XCircle,
} from "lucide-react";

const typeIcons = {
  Deposit: ArrowDownLeft,
  Withdraw: ArrowUpRight,
  Buy: ShoppingCart,
  Sell: TrendingDown,
};

const statusStyles = {
  Completed: {
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  Pending: {
    icon: Clock3,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
  Failed: {
    icon: XCircle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
};

const TransactionItem = ({
  transaction,
  active = false,
  onSelect,
}) => {
  const Icon =
    typeIcons[transaction.type] ??
    ShoppingCart;

  const status =
    statusStyles[transaction.status];

  const StatusIcon =
    status.icon;

  return (
    <button
      type="button"
      onClick={() =>
        onSelect?.(transaction)
      }
      className={`
        w-full
        rounded-xl
        border
        p-4
        text-left
        transition
        ${
          active
            ? "border-blue-500 bg-slate-800"
            : "border-slate-800 bg-slate-900 hover:border-blue-500"
        }
      `}
    >
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
            <Icon
              size={20}
              className="text-white"
            />
          </div>

          <div>

            <h3 className="font-semibold text-white">
              {transaction.asset}
            </h3>

            <p className="text-sm text-slate-400">
              {transaction.type}
            </p>

          </div>

        </div>

        <div className="text-right">

          <p className="font-semibold text-white">
            {transaction.amount}
          </p>

          <p className="text-xs text-slate-500">
            {transaction.date}
          </p>

        </div>

      </div>

      <div className="mt-4 flex items-center justify-between">

        <span className="text-sm text-slate-400">
          {transaction.network}
        </span>

        <div
          className={`flex items-center gap-2 rounded-full px-3 py-1 ${status.bg}`}
        >
          <StatusIcon
            size={14}
            className={status.color}
          />

          <span
            className={`text-xs font-medium ${status.color}`}
          >
            {transaction.status}
          </span>

        </div>

      </div>
    </button>
  );
};

export default TransactionItem;