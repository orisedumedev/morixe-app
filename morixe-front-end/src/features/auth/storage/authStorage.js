import { USER_KEY } from "./authConstants";

class AuthStorage {
  /**
   * Save authenticated user
   */
  saveUser(user) {
    localStorage.setItem(
      USER_KEY,
      JSON.stringify(user)
    );
  }

  /**
   * Get authenticated user
   */
  getUser() {
    const user = localStorage.getItem(USER_KEY);

    if (!user) return null;

    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  }

  /**
   * Update user information
   */
  updateUser(updates) {
    const currentUser = this.getUser();

    if (!currentUser) return;

    this.saveUser({
      ...currentUser,
      ...updates,
    });
  }

  /**
   * Check whether a user exists in storage
   */
  isAuthenticated() {
    return !!this.getUser();
  }

  /**
   * Remove user
   */
  removeUser() {
    localStorage.removeItem(USER_KEY);
  }

  /**
   * Clear authentication storage
   */
  clear() {
    this.removeUser();
  }
}

export default new AuthStorage();