import { Bell, CheckCheck } from "lucide-react";

const NotificationToolbar = ({
  unreadCount = 0,
  onMarkAllRead,
}) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:flex-row lg:items-center lg:justify-between">

      <div className="flex items-center gap-4">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
          <Bell
            size={24}
            className="text-blue-400"
          />
        </div>

        <div>

          <h1 className="text-2xl font-bold text-white">
            Notifications
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            {unreadCount} unread notification
            {unreadCount !== 1 && "s"}
          </p>

        </div>

      </div>

      <button
        type="button"
        onClick={onMarkAllRead}
        className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
      >
        <CheckCheck size={18} />

        Mark All Read

      </button>

    </div>
  );
};

export default NotificationToolbar;