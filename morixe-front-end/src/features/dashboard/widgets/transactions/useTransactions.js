import { useEffect, useState } from "react";

import transactionService from "./transactionService";

export default function useTransactions() {
  const [transactions, setTransactions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadTransactions();
  }, []);

  async function loadTransactions() {
    try {
      const data =
        await transactionService.getTransactions();

      setTransactions(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    transactions,
    loading,
    refresh: loadTransactions,
  };
}