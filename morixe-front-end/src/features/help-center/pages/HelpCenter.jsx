import {
  ContactSupportCard,
  FAQList,
  HelpArticleList,
  HelpCategoryGrid,
  HelpCenterHero,
  HelpQuickLinks,
  HelpSearch,
} from "../components";

import {
  useHelpCenter,
} from "../hooks";

const HelpCenter = () => {
  const {
    loading,

    categories,

    filteredArticles,

    faqs,

    quickLinks,

    support,

    search,
    setSearch,

    activeCategory,
    setActiveCategory,
  } = useHelpCenter();

  const handleCategorySelect = (
    category
  ) => {
    setActiveCategory(category);
  };

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">
        <p className="text-slate-400">
          Loading Help Center...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Hero */}

      <HelpCenterHero />

      {/* Search */}

      <HelpSearch
        value={search}
        onChange={setSearch}
      />

      {/* Categories */}

      <HelpCategoryGrid
        categories={categories}
        activeCategory={activeCategory}
        onSelect={handleCategorySelect}
      />

      {/* Active Category */}

      {activeCategory !== "All" && (
        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 px-6 py-4">

          <h2 className="text-xl font-semibold text-white">
            {activeCategory}
          </h2>

          <p className="mt-2 text-slate-400">
            Showing articles from the{" "}
            <span className="font-medium text-blue-400">
              {activeCategory}
            </span>{" "}
            category.
          </p>

        </div>
      )}

      {/* Articles */}

      <HelpArticleList
        articles={filteredArticles}
      />

      {/* FAQ */}

      <FAQList
        faqs={faqs}
      />

      {/* Contact Support */}

      <ContactSupportCard
        support={support}
      />

      {/* Quick Links */}

      <HelpQuickLinks
        links={quickLinks}
      />

    </div>
  );
};

export default HelpCenter;