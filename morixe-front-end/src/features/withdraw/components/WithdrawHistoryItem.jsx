import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  XCircle,
} from "lucide-react";

const statusStyles = {
  Completed: {
    icon: CheckCircle2,
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },

  Pending: {
    icon: Clock3,
    text: "text-amber-400",
    bg: "bg-amber-500/10",
  },

  Failed: {
    icon: XCircle,
    text: "text-red-400",
    bg: "bg-red-500/10",
  },
};

const WithdrawHistoryItem = ({
  withdrawal,
}) => {
  const {
    asset,
    amount,
    network,
    address,
    fee,
    status,
    txId,
    date,
  } = withdrawal;

  const config =
    statusStyles[status] ??
    statusStyles.Pending;

  const StatusIcon =
    config.icon;

  return (
    <div
      className="
        rounded-xl
        border
        border-slate-800
        bg-slate-900
        p-5
      "
    >
      {/* Top */}

      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-blue-600
            "
          >
            <ArrowUpRight
              size={22}
              className="text-white"
            />
          </div>

          <div>

            <h3 className="font-semibold text-white">
              {asset}
            </h3>

            <p className="text-sm text-slate-400">
              {date}
            </p>

          </div>

        </div>

        <div
          className={`
            flex
            items-center
            gap-2
            rounded-full
            px-3
            py-1
            ${config.bg}
          `}
        >
          <StatusIcon
            size={16}
            className={config.text}
          />

          <span
            className={`text-sm font-medium ${config.text}`}
          >
            {status}
          </span>

        </div>

      </div>

      {/* Details */}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>

          <p className="text-xs text-slate-500">
            Amount
          </p>

          <p className="mt-1 font-medium text-white">
            {amount}
          </p>

        </div>

        <div>

          <p className="text-xs text-slate-500">
            Network
          </p>

          <p className="mt-1 font-medium text-white">
            {network}
          </p>

        </div>

        <div>

          <p className="text-xs text-slate-500">
            Network Fee
          </p>

          <p className="mt-1 font-medium text-white">
            {fee}
          </p>

        </div>

        <div>

          <p className="text-xs text-slate-500">
            Transaction ID
          </p>

          <p
            className="
              mt-1
              truncate
              font-medium
              text-blue-400
            "
          >
            {txId}
          </p>

        </div>

      </div>

      {/* Address */}

      <div className="mt-5">

        <p className="text-xs text-slate-500">
          Destination Address
        </p>

        <div
          className="
            mt-2
            rounded-lg
            bg-slate-800
            p-3
            break-all
            text-sm
            text-white
          "
        >
          {address}
        </div>

      </div>

    </div>
  );
};

export default WithdrawHistoryItem;