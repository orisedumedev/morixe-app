import {
  useState,
} from "react";

import {
  NotificationDetails,
  NotificationFilter,
  NotificationList,
  NotificationSearch,
  NotificationToolbar,
} from "../components";

import {
  useNotifications,
} from "../hooks";

const Notifications = () => {
  const {
    loading,

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
  } = useNotifications();

  const [
    selectedNotification,
    setSelectedNotification,
  ] = useState(null);

  const handleViewNotification = (
    notification
  ) => {
    setSelectedNotification(
      notification
    );

    if (!notification.read) {
      markAsRead(notification.id);
    }
  };

  if (loading) {
    return (
      <div className="flex h-[400px] items-center justify-center">

        <p className="text-slate-400">
          Loading notifications...
        </p>

      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <NotificationToolbar
        unreadCount={unreadCount}
        onMarkAllRead={
          markAllAsRead
        }
      />

      {/* Search */}

      <NotificationSearch
        value={search}
        onChange={setSearch}
      />

      {/* Filters */}

      <NotificationFilter
        filters={filters}
        activeFilter={
          activeFilter
        }
        onChange={
          setActiveFilter
        }
      />

      {/* Notification List */}

      <NotificationList
        notifications={
          filteredNotifications
        }
        onRead={
          markAsRead
        }
        onDelete={
          deleteNotification
        }
        onView={
          handleViewNotification
        }
      />
        {/* Notification Details */}
        {selectedNotification && (
        <NotificationDetails
            notification={selectedNotification}
            onClose={() =>
            setSelectedNotification(null)
            }
        />
        )}

    </div>
  );
};

export default Notifications;