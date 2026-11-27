import { useEffect, useState } from "react";

import positionService from "./positionService";

export default function usePositions() {
  const [positions, setPositions] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadPositions();
  }, []);

  async function loadPositions() {
    try {
      const data =
        await positionService.getPositions();

      setPositions(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    positions,
    loading,
    refresh: loadPositions,
  };
}