import {
  CheckCircle2,
  Clock3,
  XCircle,
  ExternalLink,
} from "lucide-react";

const STATUS = {
  Completed: {
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    icon: CheckCircle2,
  },

  Pending: {
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    icon: Clock3,
  },

  Failed: {
    color: "text-red-400",
    bg: "bg-red-500/10",
    icon: XCircle,
  },
};

const DepositHistoryItem = ({
  transaction,
}) => {
  const status =
    STATUS[transaction.status] ??
    STATUS.Pending;

  const Icon = status.icon;

  return (
    <div
      className="
        rounded-xl
        border
        border-slate-800
        bg-slate-900
        p-5
        transition
        hover:border-slate-700
      "
    >
      <div className="flex items-start justify-between gap-4">

        {/* Left */}

        <div className="space-y-3">

          <div>

            <h3 className="font-semibold text-white">
              {transaction.asset}
            </h3>

            <p className="text-sm text-slate-400">
              {transaction.amount}
            </p>

          </div>

          <div className="flex flex-wrap gap-2">

            <span
              className="
                rounded-full
                bg-slate-800
                px-3
                py-1
                text-xs
                text-slate-300
              "
            >
              {transaction.network}
            </span>

            <span
              className={`
                inline-flex
                items-center
                gap-1
                rounded-full
                px-3
                py-1
                text-xs

                ${status.bg}
                ${status.color}
              `}
            >
              <Icon size={14} />

              {transaction.status}
            </span>

          </div>

        </div>

        {/* Right */}

        <div className="text-right">

          <p className="text-sm text-slate-400">
            {transaction.date}
          </p>

          <button
            type="button"
            className="
              mt-3
              inline-flex
              items-center
              gap-1
              text-sm
              text-blue-400
              hover:text-blue-300
            "
          >
            <ExternalLink size={15} />

            View TX
          </button>

        </div>

      </div>

      {/* TX ID */}

      <div
        className="
          mt-5
          rounded-lg
          bg-slate-800
          p-3
        "
      >
        <p className="text-xs text-slate-500">
          Transaction ID
        </p>

        <p
          className="
            mt-1
            break-all
            text-sm
            text-slate-300
          "
        >
          {transaction.txId}
        </p>

      </div>

    </div>
  );
};

export default DepositHistoryItem;