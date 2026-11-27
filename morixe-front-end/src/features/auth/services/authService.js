import api from "@/api";

import {
  tokenStorage,
  authStorage,
} from "../storage";

class AuthService {
  /**
   * Login
   */
  async login(credentials) {
    const { data } = await api.post(
      "/auth/login",
      credentials
    );

    tokenStorage.saveAccessToken(data.accessToken);
    tokenStorage.saveRefreshToken(data.refreshToken);

    authStorage.saveUser(data.user);

    return data;
  }

  /**
   * Register
   */
  async register(userData) {
    const { data } = await api.post(
      "/auth/register",
      userData
    );

    // If your backend automatically logs users in
    if (data.accessToken) {
      tokenStorage.saveAccessToken(data.accessToken);
    }

    if (data.refreshToken) {
      tokenStorage.saveRefreshToken(data.refreshToken);
    }

    if (data.user) {
      authStorage.saveUser(data.user);
    }

    return data;
  }

  /**
   * Forgot Password
   */
  async forgotPassword(payload) {
    const { data } = await api.post(
      "/auth/forgot-password",
      payload
    );

    return data;
  }

  /**
   * Reset Password
   */
  async resetPassword(payload) {
    const { data } = await api.post(
      "/auth/reset-password",
      payload
    );

    return data;
  }

  /**
   * Verify Email
   */
  async verifyEmail(token) {
    const { data } = await api.post(
      "/auth/verify-email",
      { token }
    );

    return data;
  }

  /**
   * Refresh Access Token
   */
  async refreshToken() {
    const refreshToken =
      tokenStorage.getRefreshToken();

    if (!refreshToken) {
      throw new Error("Refresh token not found.");
    }

    const { data } = await api.post(
      "/auth/refresh-token",
      { refreshToken }
    );

    tokenStorage.saveAccessToken(
      data.accessToken
    );

    if (data.refreshToken) {
      tokenStorage.saveRefreshToken(
        data.refreshToken
      );
    }

    return data;
  }

  /**
   * Logout
   */
  async logout() {
    try {
      const refreshToken =
        tokenStorage.getRefreshToken();

      if (refreshToken) {
        await api.post("/auth/logout", {
          refreshToken,
        });
      }
    } finally {
      this.clearAuth();
    }
  }

  /**
   * Current User
   */
  async getCurrentUser() {
    const { data } = await api.get(
      "/auth/me"
    );

    authStorage.saveUser(data);

    return data;
  }

  /**
   * Returns the stored user
   */
  getStoredUser() {
    return authStorage.getUser();
  }

  /**
   * Returns whether the user is authenticated
   */
  isAuthenticated() {
    return !!tokenStorage.getAccessToken();
  }

  /**
   * Clears all authentication data
   */
  clearAuth() {
    tokenStorage.clear();
    authStorage.clear();
  }
}

export default new AuthService();