import { Search } from "lucide-react";

import WalletAssetItem from "./WalletAssetItem";

const WalletAssetList = ({
  assets,

  loading,

  search,
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
          My Assets
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your cryptocurrency holdings
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
            value={search}
            onChange={(e) =>
              onSearchChange(
                e.target.value
              )
            }
            placeholder="Search assets..."
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
              focus:border-blue-500
              focus:outline-none
            "
          />

        </div>

      </div>

      {/* Assets */}

      <div className="space-y-3 px-6 pb-6">

        {loading ? (
          <div className="py-12 text-center text-slate-400">
            Loading assets...
          </div>
        ) : assets.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            No assets found.
          </div>
        ) : (
          assets.map((asset) => (
            <WalletAssetItem
              key={asset.id}
              asset={asset}
              active={
                selectedAsset?.id ===
                asset.id
              }
              onSelect={
                onSelectAsset
              }
            />
          ))
        )}

      </div>

    </div>
  );
};

export default WalletAssetList;