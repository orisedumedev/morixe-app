import NotificationItem from "./NotificationItem";
import NotificationEmpty from "./NotificationEmpty";

const NotificationList = ({
  notifications,
  onRead,
  onDelete,
  onView,
}) => {
  if (!notifications.length) {
    return (
      <NotificationEmpty />
    );
  }

  return (
    <div className="space-y-4">

      {notifications.map(
        (notification) => (
          <NotificationItem
            key={notification.id}
            notification={
              notification
            }
            onRead={onRead}
            onDelete={onDelete}
            onView={onView}
          />
        )
      )}

    </div>
  );
};

export default NotificationList;