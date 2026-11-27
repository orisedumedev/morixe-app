import HelpCategoryCard from "./HelpCategoryCard";

const HelpCategoryGrid = ({
  categories,
  activeCategory,
  onSelect,
}) => {
  return (
    <section>

      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Browse Categories
        </h2>

        <p className="mt-2 text-slate-400">
          Choose a category to quickly find the
          information you're looking for.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {categories.map(
          (category) => (
            <HelpCategoryCard
              key={category.id}
              category={category}
              active={
                activeCategory ===
                category.name
              }
              onSelect={onSelect}
            />
          )
        )}

      </div>

    </section>
  );
};

export default HelpCategoryGrid;