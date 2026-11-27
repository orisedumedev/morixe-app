import {
  useEffect,
  useMemo,
  useState,
} from "react";

import walletService from "../services/walletService";

const useWallet = () => {
  const [loading, setLoading] =
    useState(true);

  const [summary, setSummary] =
    useState(null);

  const [assets, setAssets] =
    useState([]);

  const [transactions, setTransactions] =
    useState([]);

  const [assetSearch, setAssetSearch] =
    useState("");

  const [
    selectedAsset,
    setSelectedAsset,
  ] = useState(null);

  useEffect(() => {
    loadWallet();
  }, []);

  const loadWallet = async () => {
    setLoading(true);

    try {
      const wallet =
        await walletService.getWallet();

      setSummary(wallet.summary);

      setAssets(wallet.assets);

      setTransactions(
        wallet.transactions
      );

      if (
        wallet.assets.length &&
        !selectedAsset
      ) {
        setSelectedAsset(
          wallet.assets[0]
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredAssets =
    useMemo(() => {
      if (!assetSearch.trim()) {
        return assets;
      }

      const keyword =
        assetSearch.toLowerCase();

      return assets.filter(
        (asset) =>
          asset.symbol
            .toLowerCase()
            .includes(keyword) ||

          asset.name
            .toLowerCase()
            .includes(keyword)
      );
    }, [
      assets,
      assetSearch,
    ]);

  return {
    loading,

    summary,

    assets,

    filteredAssets,

    transactions,

    assetSearch,
    setAssetSearch,

    selectedAsset,
    setSelectedAsset,

    reload: loadWallet,
  };
};

export default useWallet;