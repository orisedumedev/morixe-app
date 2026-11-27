import {
  ArrowDownToLine,
  ArrowUpFromLine,
  ArrowRightLeft,
  QrCode,
} from "lucide-react";

const ACTIONS = [
  {
    id: "deposit",
    label: "Deposit",
    icon: ArrowDownToLine,
    color:
      "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  },
  {
    id: "withdraw",
    label: "Withdraw",
    icon: ArrowUpFromLine,
    color:
      "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    id: "transfer",
    label: "Transfer",
    icon: ArrowRightLeft,
    color:
      "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    id: "receive",
    label: "Receive",
    icon: QrCode,
    color:
      "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
];

const DepositWithdrawCard = ({
  onDeposit,
  onWithdraw,
  onTransfer,
  onReceive,
}) => {
  const handlers = {
    deposit: onDeposit,
    withdraw: onWithdraw,
    transfer: onTransfer,
    receive: onReceive,
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      {/* Header */}

      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Wallet Actions
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Manage your cryptocurrency assets.
        </p>
      </div>

      {/* Action Grid */}

      <div className="grid grid-cols-2 gap-4">
        {ACTIONS.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              type="button"
              onClick={() =>
                handlers[action.id]?.()
              }
              className="
                group
                rounded-xl
                border
                border-slate-700
                bg-slate-800
                p-5
                transition-all
                duration-200
                hover:border-blue-500
                hover:bg-slate-700
              "
            >
              <div
                className={`
                  mx-auto
                  mb-4
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  border
                  ${action.color}
                `}
              >
                <Icon size={22} />
              </div>

              <h3 className="font-medium text-white">
                {action.label}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {action.id === "deposit" &&
                  "Add funds to your wallet"}

                {action.id === "withdraw" &&
                  "Send crypto to another wallet"}

                {action.id === "transfer" &&
                  "Move assets between accounts"}

                {action.id === "receive" &&
                  "Display your wallet address"}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DepositWithdrawCard;