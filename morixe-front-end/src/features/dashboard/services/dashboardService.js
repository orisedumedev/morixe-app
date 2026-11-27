import {
  portfolioService,
} from "@/features/dashboard/components/portfolio";

import {
  marketService,
} from "@/features/dashboard/components/market";

import {
  tradingService,
} from "@/features/dashboard/components/trading";

class DashboardService {
  async getDashboardData() {
    const [
      portfolio,
      market,
      assets,
    ] = await Promise.all([
      portfolioService.getPortfolioSummary(),
      marketService.getMarketOverview(),
      tradingService.getAssets(),
    ]);

    // async getDashboardData() {
    // const { data } = await api.get("/dashboard");
    // return data;}

    return {
      portfolio,
      market,
      assets,
    };
  }
}

export default new DashboardService();