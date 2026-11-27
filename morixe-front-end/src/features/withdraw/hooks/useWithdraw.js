import {
  useEffect,
  useMemo,
  useState,
} from "react";

import withdrawService from "../services/withdrawService";

const useWithdraw = () => {
  const [loading, setLoading] =
    useState(true);

  const [assets, setAssets] =
    useState([]);

  const [history, setHistory] =
    useState([]);

  const [
    selectedAsset,
    setSelectedAsset,
  ] = useState(null);

  const [
    selectedNetwork,
    setSelectedNetwork,
  ] = useState("");

  const [search, setSearch] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [amount, setAmount] =
    useState("");

  useEffect(() => {
    loadWithdrawData();
  }, []);

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

  const loadWithdrawData =
    async () => {
      setLoading(true);

      try {
        const data =
          await withdrawService.getWithdrawData();

        setAssets(data.assets);

        setHistory(data.history);

        if (data.assets.length) {
          setSelectedAsset(
            data.assets[0]
          );
        }
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

  const walletBalance =
    selectedAsset?.walletBalance ??
    0;

  const minimumWithdrawal =
    selectedAsset
      ?.minimumWithdrawal?.[
      selectedNetwork
    ] ?? 0;

  const withdrawalFee =
    selectedAsset
      ?.withdrawalFee?.[
      selectedNetwork
    ] ?? 0;

  const withdrawalAmount =
    Number(amount) || 0;

  /**
   * Amount the recipient receives
   */

  const receiveAmount =
    Math.max(
      0,
      withdrawalAmount -
        withdrawalFee
    ).toFixed(8);

  /**
   * Amount deducted
   * (currently equal to entered amount)
   */

  const totalDeducted =
    withdrawalAmount.toFixed(8);

  /**
   * Validation
   */

  let validationError = "";

  if (
    withdrawalAmount > 0 &&
    withdrawalAmount <
      minimumWithdrawal
  ) {
    validationError =
      `Minimum withdrawal is ${minimumWithdrawal} ${selectedAsset?.symbol}`;
  }

  if (
    withdrawalAmount >
    walletBalance
  ) {
    validationError =
      "Insufficient wallet balance.";
  }

  if (
    withdrawalAmount <=
      withdrawalFee &&
    withdrawalAmount > 0
  ) {
    validationError =
      "Amount must be greater than the network fee.";
  }

  if (
    address.trim() &&
    address.trim().length < 10
  ) {
    validationError =
      "Invalid wallet address.";
  }

  const canWithdraw =
    !loading &&
    selectedAsset &&
    selectedNetwork &&
    address.trim() &&
    withdrawalAmount > 0 &&
    !validationError;

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

    address,
    setAddress,

    amount,
    setAmount,

    walletBalance,

    minimumWithdrawal,

    withdrawalFee,

    withdrawalAmount,

    totalDeducted,

    receiveAmount,

    validationError,

    canWithdraw,

    reload:
      loadWithdrawData,
  };
};

export default useWithdraw;