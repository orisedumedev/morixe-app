import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const PortfolioPerformanceChart = ({
  data = [],
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        Portfolio Performance
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart data={data}>

            <CartesianGrid
              stroke="#1e293b"
            />

            <XAxis
              dataKey="date"
              stroke="#94a3b8"
            />

            <YAxis
              stroke="#94a3b8"
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.2}
            />

          </AreaChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default PortfolioPerformanceChart;