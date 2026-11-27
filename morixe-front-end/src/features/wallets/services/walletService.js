import walletData from "../data/walletData";

class WalletService {
  async getWallet() {
    return Promise.resolve(walletData);
  }

  async getSummary() {
    return Promise.resolve(walletData.summary);
  }

  async getAssets() {
    return Promise.resolve(walletData.assets);
  }

  async getTransactions() {
    return Promise.resolve(walletData.transactions);
  }

  async getAsset(symbol) {
    return Promise.resolve(
      walletData.assets.find(
        (asset) => asset.symbol === symbol
      )
    );
  }

  async searchAssets(query = "") {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(walletData.assets);
    }

    return Promise.resolve(
      walletData.assets.filter(
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

export default new WalletService();