class TradingService {
  async getAssets() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return [
      "BTC/USD",
      "ETH/USD",
      "XAU/USD",
      "EUR/USD",
    ];
  }

  async placeOrder(order) {
    console.log(order);

    await new Promise((resolve) =>
      setTimeout(resolve, 1000)
    );

    return {
      success: true,
    };
  }
}

export default new TradingService();