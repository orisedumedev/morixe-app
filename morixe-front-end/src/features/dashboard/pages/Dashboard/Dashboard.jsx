import {
  PortfolioPerformanceChart,
  AssetAllocationChart,
  Watchlist,
  RecentTransactions,
  OpenPositions,
  TradingHistory,
  NotificationsPanel,
  LiveMarketFeed,
} from "@/features/dashboard/widgets";

import {
  PortfolioCards,
  MarketOverview,
  TradingWidget,
} from "@/features/dashboard/components";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <PortfolioCards />

      <div className="grid gap-8 xl:grid-cols-2">
        <PortfolioPerformanceChart />
        <AssetAllocationChart />
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <Watchlist />
        </div>

        <TradingWidget />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <RecentTransactions />
        <OpenPositions />
      </div>

      <TradingHistory />

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <MarketOverview />
        </div>

        <NotificationsPanel />
      </div>

      <LiveMarketFeed />

    </div>
  );
}