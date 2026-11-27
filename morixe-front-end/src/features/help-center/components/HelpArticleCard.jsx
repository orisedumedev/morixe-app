import {
  ArrowRight,
  Eye,
  Star,
} from "lucide-react";

const HelpArticleCard = ({
  article,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500">

      <div className="flex items-start justify-between">

        <span className="rounded-full bg-blue-600/10 px-3 py-1 text-xs font-medium text-blue-400">

          {article.category}

        </span>

        {article.popular && (
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        )}

      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {article.title}
      </h3>

      <p className="mt-3 leading-7 text-slate-400">
        {article.description}
      </p>

      <div className="mt-6 flex items-center justify-between">

        <div className="flex items-center gap-2 text-sm text-slate-500">

          <Eye size={16} />

          {article.views.toLocaleString()} views

        </div>

        <button
          type="button"
          className="flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          Read More

          <ArrowRight size={16} />

        </button>

      </div>

    </div>
  );
};

export default HelpArticleCard;