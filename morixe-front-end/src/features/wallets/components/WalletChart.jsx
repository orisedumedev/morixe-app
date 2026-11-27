import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const defaultData = [
  { date: "Mon", value: 105000 },
  { date: "Tue", value: 108500 },
  { date: "Wed", value: 107800 },
  { date: "Thu", value: 111200 },
  { date: "Fri", value: 115600 },
  { date: "Sat", value: 118900 },
  { date: "Sun", value: 124587 },
];

const WalletChart = ({
  data = defaultData,
  loading = false,
}) => {
  if (loading) {
    return (
      <div
        className="
          flex
          h-[420px]
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-800
          bg-slate-900
          text-slate-400
        "
      >
        Loading portfolio chart...
      </div>
    );
  }

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

      <div className="mb-6">

        <h2 className="text-xl font-semibold text-white">
          Portfolio Performance
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Portfolio value over the last 7 days
        </p>

      </div>

      {/* Chart */}

      <div className="h-[340px]">

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
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity={0.45}
                />

                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />

              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#1e293b"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="date"
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
            />

            <YAxis
              stroke="#94a3b8"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) =>
                `$${(value / 1000).toFixed(0)}k`
              }
            />

            <Tooltip
              contentStyle={{
                background: "#0f172a",
                border: "1px solid #334155",
                borderRadius: "12px",
                color: "#fff",
              }}
              formatter={(value) => [
                `$${Number(value).toLocaleString()}`,
                "Portfolio",
              ]}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#portfolioGradient)"
              dot={false}
              activeDot={{
                r: 6,
              }}
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
};

export default WalletChart;