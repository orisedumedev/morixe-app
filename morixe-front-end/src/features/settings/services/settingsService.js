import settingsData from "../data/settingsData";

class SettingsService {
  async getSettings() {
    return Promise.resolve(settingsData);
  }

  async getGeneral() {
    return Promise.resolve(settingsData.general);
  }

  async getSecurity() {
    return Promise.resolve(settingsData.security);
  }

  async getNotifications() {
    return Promise.resolve(settingsData.notifications);
  }

  async getAppearance() {
    return Promise.resolve(settingsData.appearance);
  }

  async getLanguage() {
    return Promise.resolve(settingsData.language);
  }

  async getCurrency() {
    return Promise.resolve(settingsData.currency);
  }

  async getPassword() {
    return Promise.resolve(settingsData.password);
  }

  async updateGeneral(data) {
    return Promise.resolve(data);
  }

  async updateSecurity(data) {
    return Promise.resolve(data);
  }

  async updateNotifications(data) {
    return Promise.resolve(data);
  }

  async updateAppearance(data) {
    return Promise.resolve(data);
  }

  async updateLanguage(data) {
    return Promise.resolve(data);
  }

  async updateCurrency(data) {
    return Promise.resolve(data);
  }

  async updatePassword(data) {
    return Promise.resolve(data);
  }
}

export default new SettingsService();