import {
  ArrowDownLeft,
  ArrowUpRight,
  Wallet,
} from "lucide-react";

const TransactionItem = ({ transaction }) => {
  const icon =
    transaction.type === "Buy" ? (
      <ArrowDownLeft
        className="text-emerald-400"
        size={18}
      />
    ) : transaction.type === "Sell" ? (
      <ArrowUpRight
        className="text-red-400"
        size={18}
      />
    ) : (
      <Wallet
        className="text-blue-400"
        size={18}
      />
    );

  return (
    <div
      className="
        flex
        justify-between
        items-center
        py-4
        border-b
        border-slate-800
        last:border-none
      "
    >
      <div className="flex items-center gap-3">

        {icon}

        <div>

          <h3 className="font-semibold">
            {transaction.type}
          </h3>

          <p className="text-sm text-slate-400">
            {transaction.asset}
          </p>

        </div>

      </div>

      <div className="text-right">

        <p className="font-medium">
          {transaction.amount}
        </p>

        <p className="text-sm text-slate-400">
          ${transaction.price.toLocaleString()}
        </p>

      </div>

      <div className="text-right">

        <span
          className={`
            text-xs
            px-2
            py-1
            rounded-full
            ${
              transaction.status ===
              "Completed"
                ? "bg-emerald-500/20 text-emerald-400"
                : "bg-yellow-500/20 text-yellow-400"
            }
          `}
        >
          {transaction.status}
        </span>

        <p className="text-xs text-slate-500 mt-1">
          {transaction.date}
        </p>

      </div>
    </div>
  );
};

export default TransactionItem;