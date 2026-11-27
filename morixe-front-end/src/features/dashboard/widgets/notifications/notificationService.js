import notificationData from "./notificationData";

class NotificationService {
  async getNotifications() {
    await new Promise((resolve) =>
      setTimeout(resolve, 300)
    );

    return notificationData;
  }
}

export default new NotificationService();