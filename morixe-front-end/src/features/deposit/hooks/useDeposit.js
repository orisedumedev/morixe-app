import {
  useEffect,
  useMemo,
  useState,
} from "react";

import depositService from "../services/depositService";

const useDeposit = () => {
  const [loading, setLoading] =
    useState(true);

  const [assets, setAssets] =
    useState([]);

  const [history, setHistory] =
    useState([]);

  const [selectedAsset, setSelectedAsset] =
    useState(null);

  const [
    selectedNetwork,
    setSelectedNetwork,
  ] = useState("");

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    loadDepositData();
  }, []);

  const loadDepositData = async () => {
    setLoading(true);

    try {
      const data =
        await depositService.getDepositData();

      setAssets(data.assets);

      setHistory(data.history);

      if (data.assets.length) {
        const firstAsset = data.assets[0];

        setSelectedAsset(firstAsset);

        setSelectedNetwork(
          firstAsset.networks[0]
        );
      }
    } finally {
      setLoading(false);
    }
  };

  /**
   * Automatically switch to the first
   * available network whenever the
   * selected asset changes.
   */
  useEffect(() => {
    if (
      selectedAsset &&
      selectedAsset.networks?.length
    ) {
      setSelectedNetwork(
        selectedAsset.networks[0]
      );
    }
  }, [selectedAsset]);

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

  /**
   * Convenience values for the
   * currently selected network.
   */
  const depositAddress =
    selectedAsset?.addresses?.[
      selectedNetwork
    ] ?? "";

  const qrCode =
    selectedAsset?.qrCodes?.[
      selectedNetwork
    ] ?? "";

  const minimumDeposit =
    selectedAsset?.minimumDeposits?.[
      selectedNetwork
    ] ?? "";

  const requiredConfirmations =
    selectedAsset?.confirmations?.[
      selectedNetwork
    ] ?? 0;

  return {
    loading,

    assets,

    filteredAssets,

    history,

    search,
    setSearch,

    selectedAsset,
    setSelectedAsset,

    selectedNetwork,
    setSelectedNetwork,

    depositAddress,

    qrCode,

    minimumDeposit,

    requiredConfirmations,

    reload: loadDepositData,
  };
};

export default useDeposit;