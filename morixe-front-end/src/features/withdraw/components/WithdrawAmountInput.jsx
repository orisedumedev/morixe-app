import { Coins } from "lucide-react";

const WithdrawAmountInput = ({
  asset,
  value,
  onChange,
  walletBalance,
  minimumWithdrawal,
}) => {
  const handleMax = () => {
    onChange?.(walletBalance.toString());
  };

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
          <Coins
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Withdrawal Amount
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Specify the amount you want to withdraw.
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-5 p-6">

        {/* Balance */}

        <div className="flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Available Balance
          </span>

          <span className="font-semibold text-emerald-400">
            {walletBalance} {asset.symbol}
          </span>

        </div>

        {/* Amount */}

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Amount
          </label>

          <div className="flex gap-3">

            <input
              type="number"
              min="0"
              step="any"
              value={value}
              onChange={(e) =>
                onChange?.(e.target.value)
              }
              placeholder="0.00"
              className="
                flex-1
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                focus:border-blue-500
                focus:outline-none
              "
            />

            <button
              type="button"
              onClick={handleMax}
              className="
                rounded-xl
                bg-blue-600
                px-5
                font-medium
                text-white
                transition
                hover:bg-blue-700
              "
            >
              MAX
            </button>

          </div>

        </div>

        {/* Minimum */}

        <div
          className="
            rounded-xl
            bg-slate-800
            p-4
          "
        >
          <div className="flex items-center justify-between">

            <span className="text-sm text-slate-400">
              Minimum Withdrawal
            </span>

            <span className="font-medium text-white">
              {minimumWithdrawal} {asset.symbol}
            </span>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WithdrawAmountInput;