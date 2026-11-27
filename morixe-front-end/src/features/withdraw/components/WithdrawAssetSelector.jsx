import { Search, ChevronDown } from "lucide-react";

const WithdrawAssetSelector = ({
  assets = [],
  value,
  onChange,
  search,
  onSearchChange,
}) => {
  const handleSelect = (e) => {
    const asset = assets.find(
      (item) =>
        item.symbol === e.target.value
    );

    if (asset) {
      onChange?.(asset);
    }
  };

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
          Select Asset
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Choose the cryptocurrency you want to withdraw.
        </p>

      </div>

      {/* Body */}

      <div className="space-y-6 p-6">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange?.(
                e.target.value
              )
            }
            placeholder="Search asset..."
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              py-3
              pl-11
              pr-4
              text-white
              placeholder:text-slate-500
              focus:border-blue-500
              focus:outline-none
            "
          />

        </div>

        {/* Asset Select */}

        <div className="relative">

          <select
            value={value?.symbol ?? ""}
            onChange={handleSelect}
            className="
              w-full
              appearance-none
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              px-4
              py-3
              text-white
              focus:border-blue-500
              focus:outline-none
            "
          >
            {assets.map((asset) => (
              <option
                key={asset.id}
                value={asset.symbol}
              >
                {asset.symbol} — {asset.name}
              </option>
            ))}
          </select>

          <ChevronDown
            size={18}
            className="
              pointer-events-none
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

        </div>

        {/* Selected Asset */}

        {value && (
          <div
            className="
              rounded-xl
              bg-slate-800
              p-5
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <h3 className="text-lg font-semibold text-white">
                  {value.name}
                </h3>

                <p className="text-slate-400">
                  {value.symbol}
                </p>

              </div>

              <div className="text-right">

                <p className="text-sm text-slate-400">
                  Wallet Balance
                </p>

                <p className="font-semibold text-emerald-400">
                  {value.walletBalance}{" "}
                  {value.symbol}
                </p>

              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default WithdrawAssetSelector;