// Temporary mock data.
// Replace with an API call later.

import {
  Wallet,
  DollarSign,
  BriefcaseBusiness,
  TrendingUp,
} from "lucide-react";

class PortfolioService {
  async getPortfolioSummary() {
    // Simulate API delay
    await new Promise((resolve) =>
      setTimeout(resolve, 500)
    );

    return [
      {
        id: 1,
        title: "Portfolio Balance",
        value: "$125,430.25",
        change: "+8.42%",
        positive: true,
        icon: Wallet,
      },
      {
        id: 2,
        title: "Today's Profit",
        value: "$1,284.40",
        change: "+2.15%",
        positive: true,
        icon: DollarSign,
      },
      {
        id: 3,
        title: "Open Positions",
        value: "14",
        change: "+3",
        positive: true,
        icon: BriefcaseBusiness,
      },
      {
        id: 4,
        title: "Overall ROI",
        value: "18.72%",
        change: "+1.08%",
        positive: true,
        icon: TrendingUp,
      },
    ];
  }
}

export default new PortfolioService();