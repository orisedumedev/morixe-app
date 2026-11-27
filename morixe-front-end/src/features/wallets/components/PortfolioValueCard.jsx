import {
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const PortfolioValueCard = ({
  value = 0,
  change = 0,
}) => {
  const positive = change >= 0;

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
      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-400">
            Portfolio Value
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            ${value.toLocaleString()}
          </h2>

          <div
            className={`
              mt-3
              inline-flex
              items-center
              gap-2
              rounded-lg
              px-3
              py-1
              text-sm
              font-medium

              ${
                positive
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-red-500/10 text-red-400"
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
    </div>
  );
};

export default PortfolioValueCard;