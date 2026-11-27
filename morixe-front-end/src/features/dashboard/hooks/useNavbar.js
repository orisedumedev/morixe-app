import {
  useEffect,
  useMemo,
  useState,
} from "react";

import navbarService from "../services/navbarService";

const useNavbar = () => {
  const [loading, setLoading] =
    useState(true);

  const [user, setUser] =
    useState(null);

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [markets, setMarkets] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [theme, setTheme] =
    useState("Dark");

  const [language, setLanguage] =
    useState("English");

  useEffect(() => {
    loadNavbar();
  }, []);

  const loadNavbar =
    async () => {
      setLoading(true);

      try {
        const data =
          await navbarService.getNavbarData();

        setUser(data.user);

        setNotifications(
          data.notifications
        );

        setMarkets(
          data.markets
        );
      } finally {
        setLoading(false);
      }
    };

  const unreadCount =
    useMemo(
      () =>
        notifications.filter(
          (notification) =>
            !notification.read
        ).length,
      [notifications]
    );

  const markAsRead =
    async (id) => {
      const updated =
        await navbarService.markNotificationRead(
          id
        );

      setNotifications(updated);
    };

  const markAllRead =
    async () => {
      const updated =
        await navbarService.markAllRead();

      setNotifications(updated);
    };

  return {
    loading,

    user,

    notifications,

    markets,

    unreadCount,

    search,
    setSearch,

    theme,
    setTheme,

    language,
    setLanguage,

    markAsRead,

    markAllRead,

    reload:
      loadNavbar,
  };
};

export default useNavbar;