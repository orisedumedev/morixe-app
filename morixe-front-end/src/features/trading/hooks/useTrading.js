import { useEffect, useState, useMemo } from "react";

import tradingService from "../services/tradingService";

export default function useTrading() {
  const [pairs, setPairs] = useState([]);

  const [selectedPair, setSelectedPair] =
    useState("BTC/USDT");

  const [chartData, setChartData] =
    useState([]);

  const [search, setSearch] = useState("");

  const [orderBook, setOrderBook] =
    useState({
      bids: [],
      asks: [],
    });


  const [recentTrades, setRecentTrades] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    initialize();
  }, []);

  useEffect(() => {
    if (selectedPair) {
      loadTradingData(selectedPair);
    }
  }, [selectedPair]);

  async function initialize() {
    setLoading(true);

    try {
      const markets =
        await tradingService.getTradingPairs();

      setPairs(markets);

      if (markets.length) {
        setSelectedPair(
          markets[0].symbol
        );
      }
    } finally {
      setLoading(false);
    }
  }

  async function loadTradingData(symbol) {
    const [
      chart,
      book,
      trades,
    ] = await Promise.all([
      tradingService.getChart(symbol),
      tradingService.getOrderBook(symbol),
      tradingService.getRecentTrades(symbol),
    ]);

    setChartData(chart);
    setOrderBook(book);
    setRecentTrades(trades);
  }

  const filteredPairs = useMemo(() => {
  if (!search.trim()) {
    return pairs;
  }

  const keyword = search.toLowerCase();

  return pairs.filter((pair) =>
    pair.symbol.toLowerCase().includes(keyword)
  );
 }, [pairs, search]);

  async function placeOrder(order) {
    return tradingService.placeOrder({
      ...order,
      symbol: selectedPair,
    });
  }

  return {
  loading,

  tradingPairs: filteredPairs,

  search,
  setSearch,

  selectedPair,
  setSelectedPair,

  chartData,

  orderBook,

  recentTrades,

  placeOrder,

  refresh() {
    loadTradingData(selectedPair);
  },
  };
}