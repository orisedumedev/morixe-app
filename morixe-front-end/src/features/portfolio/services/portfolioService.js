import portfolioData from "../data/portfolioData";

class PortfolioService {
  async getPortfolio() {
    return Promise.resolve(portfolioData);
  }

  async getSummary() {
    return Promise.resolve(portfolioData.summary);
  }

  async getAssets() {
    return Promise.resolve(portfolioData.assets);
  }

  async getAllocation() {
    return Promise.resolve(portfolioData.allocation);
  }

  async getPerformance() {
    return Promise.resolve(portfolioData.performance);
  }

  async searchAssets(query = "") {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(portfolioData.assets);
    }

    return Promise.resolve(
      portfolioData.assets.filter(
        (asset) =>
          asset.symbol
            .toLowerCase()
            .includes(keyword) ||
          asset.name
            .toLowerCase()
            .includes(keyword)
      )
    );
  }
}

export default new PortfolioService();