import {
  Network,
  CheckCircle2,
} from "lucide-react";

const WithdrawNetworkSelector = ({
  asset,
  value,
  onChange,
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
            bg-blue-600
          "
        >
          <Network
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Select Network
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Choose the blockchain network for
            your withdrawal.
          </p>

        </div>

      </div>

      {/* Networks */}

      <div className="space-y-3 p-6">

        {asset.networks.map(
          (network) => {
            const active =
              value === network;

            return (
              <button
                key={network}
                type="button"
                onClick={() =>
                  onChange?.(network)
                }
                className={`
                  w-full
                  rounded-xl
                  border
                  p-5
                  transition-all
                  duration-200

                  ${
                    active
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600 hover:bg-slate-700"
                  }
                `}
              >
                <div className="flex items-center justify-between">

                  {/* Left */}

                  <div className="text-left">

                    <h3 className="font-semibold text-white">
                      {network}
                    </h3>

                    <p className="mt-1 text-sm text-slate-400">
                      Withdraw using the{" "}
                      {network} blockchain.
                    </p>

                  </div>

                  {/* Right */}

                  {active && (
                    <CheckCircle2
                      size={22}
                      className="text-blue-400"
                    />
                  )}

                </div>

                {/* Network Details */}

                <div
                  className="
                    mt-5
                    grid
                    grid-cols-2
                    gap-4
                  "
                >
                  <div
                    className="
                      rounded-lg
                      bg-slate-900
                      p-3
                    "
                  >
                    <p className="text-xs text-slate-500">
                      Fee
                    </p>

                    <p className="mt-1 font-medium text-white">
                      {
                        asset.withdrawalFee[
                          network
                        ]
                      }{" "}
                      {asset.symbol}
                    </p>
                  </div>

                  <div
                    className="
                      rounded-lg
                      bg-slate-900
                      p-3
                    "
                  >
                    <p className="text-xs text-slate-500">
                      Minimum
                    </p>

                    <p className="mt-1 font-medium text-white">
                      {
                        asset.minimumWithdrawal[
                          network
                        ]
                      }{" "}
                      {asset.symbol}
                    </p>
                  </div>

                </div>

              </button>
            );
          }
        )}

      </div>

    </div>
  );
};

export default WithdrawNetworkSelector;