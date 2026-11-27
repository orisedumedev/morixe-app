import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import usePerformance from "./usePerformance";
import PerformanceTooltip from "./PerformanceTooltip";

const PortfolioPerformanceChart = () => {
  const { data, loading } =
    usePerformance();

  if (loading) {
    return (
      <div
        className="
          h-96
          rounded-2xl
          bg-slate-900
          animate-pulse
        "
      />
    );
  }

  return (
    <div
      className="
        rounded-2xl
        bg-slate-900
        border
        border-slate-800
        p-6
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Portfolio Performance
        </h2>

        <p className="text-slate-400 text-sm">
          Last 12 Months
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="portfolioGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563EB"
                  stopOpacity={0.4}
                />

                <stop
                  offset="95%"
                  stopColor="#2563EB"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#1E293B"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis
              stroke="#94A3B8"
            />

            <Tooltip
              content={<PerformanceTooltip />}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#portfolioGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PortfolioPerformanceChart;