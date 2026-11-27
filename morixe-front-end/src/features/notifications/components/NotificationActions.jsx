import {
  Check,
  Eye,
  Trash2,
} from "lucide-react";

const NotificationActions = ({
  notification,
  onRead,
  onDelete,
  onView,
}) => {
  return (
    <div className="flex items-center gap-2">

      {!notification.read && (
        <button
          type="button"
          onClick={() =>
            onRead(notification.id)
          }
          className="rounded-lg p-2 text-emerald-400 transition hover:bg-emerald-500/10"
          title="Mark as read"
        >
          <Check size={18} />
        </button>
      )}

      <button
        type="button"
        onClick={() =>
          onView?.(notification)
        }
        className="rounded-lg p-2 text-blue-400 transition hover:bg-blue-500/10"
        title="View"
      >
        <Eye size={18} />
      </button>

      <button
        type="button"
        onClick={() =>
          onDelete(notification.id)
        }
        className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
        title="Delete"
      >
        <Trash2 size={18} />
      </button>

    </div>
  );
};

export default NotificationActions;