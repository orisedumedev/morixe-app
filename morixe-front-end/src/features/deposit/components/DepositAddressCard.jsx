import { Copy, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const DepositAddressCard = ({
  asset,
  network,
  address,
  minimumDeposit,
  confirmations,
}) => {
  const [copied, setCopied] =
    useState(false);

  const handleCopy = async () => {
    if (!address) return;

    try {
      await navigator.clipboard.writeText(
        address
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error(
        "Failed to copy address",
        error
      );
    }
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

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-xl font-semibold text-white">
          Deposit Address
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Send only{" "}
          <span className="font-medium text-white">
            {asset.symbol}
          </span>{" "}
          via the{" "}
          <span className="font-medium text-blue-400">
            {network}
          </span>{" "}
          network.
        </p>

      </div>

      {/* Content */}

      <div className="space-y-6 p-6">

        {/* Network */}

        <div>

          <p className="mb-2 text-sm text-slate-400">
            Network
          </p>

          <div
            className="
              rounded-xl
              bg-slate-800
              px-4
              py-3
              text-white
              font-medium
            "
          >
            {network}
          </div>

        </div>

        {/* Address */}

        <div>

          <p className="mb-2 text-sm text-slate-400">
            Deposit Address
          </p>

          <div
            className="
              flex
              items-center
              gap-3
              rounded-xl
              bg-slate-800
              p-4
            "
          >
            <p
              className="
                flex-1
                break-all
                text-sm
                text-white
              "
            >
              {address}
            </p>

            <button
              type="button"
              onClick={handleCopy}
              className="
                flex
                items-center
                gap-2
                rounded-lg
                bg-blue-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-blue-700
              "
            >
              {copied ? (
                <>
                  <CheckCircle2 size={18} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy
                </>
              )}
            </button>

          </div>

        </div>

        {/* Information */}

        <div
          className="
            grid
            gap-4
            md:grid-cols-2
          "
        >
          <div
            className="
              rounded-xl
              bg-slate-800
              p-4
            "
          >
            <p className="text-sm text-slate-400">
              Minimum Deposit
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {minimumDeposit}
            </p>
          </div>

          <div
            className="
              rounded-xl
              bg-slate-800
              p-4
            "
          >
            <p className="text-sm text-slate-400">
              Confirmations
            </p>

            <p className="mt-2 text-lg font-semibold text-white">
              {confirmations}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DepositAddressCard;