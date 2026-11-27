import { Search, Check } from "lucide-react";

const DepositAssetSelector = ({
  assets = [],
  loading = false,

  search = "",
  onSearchChange,

  selectedAsset,
  onSelectAsset,
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

      <div className="border-b border-slate-800 p-6">
        <h2 className="text-xl font-semibold text-white">
          Select Asset
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Choose the cryptocurrency you want to deposit.
        </p>
      </div>

      {/* Search */}

      <div className="p-6">
        <div className="relative">

          <Search
            size={18}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-500
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              onSearchChange?.(e.target.value)
            }
            placeholder="Search asset..."
            className="
              w-full
              rounded-xl
              border
              border-slate-700
              bg-slate-800
              py-3
              pl-10
              pr-4
              text-white
              placeholder:text-slate-500
              focus:border-blue-500
              focus:outline-none
            "
          />

        </div>
      </div>

      {/* Asset List */}

      <div
        className="
          max-h-96
          overflow-y-auto
          px-6
          pb-6
          space-y-2
        "
      >
        {loading ? (
          <div className="py-10 text-center text-slate-400">
            Loading assets...
          </div>
        ) : assets.length === 0 ? (
          <div className="py-10 text-center text-slate-500">
            No assets found.
          </div>
        ) : (
          assets.map((asset) => (
            <button
              key={asset.id}
              type="button"
              onClick={() =>
                onSelectAsset?.(asset)
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
                  selectedAsset?.id === asset.id
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-slate-800 bg-slate-800 hover:border-slate-700 hover:bg-slate-700"
                }
              `}
            >
              {/* Left */}

              <div className="flex items-center gap-4">

                {/* Coin Logo */}

                <img
                  src={asset.logo}
                  alt={asset.symbol}
                  className="h-10 w-10 rounded-full"
                />

                <div className="text-left">

                  <h3 className="font-semibold text-white">
                    {asset.symbol}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {asset.name}
                  </p>

                </div>

              </div>

              {/* Right */}

              {selectedAsset?.id === asset.id && (
                <Check
                  size={20}
                  className="text-blue-400"
                />
              )}
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default DepositAssetSelector;