import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

import useAllocation from "./useAllocation";

const COLORS = [
  "#3B82F6",
  "#8B5CF6",
  "#14B8A6",
  "#F59E0B",
  "#EF4444",
];

const AssetAllocationChart = () => {
  const { data, loading } =
    useAllocation();

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
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Asset Allocation
        </h2>

        <p className="text-slate-400 text-sm">
          Portfolio Distribution
        </p>
      </div>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <PieChart>

            <Pie
              data={data}
              dataKey="value"
              nameKey="asset"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={65}
              paddingAngle={3}
            >

              {data.map((entry, index) => (
                <Cell
                  key={entry.asset}
                  fill={
                    COLORS[
                      index %
                        COLORS.length
                    ]
                  }
                />
              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 space-y-3">

        {data.map((asset, index) => (

          <div
            key={asset.asset}
            className="
              flex
              items-center
              justify-between
            "
          >

            <div className="flex items-center gap-3">

              <span
                className="w-3 h-3 rounded-full"
                style={{
                  background:
                    COLORS[
                      index %
                        COLORS.length
                    ],
                }}
              />

              <span>
                {asset.asset}
              </span>

            </div>

            <span className="font-semibold">

              {asset.value}%

            </span>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AssetAllocationChart;