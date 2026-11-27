import { useEffect, useState } from "react";

import marketFeedService from "./marketFeedService";

export default function useMarketFeed() {
  const [marketFeed, setMarketFeed] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadFeed();
  }, []);

  async function loadFeed() {
    try {
      const data =
        await marketFeedService.getMarketFeed();

      setMarketFeed(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    marketFeed,
    loading,
    refresh: loadFeed,
  };
}