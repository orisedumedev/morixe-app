import {
  ArrowDownLeft,
  ArrowUpRight,
  ShoppingCart,
  TrendingDown,
} from "lucide-react";

const icons = {
  Deposit: ArrowDownLeft,
  Withdraw: ArrowUpRight,
  Buy: ShoppingCart,
  Sell: TrendingDown,
};

const statusClasses = {
  Completed:
    "bg-emerald-500/10 text-emerald-400",

  Pending:
    "bg-amber-500/10 text-amber-400",

  Failed:
    "bg-red-500/10 text-red-400",
};

const TransactionTableRow = ({
  transaction,
}) => {
  const Icon =
    icons[transaction.type] ??
    ShoppingCart;

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
              rounded-xl
              bg-blue-600
            "
          >
            <Icon
              size={18}
              className="text-white"
            />
          </div>

          <span className="font-medium text-white">
            {transaction.asset}
          </span>

        </div>

      </td>

      {/* Type */}

      <td className="px-6 py-4 text-slate-300">
        {transaction.type}
      </td>

      {/* Amount */}

      <td className="px-6 py-4 font-medium text-white">
        {transaction.amount}
      </td>

      {/* Network */}

      <td className="px-6 py-4 text-slate-400">
        {transaction.network}
      </td>

      {/* Status */}

      <td className="px-6 py-4">

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
            ${
              statusClasses[
                transaction.status
              ]
            }
          `}
        >
          {transaction.status}
        </span>

      </td>

      {/* Date */}

      <td className="px-6 py-4 whitespace-nowrap text-slate-400">
        {transaction.date}
      </td>

      {/* Transaction ID */}

      <td
        className="
          max-w-[220px]
          truncate
          px-6
          py-4
          text-slate-500
        "
      >
        {transaction.txId}
      </td>

    </tr>
  );
};

export default TransactionTableRow;