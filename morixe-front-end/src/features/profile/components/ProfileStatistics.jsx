import {
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  BarChart3,
} from "lucide-react";

const ProfileStatistics = ({
  statistics,
  loading = false,
}) => {
  const cards = [
    {
      title: "Portfolio Value",
      value: `$${statistics?.portfolioValue?.toLocaleString() ?? "0"}`,
      icon: Wallet,
      color: "bg-blue-600",
    },
    {
      title: "Transactions",
      value: statistics?.totalTransactions ?? 0,
      icon: BarChart3,
      color: "bg-purple-600",
    },
    {
      title: "Deposits",
      value: statistics?.totalDeposits ?? 0,
      icon: ArrowDownCircle,
      color: "bg-emerald-600",
    },
    {
      title: "Withdrawals",
      value: statistics?.totalWithdrawals ?? 0,
      icon: ArrowUpCircle,
      color: "bg-red-600",
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

export default ProfileStatistics;