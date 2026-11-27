import useMarketFeed from "./useMarketFeed";

import MarketTicker from "./MarketTicker";

const LiveMarketFeed = () => {
  const {
    marketFeed,
    loading,
  } = useMarketFeed();

  if (loading) {
    return (
      <div
        className="
          h-96
          rounded-2xl
          bg-slate-900
          animate-pulse
        "
      />
    );
  }

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
      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Live Market Feed
        </h2>

        <p className="text-slate-400 text-sm">
          Top Cryptocurrency Prices
        </p>

      </div>

      <div className="space-y-4">

        {marketFeed.map((asset) => (
          <MarketTicker
            key={asset.id}
            asset={asset}
          />
        ))}

      </div>

    </div>
  );
};

export default LiveMarketFeed;