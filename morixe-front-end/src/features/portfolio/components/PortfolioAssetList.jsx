import PortfolioAssetItem from "./PortfolioAssetItem";

const PortfolioAssetList = ({
  assets = [],
  loading = false,
}) => {
  return (
    <div
      className="
        overflow-hidden
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
      "
    >
      {/* Header */}

      <div className="border-b border-slate-800 p-5">

        <h2 className="text-xl font-semibold text-white">
          Portfolio Holdings
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your current crypto assets.
        </p>

      </div>

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-slate-900">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Asset
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Holdings
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Value
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Allocation
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
                Profit / Loss
              </th>

            </tr>

          </thead>

          <tbody>

            {loading ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-16 text-center text-slate-400"
                >
                  Loading portfolio...
                </td>

              </tr>

            ) : assets.length === 0 ? (

              <tr>

                <td
                  colSpan={6}
                  className="py-16 text-center text-slate-500"
                >
                  No assets found.
                </td>

              </tr>

            ) : (

              assets.map((asset) => (
                <PortfolioAssetItem
                  key={asset.id}
                  asset={asset}
                />
              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default PortfolioAssetList;