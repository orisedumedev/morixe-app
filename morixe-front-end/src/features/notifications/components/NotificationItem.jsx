import {
  Bell,
  Shield,
  Wallet,
  LineChart,
  Settings,
} from "lucide-react";

import NotificationActions from "./NotificationActions";

const icons = {
  Trading: LineChart,
  Wallet: Wallet,
  Security: Shield,
  System: Settings,
};

const NotificationItem = ({
  notification,
  onRead,
  onDelete,
  onView,
}) => {
  const Icon =
    icons[notification.type] ||
    Bell;

  return (
    <div
      className={`rounded-2xl border p-5 transition ${
        notification.read
          ? "border-slate-800 bg-slate-900"
          : "border-blue-600/40 bg-blue-600/5"
      }`}
    >

      <div className="flex items-start justify-between gap-4">

        <div className="flex gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800">
            <Icon
              size={22}
              className="text-blue-400"
            />
          </div>

          <div>

            <div className="flex flex-wrap items-center gap-3">

              <h3 className="font-semibold text-white">
                {notification.title}
              </h3>

              {!notification.read && (
                <span className="h-2 w-2 rounded-full bg-blue-500" />
              )}

            </div>

            <p className="mt-2 text-sm text-slate-400">
              {notification.message}
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">

              <span>
                {notification.type}
              </span>

              <span>
                {notification.date}
              </span>

              <span
                className={`rounded-full px-2 py-1 ${
                  notification.priority ===
                  "high"
                    ? "bg-red-500/10 text-red-400"
                    : "bg-slate-700 text-slate-300"
                }`}
              >
                {notification.priority}
              </span>

            </div>

          </div>

        </div>

        <NotificationActions
          notification={notification}
          onRead={onRead}
          onDelete={onDelete}
          onView={onView}
        />

      </div>

    </div>
  );
};

export default NotificationItem;