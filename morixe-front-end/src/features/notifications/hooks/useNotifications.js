import {
  useEffect,
  useMemo,
  useState,
} from "react";

import notificationService from "../services/notificationService";

const useNotifications = () => {
  const [loading, setLoading] =
    useState(true);

  const [
    notifications,
    setNotifications,
  ] = useState([]);

  const [filters, setFilters] =
    useState([]);

  const [search, setSearch] =
    useState("");

  const [activeFilter, setActiveFilter] =
    useState("All");

  useEffect(() => {
    loadNotifications();
  }, []);

  const loadNotifications =
    async () => {
      setLoading(true);

      try {
        const [
          notificationData,
          filterData,
        ] = await Promise.all([
          notificationService.getNotifications(),
          notificationService.getFilters(),
        ]);

        setNotifications(
          notificationData
        );

        setFilters(filterData);
      } finally {
        setLoading(false);
      }
    };

  const filteredNotifications =
    useMemo(() => {
      let data = [...notifications];

      if (activeFilter === "Unread") {
        data = data.filter(
          (item) => !item.read
        );
      } else if (
        activeFilter === "Read"
      ) {
        data = data.filter(
          (item) => item.read
        );
      } else if (
        activeFilter !== "All"
      ) {
        data = data.filter(
          (item) =>
            item.type ===
            activeFilter
        );
      }

      if (search.trim()) {
        const keyword =
          search.toLowerCase();

        data = data.filter(
          (item) =>
            item.title
              .toLowerCase()
              .includes(keyword) ||
            item.message
              .toLowerCase()
              .includes(keyword)
        );
      }

      return data;
    }, [
      notifications,
      search,
      activeFilter,
    ]);

  const unreadCount =
    notifications.filter(
      (item) => !item.read
    ).length;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              read: true,
            }
          : item
      )
    );

    notificationService.markAsRead(id);
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({
        ...item,
        read: true,
      }))
    );

    notificationService.markAllAsRead();
  };

  const deleteNotification = (
    id
  ) => {
    setNotifications((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );

    notificationService.deleteNotification(
      id
    );
  };

  return {
    loading,

    notifications,

    filteredNotifications,

    filters,

    search,
    setSearch,

    activeFilter,
    setActiveFilter,

    unreadCount,

    markAsRead,

    markAllAsRead,

    deleteNotification,

    reload:
      loadNotifications,
  };
};

export default useNotifications;