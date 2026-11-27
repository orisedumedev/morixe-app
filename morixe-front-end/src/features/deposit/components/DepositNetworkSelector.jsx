import { CheckCircle2 } from "lucide-react";

const DepositNetworkSelector = ({
  asset,
  selectedNetwork,
  onSelectNetwork,
}) => {
  if (!asset) return null;

  // Supports both:
  // network: "Bitcoin"
  // networks: ["ERC20", "TRC20", "BEP20"]

  const networks = asset.networks
    ? asset.networks
    : [asset.network];

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
          Select Network
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Choose the blockchain network for your deposit.
        </p>

      </div>

      {/* Networks */}

      <div className="space-y-3 p-6">

        {networks.map((network) => {

          const active =
            selectedNetwork === network;

          return (
            <button
              key={network}
              type="button"
              onClick={() =>
                onSelectNetwork?.(network)
              }
              className={`
                w-full
                rounded-xl
                border
                p-4
                transition-all
                duration-200
                flex
                items-center
                justify-between

                ${
                  active
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-700 bg-slate-800 hover:border-slate-600 hover:bg-slate-700"
                }
              `}
            >
              <div>

                <h3 className="font-semibold text-white">
                  {network}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Deposit using the {network} network.
                </p>

              </div>

              {active && (
                <CheckCircle2
                  size={22}
                  className="text-blue-400"
                />
              )}

            </button>
          );

        })}

      </div>

    </div>
  );
};

export default DepositNetworkSelector;