import { useCallback, useEffect, useMemo, useState } from "react";

import AuthContext from "./AuthContext";

import authStorage from "../storage/authStorage";
import tokenStorage from "../storage/tokenStorage";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /**
   * Restore authentication when the app loads
   */
  const initializeAuth = useCallback(() => {
    const accessToken = tokenStorage.getAccessToken();

    const currentUser = authStorage.getUser();

    if (accessToken && currentUser) {
      setUser(currentUser);
      setIsAuthenticated(true);
    } else {
      setUser(null);
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    initializeAuth();
  }, [initializeAuth]);

  /**
   * Login
   */
  const login = useCallback((userData) => {
    authStorage.saveUser(userData);

    setUser(userData);

    setIsAuthenticated(true);
  }, []);

  /**
   * Logout
   */
  const logout = useCallback(() => {
    tokenStorage.clear();

    authStorage.clear();

    setUser(null);

    setIsAuthenticated(false);
  }, []);

  /**
   * Update user profile
   */
  const updateUser = useCallback((updates) => {
    authStorage.updateUser(updates);

    setUser((prev) => ({
      ...prev,
      ...updates,
    }));
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated,
      login,
      logout,
      updateUser,
    }),
    [
      user,
      loading,
      isAuthenticated,
      login,
      logout,
      updateUser,
    ]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}