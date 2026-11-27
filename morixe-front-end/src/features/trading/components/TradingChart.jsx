import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const formatPrice = (value) =>
  `$${Number(value).toLocaleString()}`;

const TradingChart = ({
  symbol,
  data = [],
}) => {
  const firstPrice =
    data.length > 0 ? data[0].price : 0;

  const lastPrice =
    data.length > 0
      ? data[data.length - 1].price
      : 0;

  const positive =
    lastPrice >= firstPrice;

  const change =
    firstPrice === 0
      ? 0
      : (
          ((lastPrice - firstPrice) /
            firstPrice) *
          100
        ).toFixed(2);

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      {/* Header */}

      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">

        <div>

          <h2 className="text-xl font-semibold text-white">
            {symbol}
          </h2>

          <p className="text-slate-400 text-sm">
            Price Overview
          </p>

        </div>

        <div className="text-right">

          <h3 className="text-2xl font-bold text-white">
            {formatPrice(lastPrice)}
          </h3>

          <div
            className={`
              flex
              items-center
              justify-end
              gap-1
              text-sm
              font-medium
              ${
                positive
                  ? "text-emerald-400"
                  : "text-red-400"
              }
            `}
          >
            {positive ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}

            {positive ? "+" : ""}
            {change}%

          </div>

        </div>

      </div>

      {/* Chart */}

      <div className="h-[380px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>

            <defs>

              <linearGradient
                id="priceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={
                    positive
                      ? "#10B981"
                      : "#EF4444"
                  }
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor={
                    positive
                      ? "#10B981"
                      : "#EF4444"
                  }
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1E293B"
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="time"
              tick={{
                fill: "#94A3B8",
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#94A3B8",
              }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) =>
                `$${(
                  value / 1000
                ).toFixed(0)}k`
              }
            />

            <Tooltip
              contentStyle={{
                background: "#0F172A",
                border:
                  "1px solid #334155",
                borderRadius: "12px",
              }}
              formatter={(value) => [
                formatPrice(value),
                "Price",
              ]}
            />

            <Area
              type="monotone"
              dataKey="price"
              stroke={
                positive
                  ? "#10B981"
                  : "#EF4444"
              }
              strokeWidth={3}
              fill="url(#priceGradient)"
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default TradingChart;