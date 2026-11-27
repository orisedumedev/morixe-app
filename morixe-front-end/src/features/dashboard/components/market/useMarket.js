import {
  useEffect,
  useState,
} from "react";

import marketService from "./marketService";

export default function useMarket() {
  const [markets, setMarkets] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const loadMarkets = async () => {
    try {
      setLoading(true);

      const data =
        await marketService.getMarketOverview();

      setMarkets(data);

      setError(null);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to load market overview."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMarkets();
  }, []);

  return {
    markets,
    loading,
    error,
    refresh: loadMarkets,
  };
}