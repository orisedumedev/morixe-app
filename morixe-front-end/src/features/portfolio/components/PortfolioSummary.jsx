import {
  DollarSign,
  TrendingUp,
  Activity,
  Wallet,
} from "lucide-react";

const PortfolioSummary = ({
  summary,
  loading = false,
}) => {
  const cards = [
    {
      title: "Portfolio Value",
      value: `$${summary?.totalValue?.toLocaleString() ?? "0"}`,
      icon: DollarSign,
      color: "bg-blue-600",
    },
    {
      title: "Total Profit",
      value: `$${summary?.totalProfit?.toLocaleString() ?? "0"}`,
      icon: TrendingUp,
      color: "bg-emerald-600",
    },
    {
      title: "24H Change",
      value: `${summary?.dailyChange ?? 0}%`,
      icon: Activity,
      color: "bg-purple-600",
    },
    {
      title: "Assets",
      value: summary?.totalAssets ?? 0,
      icon: Wallet,
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {card.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white">
                  {loading ? "--" : card.value}
                </h2>

              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}
              >
                <Icon
                  size={22}
                  className="text-white"
                />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioSummary;