import { useEffect, useState } from "react";

import historyService from "./historyService";

export default function useHistory() {
  const [history, setHistory] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const data =
        await historyService.getHistory();

      setHistory(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    history,
    loading,
    refresh: loadHistory,
  };
}