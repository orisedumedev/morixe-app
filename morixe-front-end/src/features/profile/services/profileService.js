import profileData from "../data/profileData";

class ProfileService {
  async getProfile() {
    return Promise.resolve(profileData);
  }

  async getUser() {
    return Promise.resolve(profileData.user);
  }

  async getStatistics() {
    return Promise.resolve(profileData.statistics);
  }

  async getSecurity() {
    return Promise.resolve(profileData.security);
  }

  async getPreferences() {
    return Promise.resolve(profileData.preferences);
  }

  async getActivity() {
    return Promise.resolve(profileData.activity);
  }

  async getVerification() {
    return Promise.resolve(profileData.verification);
  }

  async updateProfile(updatedUser) {
    return Promise.resolve({
      ...profileData.user,
      ...updatedUser,
    });
  }
}

export default new ProfileService();