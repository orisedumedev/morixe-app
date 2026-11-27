import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowRightLeft,
  ShoppingCart,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const typeConfig = {
  Deposit: {
    icon: ArrowDownToLine,
    color: "text-emerald-400 bg-emerald-500/10",
  },
  Withdraw: {
    icon: ArrowUpFromLine,
    color: "text-red-400 bg-red-500/10",
  },
  Buy: {
    icon: ShoppingCart,
    color: "text-blue-400 bg-blue-500/10",
  },
  Sell: {
    icon: ShoppingCart,
    color: "text-orange-400 bg-orange-500/10",
  },
  Transfer: {
    icon: ArrowRightLeft,
    color: "text-purple-400 bg-purple-500/10",
  },
};

const statusConfig = {
  Completed: {
    icon: CheckCircle2,
    color: "text-emerald-400",
  },
  Pending: {
    icon: Clock3,
    color: "text-yellow-400",
  },
  Failed: {
    icon: XCircle,
    color: "text-red-400",
  },
};

const WalletTransactionItem = ({
  transaction,
}) => {
  const type =
    typeConfig[transaction.type] ||
    typeConfig.Transfer;

  const status =
    statusConfig[
      transaction.status
    ] || statusConfig.Pending;

  const TypeIcon = type.icon;
  const StatusIcon = status.icon;

  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-xl
        border
        border-slate-800
        bg-slate-900
        p-4
        transition
        hover:bg-slate-800
      "
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            ${type.color}
          `}
        >
          <TypeIcon size={22} />
        </div>

        <div>

          <h3 className="font-semibold text-white">
            {transaction.type}
          </h3>

          <p className="text-sm text-slate-400">
            {transaction.asset}
          </p>

          <p className="text-xs text-slate-500">
            {transaction.date}
          </p>

        </div>

      </div>

      {/* Right */}

      <div className="text-right">

        <p className="font-semibold text-white">
          {transaction.amount}
        </p>

        <div
          className={`
            mt-2
            flex
            items-center
            justify-end
            gap-1
            text-sm
            ${status.color}
          `}
        >
          <StatusIcon size={15} />

          {transaction.status}

        </div>

      </div>

    </div>
  );
};

export default WalletTransactionItem;