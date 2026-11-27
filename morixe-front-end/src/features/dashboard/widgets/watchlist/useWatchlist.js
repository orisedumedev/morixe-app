import { useEffect, useState } from "react";

import watchlistService from "./watchlistService";

export default function useWatchlist() {
  const [assets, setAssets] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadWatchlist();
  }, []);

  async function loadWatchlist() {
    try {
      const data =
        await watchlistService.getWatchlist();

      setAssets(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    assets,
    loading,
    refresh: loadWatchlist,
  };
}