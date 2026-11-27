import {
  AlertTriangle,
  ShieldCheck,
  Network,
  Coins,
  Clock3,
  Wallet,
} from "lucide-react";

const WithdrawInstructions = ({
  asset,
  network,
  minimumWithdrawal,
  withdrawalFee,
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
            bg-amber-500
          "
        >
          <AlertTriangle
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Withdrawal Instructions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Please read carefully before submitting
            your withdrawal.
          </p>

        </div>

      </div>

      {/* Instructions */}

      <div className="space-y-4 p-6">

        <div className="flex items-start gap-3">

          <ShieldCheck
            size={18}
            className="mt-1 text-emerald-400"
          />

          <p className="text-sm leading-6 text-slate-300">
            Double-check the wallet address.
            Cryptocurrency withdrawals cannot
            be reversed once confirmed.
          </p>

        </div>

        <div className="flex items-start gap-3">

          <Network
            size={18}
            className="mt-1 text-blue-400"
          />

          <p className="text-sm leading-6 text-slate-300">
            Ensure the destination wallet
            supports the{" "}
            <span className="font-semibold text-white">
              {network}
            </span>{" "}
            network.
          </p>

        </div>

        <div className="flex items-start gap-3">

          <Coins
            size={18}
            className="mt-1 text-yellow-400"
          />

          <p className="text-sm leading-6 text-slate-300">
            Minimum withdrawal is{" "}
            <span className="font-semibold text-white">
              {minimumWithdrawal}{" "}
              {asset.symbol}
            </span>
            .
          </p>

        </div>

        <div className="flex items-start gap-3">

          <Wallet
            size={18}
            className="mt-1 text-violet-400"
          />

          <p className="text-sm leading-6 text-slate-300">
            Network fee for this withdrawal is{" "}
            <span className="font-semibold text-white">
              {withdrawalFee} {asset.symbol}
            </span>
            .
          </p>

        </div>

        <div className="flex items-start gap-3">

          <Clock3
            size={18}
            className="mt-1 text-cyan-400"
          />

          <p className="text-sm leading-6 text-slate-300">
            Withdrawals are usually processed
            within a few minutes but may take
            longer depending on blockchain
            congestion and network confirmations.
          </p>

        </div>

        {/* Warning */}

        <div
          className="
            rounded-xl
            border
            border-red-500/20
            bg-red-500/10
            p-4
          "
        >
          <div className="flex gap-3">

            <AlertTriangle
              size={20}
              className="
                mt-0.5
                shrink-0
                text-red-400
              "
            />

            <div>

              <h3 className="font-medium text-red-400">
                Important
              </h3>

              <p className="mt-1 text-sm leading-6 text-red-200">
                Sending{" "}
                <strong>{asset.symbol}</strong>{" "}
                to an unsupported network or an
                incorrect address may permanently
                result in the loss of your funds.
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WithdrawInstructions;