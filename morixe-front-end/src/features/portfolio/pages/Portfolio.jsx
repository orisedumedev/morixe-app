import {
  PortfolioSummary,
  PortfolioAllocationChart,
  PortfolioPerformanceChart,
  PortfolioAssetList,
  PortfolioTopMovers,
  PortfolioInsights,
} from "../components";

import { usePortfolio } from "../hooks";

const Portfolio = () => {
  const {
    loading,
    summary,
    allocation,
    performance,
    assets,
  } = usePortfolio();

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Portfolio
        </h1>

        <p className="mt-1 text-slate-400">
          Track your portfolio performance, allocation, and investment insights.
        </p>

      </div>

      {/* Summary */}

      <PortfolioSummary
        summary={summary}
        loading={loading}
      />

      {/* Charts */}

      <div className="grid gap-6 xl:grid-cols-2">

        <PortfolioAllocationChart
          data={allocation}
        />

        <PortfolioPerformanceChart
          data={performance}
        />

      </div>

      {/* Holdings */}

      <PortfolioAssetList
        assets={assets}
        loading={loading}
      />

      {/* Bottom Section */}

      <div className="grid gap-6 xl:grid-cols-2">

        <PortfolioTopMovers
          assets={assets}
        />

        <PortfolioInsights
          summary={summary}
          assets={assets}
        />

      </div>

    </div>
  );
};

export default Portfolio;