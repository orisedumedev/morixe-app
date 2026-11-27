import {
  useEffect,
  useMemo,
  useState,
} from "react";

import transactionService from "../services/transactionService";

const useTransactions = () => {
  const [loading, setLoading] =
    useState(true);

  const [transactions, setTransactions] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [typeFilter, setTypeFilter] =
    useState("All");

  const [statusFilter, setStatusFilter] =
    useState("All");

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    setLoading(true);

    try {
      const data =
        await transactionService.getTransactions();

      setTransactions(data);
    } finally {
      setLoading(false);
    }
  };

  const filteredTransactions =
    useMemo(() => {
      let results = [...transactions];

      if (search.trim()) {
        const keyword =
          search.toLowerCase();

        results = results.filter(
          (transaction) =>
            transaction.asset
              .toLowerCase()
              .includes(keyword) ||
            transaction.type
              .toLowerCase()
              .includes(keyword) ||
            transaction.network
              .toLowerCase()
              .includes(keyword) ||
            transaction.status
              .toLowerCase()
              .includes(keyword) ||
            transaction.txId
              .toLowerCase()
              .includes(keyword)
        );
      }

      if (typeFilter !== "All") {
        results = results.filter(
          (transaction) =>
            transaction.type === typeFilter
        );
      }

      if (statusFilter !== "All") {
        results = results.filter(
          (transaction) =>
            transaction.status ===
            statusFilter
        );
      }

      return results;
    }, [
      transactions,
      search,
      typeFilter,
      statusFilter,
    ]);

  return {
    loading,

    transactions,

    filteredTransactions,

    search,
    setSearch,

    typeFilter,
    setTypeFilter,

    statusFilter,
    setStatusFilter,

    reload: loadTransactions,
  };
};

export default useTransactions;