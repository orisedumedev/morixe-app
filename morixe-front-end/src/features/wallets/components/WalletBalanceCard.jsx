import { Wallet } from "lucide-react";

const WalletBalanceCard = ({
  balance = 0,
  available = 0,
}) => {
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
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            Total Balance
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            ${balance.toLocaleString()}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            Available: $
            {available.toLocaleString()}
          </p>

        </div>

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-blue-600
          "
        >
          <Wallet
            size={28}
            className="text-white"
          />
        </div>

      </div>
    </div>
  );
};

export default WalletBalanceCard;