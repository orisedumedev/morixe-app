import {
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

import { Card } from "@/features/dashboard/components";

const PortfolioCard = ({
  title,
  value,
  change,
  positive,
  icon: Icon,
}) => {
  return (
    <Card
      className="
        hover:border-blue-500/40
        transition-all
        duration-300
      "
    >
      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>

        </div>

        <div
          className="
            h-12
            w-12
            rounded-xl
            bg-blue-500/10
            text-blue-400
            flex
            items-center
            justify-center
          "
        >
          <Icon size={24} />
        </div>

      </div>

      <div
        className={`
          mt-6
          flex
          items-center
          gap-2
          text-sm
          font-medium
          ${
            positive
              ? "text-green-400"
              : "text-red-400"
          }
        `}
      >
        {positive ? (
          <ArrowUpRight size={16} />
        ) : (
          <ArrowDownRight size={16} />
        )}

        {change}
      </div>

    </Card>
  );
};

export default PortfolioCard;