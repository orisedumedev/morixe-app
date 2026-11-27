import {
  useEffect,
  useMemo,
  useState,
} from "react";

import helpCenterService from "../services/helpCenterService";

const useHelpCenter = () => {
  const [loading, setLoading] =
    useState(true);

  const [
    categories,
    setCategories,
  ] = useState([]);

  const [
    articles,
    setArticles,
  ] = useState([]);

  const [faqs, setFaqs] =
    useState([]);

  const [
    quickLinks,
    setQuickLinks,
  ] = useState([]);

  const [support, setSupport] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [
    activeCategory,
    setActiveCategory,
  ] = useState("All");

  useEffect(() => {
    loadHelpCenter();
  }, []);

  const loadHelpCenter =
    async () => {
      setLoading(true);

      try {
        const data =
          await helpCenterService.getHelpCenterData();

        setCategories(
          data.categories
        );

        setArticles(
          data.articles
        );

        setFaqs(data.faqs);

        setQuickLinks(
          data.quickLinks
        );

        setSupport(
          data.support
        );
      } finally {
        setLoading(false);
      }
    };

  const filteredArticles =
    useMemo(() => {
      let data = [...articles];

      if (
        activeCategory !== "All"
      ) {
        data = data.filter(
          (article) =>
            article.category ===
            activeCategory
        );
      }

      if (search.trim()) {
        const keyword =
          search.toLowerCase();

        data = data.filter(
          (article) =>
            article.title
              .toLowerCase()
              .includes(keyword) ||
            article.description
              .toLowerCase()
              .includes(keyword)
        );
      }

      return data;
    }, [
      articles,
      search,
      activeCategory,
    ]);

  const popularArticles =
    useMemo(
      () =>
        articles.filter(
          (article) =>
            article.popular
        ),
      [articles]
    );

  return {
    loading,

    categories,

    articles,

    filteredArticles,

    popularArticles,

    faqs,

    quickLinks,

    support,

    search,
    setSearch,

    activeCategory,
    setActiveCategory,

    reload:
      loadHelpCenter,
  };
};

export default useHelpCenter;