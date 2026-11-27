import { useEffect, useState } from "react";

import notificationService from "./notificationService";

export default function useNotifications() {
  const [notifications, setNotifications] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadNotifications();
  }, []);

  async function loadNotifications() {
    try {
      const data =
        await notificationService.getNotifications();

      setNotifications(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    notifications,
    loading,
    refresh: loadNotifications,
  };
}