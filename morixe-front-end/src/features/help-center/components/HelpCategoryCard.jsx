import {
  BadgeCheck,
  Code2,
  Shield,
  User,
  Wallet,
} from "lucide-react";

import {
  CandlestickChart,
} from "lucide-react";

const icons = {
  User,
  Wallet,
  CandlestickChart,
  Shield,
  BadgeCheck,
  Code2,
};

const HelpCategoryCard = ({
  category,
  active,
  onSelect,
}) => {
  const Icon =
    icons[category.icon] ||
    User;

  return (
    <button
      type="button"
      onClick={() =>
        onSelect(category.name)
      }
      className={`rounded-2xl border p-6 text-left transition ${
        active
          ? "border-blue-500 bg-blue-600/10"
          : "border-slate-800 bg-slate-900 hover:border-slate-600"
      }`}
    >

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">

        <Icon
          size={24}
          className="text-blue-400"
        />

      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {category.name}
      </h3>

      <p className="mt-2 text-sm text-slate-400">
        {category.description}
      </p>

      <div className="mt-5">

        <span className="rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-400">

          {category.articles} Articles

        </span>

      </div>

    </button>
  );
};

export default HelpCategoryCard;