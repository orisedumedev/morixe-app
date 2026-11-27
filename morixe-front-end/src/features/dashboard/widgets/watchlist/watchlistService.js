import watchlistData from "./watchlistData";

class WatchlistService {
  async getWatchlist() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return watchlistData;
  }
}

export default new WatchlistService();