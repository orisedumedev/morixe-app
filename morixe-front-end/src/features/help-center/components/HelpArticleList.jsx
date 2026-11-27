import HelpArticleCard from "./HelpArticleCard";

const HelpArticleList = ({
  articles,
}) => {
  return (
    <section>

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Knowledge Base
        </h2>

        <p className="mt-2 text-slate-400">
          Browse our latest guides and tutorials.
        </p>

      </div>

      {articles.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 py-16 text-center">

          <h3 className="text-lg font-semibold text-white">
            No Articles Found
          </h3>

          <p className="mt-2 text-slate-400">
            Try searching with another keyword.
          </p>

        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">

          {articles.map((article) => (
            <HelpArticleCard
              key={article.id}
              article={article}
            />
          ))}

        </div>
      )}

    </section>
  );
};

export default HelpArticleList;