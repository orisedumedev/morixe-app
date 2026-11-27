import {
  Award,
  ShieldCheck,
  Target,
  Wallet,
} from "lucide-react";

const PortfolioInsights = ({
  summary,
  assets = [],
}) => {
  if (!summary || assets.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-xl font-semibold text-white">
          Portfolio Insights
        </h2>

        <p className="mt-4 text-slate-400">
          No portfolio insights available.
        </p>
      </div>
    );
  }

  const largestHolding = [...assets].sort(
    (a, b) => b.value - a.value
  )[0];

  const bestPerformer = [...assets].sort(
    (a, b) => b.pnl - a.pnl
  )[0];

  const worstPerformer = [...assets].sort(
    (a, b) => a.pnl - b.pnl
  )[0];

  const diversificationScore =
    assets.length >= 8
      ? "Excellent"
      : assets.length >= 5
      ? "Good"
      : assets.length >= 3
      ? "Moderate"
      : "Low";

  const insights = [
    {
      title: "Largest Holding",
      value: largestHolding.symbol,
      description: `$${largestHolding.value.toLocaleString()}`,
      icon: Wallet,
      color: "bg-blue-600",
    },
    {
      title: "Best Performer",
      value: bestPerformer.symbol,
      description: `+${bestPerformer.pnl}%`,
      icon: Award,
      color: "bg-emerald-600",
    },
    {
      title: "Worst Performer",
      value: worstPerformer.symbol,
      description: `${worstPerformer.pnl}%`,
      icon: Target,
      color: "bg-red-600",
    },
    {
      title: "Diversification",
      value: diversificationScore,
      description: `${summary.totalAssets} Assets`,
      icon: ShieldCheck,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Portfolio Insights
      </h2>

      <div className="mt-6 space-y-4">

        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >
              <div className="flex items-center gap-4">

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                >
                  <Icon
                    size={20}
                    className="text-white"
                  />
                </div>

                <div>

                  <h3 className="text-sm text-slate-400">
                    {item.title}
                  </h3>

                  <p className="font-semibold text-white">
                    {item.value}
                  </p>

                </div>

              </div>

              <span className="text-sm text-slate-400">
                {item.description}
              </span>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default PortfolioInsights;