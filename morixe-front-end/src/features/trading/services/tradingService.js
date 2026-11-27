import api from "@/api";

class TradingService {
  /**
   * Get all trading pairs
   */
  async getTradingPairs() {
    // Replace with:
    // return (await api.get("/markets")).data;

    await new Promise((resolve) =>
      setTimeout(resolve, 400)
    );

    return [
      {
        id: 1,
        symbol: "BTC/USDT",
        price: 117845.32,
        change24h: 2.41,
      },
      {
        id: 2,
        symbol: "ETH/USDT",
        price: 3682.14,
        change24h: -0.84,
      },
      {
        id: 3,
        symbol: "SOL/USDT",
        price: 171.25,
        change24h: 4.18,
      },
      {
        id: 4,
        symbol: "BNB/USDT",
        price: 742.81,
        change24h: 1.03,
      },
    ];
  }

  /**
   * Chart data
   */
  async getChart(symbol) {
    // return (await api.get(`/chart/${symbol}`)).data;

    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return [
      { time: "09:00", price: 117120 },
      { time: "10:00", price: 117380 },
      { time: "11:00", price: 117250 },
      { time: "12:00", price: 117610 },
      { time: "13:00", price: 117420 },
      { time: "14:00", price: 117845 },
    ];
  }

  /**
   * Order Book
   */
  async getOrderBook(symbol) {
    // return (await api.get(`/orderbook/${symbol}`)).data;

    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return {
      bids: [
        {
          price: 117840,
          amount: 0.51,
        },
        {
          price: 117838,
          amount: 1.02,
        },
        {
          price: 117835,
          amount: 0.73,
        },
      ],

      asks: [
        {
          price: 117850,
          amount: 0.42,
        },
        {
          price: 117853,
          amount: 0.66,
        },
        {
          price: 117857,
          amount: 1.14,
        },
      ],
    };
  }

  /**
   * Recent Trades
   */
  async getRecentTrades(symbol) {
    // return (await api.get(`/trades/${symbol}`)).data;

    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return [
      {
        id: 1,
        side: "BUY",
        price: 117844,
        amount: 0.22,
        time: "14:01:05",
      },
      {
        id: 2,
        side: "SELL",
        price: 117842,
        amount: 0.15,
        time: "14:01:12",
      },
      {
        id: 3,
        side: "BUY",
        price: 117846,
        amount: 0.91,
        time: "14:01:28",
      },
    ];
  }

  /**
   * Place Order
   */
  async placeOrder(order) {
    // return (await api.post("/orders", order)).data;

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    console.log(order);

    return {
      success: true,
    };
  }
}

export default new TradingService();