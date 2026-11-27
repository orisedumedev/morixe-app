import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PortfolioAllocationChart = ({
  data = [],
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-semibold text-white">
        Asset Allocation
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>

            <Pie
              data={data}
              dataKey="percentage"
              nameKey="symbol"
              outerRadius={110}
              innerRadius={60}
            >
              {data.map((item) => (
                <Cell
                  key={item.symbol}
                  fill={item.color}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>
        </ResponsiveContainer>

      </div>

      <div className="mt-6 grid gap-3">

        {data.map((item) => (
          <div
            key={item.symbol}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">

              <div
                className="h-3 w-3 rounded-full"
                style={{
                  background: item.color,
                }}
              />

              <span className="text-white">
                {item.symbol}
              </span>

            </div>

            <span className="text-slate-400">
              {item.percentage}%
            </span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default PortfolioAllocationChart;