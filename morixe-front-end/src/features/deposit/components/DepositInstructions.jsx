import {
  AlertTriangle,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const DepositInstructions = ({
  asset,
  network,
  minimumDeposit,
  confirmations,
}) => {
  if (!asset) return null;

  return (
    <div
      className="
        rounded-2xl
        border
        border-amber-500/30
        bg-amber-500/5
      "
    >
      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-amber-500/20
          p-6
        "
      >
        <AlertTriangle
          size={24}
          className="text-amber-400"
        />

        <div>
          <h2 className="text-xl font-semibold text-white">
            Deposit Instructions
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Please read carefully before making a deposit.
          </p>
        </div>
      </div>

      {/* Instructions */}

      <div className="space-y-5 p-6">

        {/* Network */}

        <div className="flex items-start gap-3">

          <ShieldCheck
            size={20}
            className="mt-1 text-blue-400"
          />

          <div>
            <h3 className="font-medium text-white">
              Use the correct network
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Deposit{" "}
              <span className="font-medium text-white">
                {asset.symbol}
              </span>{" "}
              only through the{" "}
              <span className="font-medium text-blue-400">
                {network}
              </span>{" "}
              blockchain network.
              Deposits sent through any other
              network may be permanently lost.
            </p>
          </div>

        </div>

        {/* Minimum */}

        <div className="flex items-start gap-3">

          <CheckCircle2
            size={20}
            className="mt-1 text-emerald-400"
          />

          <div>
            <h3 className="font-medium text-white">
              Minimum Deposit
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Deposits below{" "}
              <span className="font-medium text-white">
                {minimumDeposit}
              </span>{" "}
              may not be credited to your account.
            </p>
          </div>

        </div>

        {/* Confirmations */}

        <div className="flex items-start gap-3">

          <Clock3
            size={20}
            className="mt-1 text-yellow-400"
          />

          <div>
            <h3 className="font-medium text-white">
              Blockchain Confirmations
            </h3>

            <p className="mt-1 text-sm leading-6 text-slate-400">
              Your deposit will become available
              after{" "}
              <span className="font-medium text-white">
                {confirmations}
              </span>{" "}
              network confirmations.
            </p>
          </div>

        </div>

        {/* Warning */}

        <div
          className="
            rounded-xl
            border
            border-red-500/30
            bg-red-500/10
            p-5
          "
        >
          <h3 className="font-semibold text-red-400">
            Important Warning
          </h3>

          <ul
            className="
              mt-3
              list-disc
              space-y-2
              pl-5
              text-sm
              leading-6
              text-slate-300
            "
          >
            <li>
              Only send{" "}
              <strong>{asset.symbol}</strong>{" "}
              to this deposit address.
            </li>

            <li>
              Depositing any unsupported asset
              may result in permanent loss of
              funds.
            </li>

            <li>
              Always verify the network before
              confirming the transaction.
            </li>

            <li>
              Blockchain transactions cannot be
              reversed after they are broadcast.
            </li>

            <li>
              Contact customer support if your
              deposit is not credited after the
              required confirmations.
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default DepositInstructions;