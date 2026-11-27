import useTrading from "./useTrading";

import {
  Card,
  SectionHeader,
} from "@/features/dashboard/components";

const TradingWidget = () => {
  const {
    assets,
    selectedAsset,
    amount,
    loading,

    setSelectedAsset,
    setAmount,

    buy,
    sell,
  } = useTrading();

  return (
    <Card>

      <SectionHeader
        title="Quick Trade"
        subtitle="Execute a trade"
      />

      <div className="space-y-5">

        <div>

          <label className="block mb-2 text-sm">
            Asset
          </label>

          <select
            value={selectedAsset}
            onChange={(e) =>
              setSelectedAsset(e.target.value)
            }
            className="
              w-full
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              px-4
              py-3
            "
          >
            {assets.map((asset) => (
              <option
                key={asset}
                value={asset}
              >
                {asset}
              </option>
            ))}
          </select>

        </div>

        <div>

          <label className="block mb-2 text-sm">
            Amount
          </label>

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
            placeholder="0.00"
            className="
              w-full
              rounded-xl
              bg-slate-800
              border
              border-slate-700
              px-4
              py-3
            "
          />

        </div>

        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={buy}
            disabled={loading}
            className="
              rounded-xl
              bg-green-600
              py-3
              font-medium
              hover:bg-green-500
            "
          >
            Buy
          </button>

          <button
            onClick={sell}
            disabled={loading}
            className="
              rounded-xl
              bg-red-600
              py-3
              font-medium
              hover:bg-red-500
            "
          >
            Sell
          </button>

        </div>

      </div>

    </Card>
  );
};

export default TradingWidget;