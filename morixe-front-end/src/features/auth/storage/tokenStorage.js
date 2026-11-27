import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from "./authConstants";

class TokenStorage {
  // ==========================
  // Access Token
  // ==========================

  saveAccessToken(token) {
    localStorage.setItem(
      ACCESS_TOKEN_KEY,
      token
    );
  }

  getAccessToken() {
    return localStorage.getItem(
      ACCESS_TOKEN_KEY
    );
  }

  removeAccessToken() {
    localStorage.removeItem(
      ACCESS_TOKEN_KEY
    );
  }

  // ==========================
  // Refresh Token
  // ==========================

  saveRefreshToken(token) {
    localStorage.setItem(
      REFRESH_TOKEN_KEY,
      token
    );
  }

  getRefreshToken() {
    return localStorage.getItem(
      REFRESH_TOKEN_KEY
    );
  }

  removeRefreshToken() {
    localStorage.removeItem(
      REFRESH_TOKEN_KEY
    );
  }

  // ==========================
  // Clear Everything
  // ==========================

  clear() {
    this.removeAccessToken();
    this.removeRefreshToken();
  }
}

export default new TokenStorage();