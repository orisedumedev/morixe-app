import depositData from "../data/depositData";

class DepositService {
  async getDepositData() {
    return Promise.resolve(depositData);
  }

  async getAssets() {
    return Promise.resolve(depositData.assets);
  }

  async getHistory() {
    return Promise.resolve(depositData.history);
  }

  async getAsset(symbol) {
    return Promise.resolve(
      depositData.assets.find(
        (asset) => asset.symbol === symbol
      )
    );
  }

  async searchAssets(query = "") {
    const keyword = query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(depositData.assets);
    }

    return Promise.resolve(
      depositData.assets.filter(
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
    const asset = depositData.assets.find(
      (asset) => asset.symbol === symbol
    );

    return Promise.resolve(
      asset?.networks ?? []
    );
  }

  async getDepositDetails(
    symbol,
    network
  ) {
    const asset = depositData.assets.find(
      (asset) => asset.symbol === symbol
    );

    if (!asset) {
      return Promise.resolve(null);
    }

    return Promise.resolve({
      address:
        asset.addresses?.[network] ?? "",

      qrCode:
        asset.qrCodes?.[network] ?? "",

      minimumDeposit:
        asset.minimumDeposits?.[
          network
        ] ?? "",

      confirmations:
        asset.confirmations?.[
          network
        ] ?? 0,
    });
  }
}

export default new DepositService();