import {
  DollarSign,
  PieChart,
  Activity,
} from "lucide-react";

const WalletStats = ({
  summary,
}) => {
  if (!summary) return null;

  const stats = [
    {
      label: "Available",
      value: `$${summary.availableBalance.toLocaleString()}`,
      icon: DollarSign,
    },
    {
      label: "Portfolio",
      value: `$${summary.portfolioValue.toLocaleString()}`,
      icon: PieChart,
    },
    {
      label: "24H P/L",
      value: `${summary.pnl24h}%`,
      icon: Activity,
      positive:
        summary.pnl24h >= 0,
    },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-3">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              p-5
            "
          >
            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm text-slate-400">
                  {item.label}
                </p>

                <h3
                  className={`
                    mt-2
                    text-xl
                    font-semibold

                    ${
                      item.label ===
                      "24H P/L"
                        ? item.positive
                          ? "text-emerald-400"
                          : "text-red-400"
                        : "text-white"
                    }
                  `}
                >
                  {item.value}
                </h3>

              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl
                  bg-slate-800
                "
              >
                <Icon
                  size={20}
                  className="text-blue-400"
                />
              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
};

export default WalletStats;