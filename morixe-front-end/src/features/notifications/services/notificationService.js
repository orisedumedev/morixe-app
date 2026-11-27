import notificationData from "../data/notificationData";

class NotificationService {
  async getNotifications() {
    return Promise.resolve(
      notificationData.notifications
    );
  }

  async getFilters() {
    return Promise.resolve(
      notificationData.filters
    );
  }

  async getNotification(id) {
    return Promise.resolve(
      notificationData.notifications.find(
        (notification) =>
          notification.id === id
      )
    );
  }

  async markAsRead(id) {
    return Promise.resolve(id);
  }

  async markAllAsRead() {
    return Promise.resolve(true);
  }

  async deleteNotification(id) {
    return Promise.resolve(id);
  }

  async searchNotifications(
    query = ""
  ) {
    const keyword =
      query.trim().toLowerCase();

    if (!keyword) {
      return Promise.resolve(
        notificationData.notifications
      );
    }

    return Promise.resolve(
      notificationData.notifications.filter(
        (notification) =>
          notification.title
            .toLowerCase()
            .includes(keyword) ||
          notification.message
            .toLowerCase()
            .includes(keyword)
      )
    );
  }
}

export default new NotificationService();