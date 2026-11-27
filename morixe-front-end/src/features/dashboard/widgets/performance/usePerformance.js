import { useEffect, useState } from "react";
import performanceService from "./performanceService";

export default function usePerformance() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPerformance();
  }, []);

  async function loadPerformance() {
    try {
      const result =
        await performanceService.getPerformance();

      setData(result);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    refresh: loadPerformance,
  };
}