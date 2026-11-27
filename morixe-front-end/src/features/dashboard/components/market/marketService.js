class MarketService {
  async getMarketOverview() {
    // Mock API delay
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return [
      {
        id: 1,
        symbol: "BTC/USD",
        price: "$64,210",
        change: "+2.45%",
        positive: true,
      },
      {
        id: 2,
        symbol: "ETH/USD",
        price: "$3,420",
        change: "+1.82%",
        positive: true,
      },
      {
        id: 3,
        symbol: "XAU/USD",
        price: "$2,350",
        change: "-0.61%",
        positive: false,
      },
      {
        id: 4,
        symbol: "EUR/USD",
        price: "1.0823",
        change: "-0.18%",
        positive: false,
      },
    ];
  }
}

export default new MarketService();