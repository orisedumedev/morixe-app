import {
  ArrowDownLeft,
  ArrowUpRight,
  TrendingUp,
  Receipt,
} from "lucide-react";

const TransactionStats = ({
  transactions = [],
  loading = false,
}) => {
  const total = transactions.length;

  const deposits = transactions.filter(
    (transaction) =>
      transaction.type === "Deposit"
  ).length;

  const withdrawals = transactions.filter(
    (transaction) =>
      transaction.type === "Withdraw"
  ).length;

  const trades = transactions.filter(
    (transaction) =>
      transaction.type === "Buy" ||
      transaction.type === "Sell"
  ).length;

  const stats = [
    {
      title: "Total Transactions",
      value: total,
      icon: Receipt,
      color: "bg-blue-600",
    },
    {
      title: "Deposits",
      value: deposits,
      icon: ArrowDownLeft,
      color: "bg-emerald-600",
    },
    {
      title: "Withdrawals",
      value: withdrawals,
      icon: ArrowUpRight,
      color: "bg-red-600",
    },
    {
      title: "Trades",
      value: trades,
      icon: TrendingUp,
      color: "bg-violet-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
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
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {loading ? "--" : stat.value}
                </h2>

              </div>

              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  ${stat.color}
                `}
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

export default TransactionStats;