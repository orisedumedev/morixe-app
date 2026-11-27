import { useEffect, useState } from "react";
import allocationService from "./allocationService";

export default function useAllocation() {
  const [data, setData] = useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadAllocation();
  }, []);

  async function loadAllocation() {
    try {
      const result =
        await allocationService.getAllocation();

      setData(result);
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    refresh: loadAllocation,
  };
}