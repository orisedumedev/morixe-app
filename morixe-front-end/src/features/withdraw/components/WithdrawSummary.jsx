import {
  ArrowRight,
  Wallet,
  Network,
  Coins,
  MapPin,
  CheckCircle2,
} from "lucide-react";

const WithdrawSummary = ({
  asset,
  network,
  address,
  amount,
  withdrawalFee,
  receiveAmount,
  totalDeducted,
}) => {
  if (!asset) return null;

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-slate-800
          p-6
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-emerald-600
          "
        >
          <CheckCircle2
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Withdrawal Summary
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Review your withdrawal details
            before submitting.
          </p>

        </div>

      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        {/* Asset */}

        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 text-slate-400">

            <Coins size={16} />

            Asset

          </span>

          <span className="font-medium text-white">
            {asset.symbol}
          </span>

        </div>

        {/* Network */}

        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 text-slate-400">

            <Network size={16} />

            Network

          </span>

          <span className="font-medium text-white">
            {network}
          </span>

        </div>

        {/* Address */}

        <div className="space-y-2">

          <span className="flex items-center gap-2 text-slate-400">

            <MapPin size={16} />

            Destination Address

          </span>

          <div
            className="
              rounded-xl
              bg-slate-800
              p-3
              break-all
              text-sm
              text-white
            "
          >
            {address || "Not entered"}
          </div>

        </div>

        <div className="border-t border-slate-800" />

        {/* Amount */}

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Withdrawal Amount
          </span>

          <span className="font-semibold text-white">
            {amount || 0} {asset.symbol}
          </span>

        </div>

        {/* Fee */}

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Network Fee
          </span>

          <span className="font-semibold text-amber-400">
            {withdrawalFee} {asset.symbol}
          </span>

        </div>

        {/* Total */}

        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 text-slate-400">

            <Wallet size={16} />

            Total Deducted

          </span>

          <span className="font-semibold text-red-400">
            {totalDeducted} {asset.symbol}
          </span>

        </div>

        {/* Arrow */}

        <div className="flex justify-center">

          <ArrowRight
            size={24}
            className="text-slate-500"
          />

        </div>

        {/* Receive */}

        <div
          className="
            rounded-xl
            border
            border-emerald-500/20
            bg-emerald-500/10
            p-5
          "
        >
          <div className="flex items-center justify-between">

            <span className="font-medium text-emerald-400">
              Recipient Receives
            </span>

            <span className="text-xl font-bold text-emerald-400">
              {receiveAmount} {asset.symbol}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WithdrawSummary;