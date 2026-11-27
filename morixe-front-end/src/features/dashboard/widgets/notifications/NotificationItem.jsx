import {
  CheckCircle,
  AlertTriangle,
  XCircle,
  Bell,
} from "lucide-react";

const NotificationItem = ({
  notification,
}) => {
  const iconMap = {
    success: (
      <CheckCircle
        className="text-emerald-400"
        size={20}
      />
    ),
    warning: (
      <AlertTriangle
        className="text-yellow-400"
        size={20}
      />
    ),
    error: (
      <XCircle
        className="text-red-400"
        size={20}
      />
    ),
    info: (
      <Bell
        className="text-blue-400"
        size={20}
      />
    ),
  };

  return (
    <div
      className={`
        flex
        gap-4
        p-4
        rounded-xl
        border
        border-slate-800
        ${
          notification.read
            ? "bg-slate-900"
            : "bg-slate-800/60"
        }
      `}
    >
      <div>
        {iconMap[notification.type]}
      </div>

      <div className="flex-1">

        <div className="flex justify-between items-start">

          <h3 className="font-semibold">
            {notification.title}
          </h3>

          <span className="text-xs text-slate-500">
            {notification.time}
          </span>

        </div>

        <p className="text-sm text-slate-400 mt-1">
          {notification.message}
        </p>

      </div>
    </div>
  );
};

export default NotificationItem;