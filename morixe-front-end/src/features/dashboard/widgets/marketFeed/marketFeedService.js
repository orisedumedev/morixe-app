import marketFeedData from "./marketFeedData";

class MarketFeedService {
  async getMarketFeed() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return marketFeedData;
  }
}

export default new MarketFeedService();