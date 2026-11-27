import helpCenterData from "../data/helpCenterData";

class HelpCenterService {
  async getHelpCenterData() {
    return Promise.resolve(helpCenterData);
  }

  async getCategories() {
    return Promise.resolve(
      helpCenterData.categories
    );
  }

  async getArticles() {
    return Promise.resolve(
      helpCenterData.articles
    );
  }

  async getFAQs() {
    return Promise.resolve(
      helpCenterData.faqs
    );
  }

  async getQuickLinks() {
    return Promise.resolve(
      helpCenterData.quickLinks
    );
  }

  async getSupport() {
    return Promise.resolve(
      helpCenterData.support
    );
  }

  async searchArticles(query = "") {
    const keyword =
      query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(
        helpCenterData.articles
      );
    }

    return Promise.resolve(
      helpCenterData.articles.filter(
        (article) =>
          article.title
            .toLowerCase()
            .includes(keyword) ||
          article.description
            .toLowerCase()
            .includes(keyword)
      )
    );
  }
}

export default new HelpCenterService();