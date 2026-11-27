import marketData from "../data/marketData";

class MarketService {
  // Get all markets
  async getMarkets() {
    return Promise.resolve(marketData);
  }

  // Get a single market by symbol
  async getMarket(symbol) {
    return Promise.resolve(
      marketData.find(
        (market) => market.symbol === symbol
      )
    );
  }

  // Search markets
  async searchMarkets(query = "") {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(marketData);
    }

    return Promise.resolve(
      marketData.filter((market) =>
        this.matchesSearch(market, keyword)
      )
    );
  }

  // Filter by category
  async getMarketsByCategory(category) {
    if (!category || category === "All") {
      return Promise.resolve(marketData);
    }

    return Promise.resolve(
      marketData.filter(
        (market) => market.category === category
      )
    );
  }

  // Sort markets
  async sortMarkets(markets, sortBy = "marketCap") {
    const sorted = [...markets];

    switch (sortBy) {
      case "price":
        sorted.sort((a, b) => b.price - a.price);
        break;

      case "change":
        sorted.sort(
          (a, b) => b.change24h - a.change24h
        );
        break;

      case "volume":
        sorted.sort((a, b) =>
          String(b.volume24h).localeCompare(
            String(a.volume24h)
          )
        );
        break;

      case "marketCap":
      default:
        sorted.sort((a, b) =>
          String(b.marketCap).localeCompare(
            String(a.marketCap)
          )
        );
        break;
    }

    return Promise.resolve(sorted);
  }

  // Shared search helper
  matchesSearch(market, keyword) {
    return (
      market.symbol
        .toLowerCase()
        .includes(keyword) ||

      market.name
        .toLowerCase()
        .includes(keyword) ||

      market.pair
        .toLowerCase()
        .includes(keyword)
    );
  }
}

export default new MarketService();