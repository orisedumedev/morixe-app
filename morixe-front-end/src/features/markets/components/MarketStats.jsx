import {
  TrendingUp,
  Activity,
  DollarSign,
  Coins,
} from "lucide-react";

const MarketStats = ({ markets = [] }) => {
  const totalMarkets = markets.length;

  const gainers = markets.filter(
    (market) => market.change24h > 0
  ).length;

  const totalVolume = markets.reduce((total, market) => {
    const volume = parseFloat(
      market.volume24h.replace(/[BM]/g, "")
    );

    return total + volume;
  }, 0);

  const averagePrice =
    markets.length > 0
      ? (
          markets.reduce(
            (total, market) =>
              total + market.price,
            0
          ) / markets.length
        ).toFixed(2)
      : 0;

  const stats = [
    {
      title: "Markets",
      value: totalMarkets,
      icon: Coins,
      color: "text-blue-400",
    },
    {
      title: "Gainers",
      value: gainers,
      icon: TrendingUp,
      color: "text-emerald-400",
    },
    {
      title: "Avg Price",
      value: `$${Number(
        averagePrice
      ).toLocaleString()}`,
      icon: DollarSign,
      color: "text-yellow-400",
    },
    {
      title: "24H Volume",
      value: `${totalVolume.toFixed(1)}B`,
      icon: Activity,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
              p-6
            "
          >
            <div className="flex justify-between items-center">

              <div>

                <p className="text-sm text-slate-400">
                  {stat.title}
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  {stat.value}
                </h3>

              </div>

              <div
                className={`
                  h-12
                  w-12
                  rounded-xl
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  ${stat.color}
                `}
              >
                <Icon size={24} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MarketStats;