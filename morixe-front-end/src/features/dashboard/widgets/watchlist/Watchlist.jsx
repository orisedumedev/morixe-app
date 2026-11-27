import useWatchlist from "./useWatchlist";

import WatchlistItem from "./WatchlistItem";

const Watchlist = () => {
  const {
    assets,
    loading,
  } = useWatchlist();

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
          Watchlist
        </h2>

        <p className="text-slate-400 text-sm">
          Favorite Markets
        </p>

      </div>

      <div>

        {assets.map((asset) => (
          <WatchlistItem
            key={asset.id}
            asset={asset}
          />
        ))}

      </div>

    </div>
  );
};

export default Watchlist;