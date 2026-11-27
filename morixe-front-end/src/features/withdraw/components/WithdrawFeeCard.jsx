import {
  Wallet,
  ArrowDown,
  ArrowRightLeft,
  CheckCircle2,
} from "lucide-react";

const WithdrawFeeCard = ({
  asset,
  walletBalance,
  amount,
  withdrawalFee,
  receiveAmount,
}) => {
  if (!asset) return null;

  const withdrawalAmount =
    Number(amount) || 0;

  const totalDeducted =
    withdrawalAmount;

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
            bg-violet-600
          "
        >
          <Wallet
            size={20}
            className="text-white"
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white">
            Withdrawal Summary
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Review the withdrawal fee and
            the amount the recipient will
            receive.
          </p>
        </div>

      </div>

      {/* Content */}

      <div className="space-y-4 p-6">

        {/* Wallet Balance */}

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Wallet Balance
          </span>

          <span className="font-semibold text-white">
            {walletBalance} {asset.symbol}
          </span>

        </div>

        {/* Withdrawal Amount */}

        <div className="flex items-center justify-between">

          <span className="text-slate-400">
            Withdrawal Amount
          </span>

          <span className="font-semibold text-white">
            {withdrawalAmount} {asset.symbol}
          </span>

        </div>

        {/* Network Fee */}

        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 text-slate-400">

            <ArrowRightLeft size={16} />

            Network Fee

          </span>

          <span className="font-semibold text-amber-400">
            {withdrawalFee} {asset.symbol}
          </span>

        </div>

        {/* Divider */}

        <div className="border-t border-slate-800" />

        {/* Total Deducted */}

        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 text-slate-400">

            <ArrowDown size={16} />

            Total Deducted

          </span>

          <span className="font-semibold text-red-400">
            {totalDeducted} {asset.symbol}
          </span>

        </div>

        {/* Recipient Receives */}

        <div
          className="
            rounded-xl
            bg-emerald-500/10
            border
            border-emerald-500/20
            p-5
          "
        >
          <div className="flex items-center justify-between">

            <span className="flex items-center gap-2 text-emerald-400">

              <CheckCircle2 size={18} />

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

export default WithdrawFeeCard;