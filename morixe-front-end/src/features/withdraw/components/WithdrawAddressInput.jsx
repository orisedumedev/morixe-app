import { Wallet } from "lucide-react";

const WithdrawAddressInput = ({
  value,
  onChange,
}) => {
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
          <Wallet
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Withdrawal Address
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Enter the destination wallet address.
          </p>

        </div>

      </div>

      {/* Input */}

      <div className="p-6">

        <label className="mb-2 block text-sm text-slate-400">
          Wallet Address
        </label>

        <textarea
          rows={4}
          value={value}
          onChange={(e) =>
            onChange?.(e.target.value)
          }
          placeholder="Paste destination wallet address..."
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-4
            py-3
            text-white
            placeholder:text-slate-500
            resize-none
            focus:border-blue-500
            focus:outline-none
          "
        />

      </div>

    </div>
  );
};

export default WithdrawAddressInput;