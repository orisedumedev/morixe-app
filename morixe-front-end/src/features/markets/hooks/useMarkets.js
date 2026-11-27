import {
  useEffect,
  useMemo,
  useState,
} from "react";

import marketService from "../services/marketService";

const useMarkets = () => {
  const [markets, setMarkets] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // Sidebar Search
  const [
    sidebarSearch,
    setSidebarSearch,
  ] = useState("");

  // Table Search
  const [
    tableSearch,
    setTableSearch,
  ] = useState("");

  const [
    selectedMarket,
    setSelectedMarket,
  ] = useState(null);

  useEffect(() => {
    loadMarkets();
  }, []);

  const loadMarkets = async () => {
    setLoading(true);

    try {
      const data =
        await marketService.getMarkets();

      setMarkets(data);

      if (
        data.length &&
        !selectedMarket
      ) {
        setSelectedMarket(data[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  // Sidebar Markets
  const sidebarMarkets =
    useMemo(() => {
      if (!sidebarSearch.trim()) {
        return markets;
      }

      const keyword =
        sidebarSearch.toLowerCase();

      return markets.filter(
        (market) =>
          market.symbol
            .toLowerCase()
            .includes(keyword) ||
          market.name
            .toLowerCase()
            .includes(keyword) ||
          market.pair
            .toLowerCase()
            .includes(keyword)
      );
    }, [markets, sidebarSearch]);

  // Table Markets
  const tableMarkets =
    useMemo(() => {
      if (!tableSearch.trim()) {
        return markets;
      }

      const keyword =
        tableSearch.toLowerCase();

      return markets.filter(
        (market) =>
          market.symbol
            .toLowerCase()
            .includes(keyword) ||
          market.name
            .toLowerCase()
            .includes(keyword) ||
          market.pair
            .toLowerCase()
            .includes(keyword)
      );
    }, [markets, tableSearch]);

  return {
    loading,

    // Original Data
    markets,

    // Sidebar
    sidebarMarkets,
    sidebarSearch,
    setSidebarSearch,

    // Table
    tableMarkets,
    tableSearch,
    setTableSearch,

    // Selected Coin
    selectedMarket,
    setSelectedMarket,

    // Reload
    reload: loadMarkets,
  };
};

export default useMarkets;