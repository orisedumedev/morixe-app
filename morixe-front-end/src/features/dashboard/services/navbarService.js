import navbarData from "../data/navbarData";

class NavbarService {
  async getNavbarData() {
    return Promise.resolve(navbarData);
  }

  async getUser() {
    return Promise.resolve(
      navbarData.user
    );
  }

  async getNotifications() {
    return Promise.resolve(
      navbarData.notifications
    );
  }

  async getMarkets() {
    return Promise.resolve(
      navbarData.markets
    );
  }

  async markNotificationRead(id) {
    navbarData.notifications =
      navbarData.notifications.map(
        (notification) =>
          notification.id === id
            ? {
                ...notification,
                read: true,
              }
            : notification
      );

    return Promise.resolve(
      navbarData.notifications
    );
  }

  async markAllRead() {
    navbarData.notifications =
      navbarData.notifications.map(
        (notification) => ({
          ...notification,
          read: true,
        })
      );

    return Promise.resolve(
      navbarData.notifications
    );
  }
}

export default new NavbarService();