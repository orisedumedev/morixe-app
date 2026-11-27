import { useEffect, useMemo, useState } from "react";
import tradingPairService from "../services/tradingPairService";

const useTradingPairs = () => {
  const [pairs, setPairs] = useState([]);

  const [search, setSearch] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  const [selectedPair, setSelectedPair] =
    useState(null);

  useEffect(() => {
    loadPairs();
  }, []);

  const loadPairs = async () => {
    try {
      setLoading(true);

      const data =
        await tradingPairService.getTradingPairs();

      setPairs(data);

      if (
        data.length &&
        !selectedPair
      ) {
        setSelectedPair(data[0]);
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredPairs =
    useMemo(() => {
      if (!search.trim()) {
        return pairs;
      }

      const keyword =
        search.toLowerCase();

      return pairs.filter(
        (pair) =>
          pair.symbol
            .toLowerCase()
            .includes(keyword) ||
          pair.name
            .toLowerCase()
            .includes(keyword) ||
          pair.baseAsset
            .toLowerCase()
            .includes(keyword)
      );
    }, [pairs, search]);

  return {
    loading,

    search,
    setSearch,

    pairs: filteredPairs,

    selectedPair,
    setSelectedPair,

    reload: loadPairs,
  };
};

export default useTradingPairs;