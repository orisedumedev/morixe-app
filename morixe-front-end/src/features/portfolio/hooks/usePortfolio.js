import {
  useEffect,
  useMemo,
  useState,
} from "react";

import portfolioService from "../services/portfolioService";

const usePortfolio = () => {
  const [loading, setLoading] =
    useState(true);

  const [summary, setSummary] =
    useState(null);

  const [allocation, setAllocation] =
    useState([]);

  const [performance, setPerformance] =
    useState([]);

  const [assets, setAssets] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadPortfolio();
  }, []);

  const loadPortfolio = async () => {
    setLoading(true);

    try {
      const data =
        await portfolioService.getPortfolio();

      setSummary(data.summary);

      setAllocation(data.allocation);

      setPerformance(data.performance);

      setAssets(data.assets);
    } finally {
      setLoading(false);
    }
  };

  const filteredAssets =
    useMemo(() => {
      if (!search.trim()) {
        return assets;
      }

      const keyword =
        search.toLowerCase();

      return assets.filter(
        (asset) =>
          asset.symbol
            .toLowerCase()
            .includes(keyword) ||
          asset.name
            .toLowerCase()
            .includes(keyword)
      );
    }, [assets, search]);

  return {
    loading,

    summary,

    allocation,

    performance,

    assets: filteredAssets,

    search,
    setSearch,

    reload: loadPortfolio,
  };
};

export default usePortfolio;