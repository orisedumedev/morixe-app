import withdrawData from "../data/withdrawData";

class WithdrawService {
  async getWithdrawData() {
    return Promise.resolve(
      withdrawData
    );
  }

  async getAssets() {
    return Promise.resolve(
      withdrawData.assets
    );
  }

  async getHistory() {
    return Promise.resolve(
      withdrawData.history
    );
  }

  async getAsset(symbol) {
    return Promise.resolve(
      withdrawData.assets.find(
        (asset) =>
          asset.symbol === symbol
      )
    );
  }

  async searchAssets(
    query = ""
  ) {
    const keyword =
      query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(
        withdrawData.assets
      );
    }

    return Promise.resolve(
      withdrawData.assets.filter(
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

  async getNetworks(symbol) {
    const asset =
      withdrawData.assets.find(
        (asset) =>
          asset.symbol === symbol
      );

    return Promise.resolve(
      asset?.networks ?? []
    );
  }

  async getWithdrawDetails(
    symbol,
    network
  ) {
    const asset =
      withdrawData.assets.find(
        (asset) =>
          asset.symbol === symbol
      );

    if (!asset) {
      return Promise.resolve(
        null
      );
    }

    return Promise.resolve({
      walletBalance:
        asset.walletBalance,

      minimumWithdrawal:
        asset
          .minimumWithdrawal?.[
          network
        ] ?? 0,

      withdrawalFee:
        asset.withdrawalFee?.[
          network
        ] ?? 0,
    });
  }
}

export default new WithdrawService();