import {
  useEffect,
  useState,
} from "react";

import portfolioService from "./portfolioService";

export default function usePortfolio() {
  const [portfolio, setPortfolio] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  const loadPortfolio = async () => {
    try {
      setLoading(true);

      const data =
        await portfolioService.getPortfolioSummary();

      setPortfolio(data);

      setError(null);
    } catch (err) {
      console.error(err);

      setError(
        "Failed to load portfolio."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPortfolio();
  }, []);

  return {
    portfolio,
    loading,
    error,
    refresh: loadPortfolio,
  };
}