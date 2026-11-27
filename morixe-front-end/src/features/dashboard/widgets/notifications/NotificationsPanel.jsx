import useNotifications from "./useNotifications";

import NotificationItem from "./NotificationItem";

const NotificationsPanel = () => {
  const {
    notifications,
    loading,
  } = useNotifications();

  if (loading) {
    return (
      <div
        className="
          h-80
          rounded-2xl
          bg-slate-900
          animate-pulse
        "
      />
    );
  }

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-xl font-semibold">
            Notifications
          </h2>

          <p className="text-slate-400 text-sm">
            Latest account activity
          </p>

        </div>

        <span
          className="
            bg-blue-600
            text-white
            text-xs
            px-3
            py-1
            rounded-full
          "
        >
          {
            notifications.filter(
              (item) => !item.read
            ).length
          }
        </span>

      </div>

      <div className="space-y-4">

        {notifications.map(
          (notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          )
        )}

      </div>

    </div>
  );
};

export default NotificationsPanel;