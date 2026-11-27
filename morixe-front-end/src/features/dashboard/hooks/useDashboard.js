import {
  useEffect,
  useState,
} from "react";

import {
  dashboardService,
} from "../services";

export default function useDashboard() {
  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const data =
        await dashboardService.getDashboardData();

      setDashboard(data);

      setError(null);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to load dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  return {
    dashboard,
    loading,
    error,
    refresh: loadDashboard,
  };
}