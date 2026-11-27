import {
  useEffect,
  useState,
} from "react";

import tradingService from "./tradingService";

export default function useTrading() {
  const [assets, setAssets] =
    useState([]);

  const [selectedAsset, setSelectedAsset] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  useEffect(() => {
    async function loadAssets() {
      const data =
        await tradingService.getAssets();

      setAssets(data);

      setSelectedAsset(data[0]);
    }

    loadAssets();
  }, []);

  const trade = async (type) => {
    setLoading(true);

    try {
      await tradingService.placeOrder({
        type,
        asset: selectedAsset,
        amount,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    assets,
    selectedAsset,
    amount,
    loading,

    setSelectedAsset,
    setAmount,

    buy: () => trade("BUY"),
    sell: () => trade("SELL"),
  };
}