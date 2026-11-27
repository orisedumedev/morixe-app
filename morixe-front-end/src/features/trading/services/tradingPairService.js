import tradingPairData from "../data/tradingPairData";

class TradingPairService {
  async getTradingPairs() {
    return Promise.resolve(tradingPairData);
  }

  async searchTradingPairs(query = "") {
    const keyword = query.toLowerCase();

    return Promise.resolve(
      tradingPairData.filter(
        (pair) =>
          pair.symbol
            .toLowerCase()
            .includes(keyword) ||
          pair.name
            .toLowerCase()
            .includes(keyword) ||
          pair.baseAsset
            .toLowerCase()
            .includes(keyword)
      )
    );
  }

  async getTradingPair(symbol) {
    return Promise.resolve(
      tradingPairData.find(
        (pair) =>
          pair.symbol === symbol
      )
    );
  }
}

export default new TradingPairService();