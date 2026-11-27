import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

import publicNavbarService from "../services/publicNavbarService";

const PublicNavbarContext = createContext(null);

export const PublicNavbarProvider = ({
  children,
}) => {
  /* -------------------------------- */
  /* State                            */
  /* -------------------------------- */

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [search, setSearch] =
    useState("");

  const [theme, setTheme] =
    useState(
      publicNavbarService.getSettings()
        .defaultTheme
    );

  const [language, setLanguage] =
    useState(
      publicNavbarService.getSettings()
        .defaultLanguage
    );

  const [activeRoute, setActiveRoute] =
    useState("/");

  /* -------------------------------- */
  /* Static Data                      */
  /* -------------------------------- */

  const navigation =
    publicNavbarService.getNavigation();

  const announcement =
    publicNavbarService.getAnnouncement();

  const languages =
    publicNavbarService.getLanguages();

  /* -------------------------------- */
  /* Actions                          */
  /* -------------------------------- */

  const openMobileMenu =
    useCallback(() => {
      setMobileMenuOpen(true);
    }, []);

  const closeMobileMenu =
    useCallback(() => {
      setMobileMenuOpen(false);
    }, []);

  const toggleMobileMenu =
    useCallback(() => {
      setMobileMenuOpen((prev) => !prev);
    }, []);

  const toggleTheme =
    useCallback(() => {
      setTheme((prev) =>
        prev === "dark"
          ? "light"
          : "dark"
      );
    }, []);

  /* -------------------------------- */
  /* Context Value                    */
  /* -------------------------------- */

  const value = useMemo(
    () => ({
      /* data */

      navigation,
      announcement,
      languages,

      /* state */

      mobileMenuOpen,
      search,
      theme,
      language,
      activeRoute,

      /* setters */

      setSearch,
      setTheme,
      setLanguage,
      setActiveRoute,

      /* actions */

      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu,
      toggleTheme,
    }),
    [
      navigation,
      announcement,
      languages,

      mobileMenuOpen,
      search,
      theme,
      language,
      activeRoute,

      openMobileMenu,
      closeMobileMenu,
      toggleMobileMenu,
      toggleTheme,
    ]
  );

  return (
    <PublicNavbarContext.Provider
      value={value}
    >
      {children}
    </PublicNavbarContext.Provider>
  );
};

export const usePublicNavbarContext =
  () => {
    const context = useContext(
      PublicNavbarContext
    );

    if (!context) {
      throw new Error(
        "usePublicNavbarContext must be used within PublicNavbarProvider."
      );
    }

    return context;
  };

export default PublicNavbarProvider;