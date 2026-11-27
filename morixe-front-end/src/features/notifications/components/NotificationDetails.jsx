const NotificationDetails = ({
  notification,
  onClose,
}) => {
  if (!notification) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          Notification Details
        </h2>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white"
        >
          Close
        </button>

      </div>

      <div className="mt-6 space-y-5">

        <div>

          <p className="text-sm text-slate-400">
            Title
          </p>

          <h3 className="mt-1 text-lg font-semibold text-white">
            {notification.title}
          </h3>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Category
          </p>

          <p className="mt-1 text-white">
            {notification.type}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Message
          </p>

          <p className="mt-1 leading-7 text-white">
            {notification.message}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Date
          </p>

          <p className="mt-1 text-white">
            {notification.date}
          </p>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Priority
          </p>

          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
              notification.priority === "high"
                ? "bg-red-500/10 text-red-400"
                : "bg-slate-700 text-slate-300"
            }`}
          >
            {notification.priority}
          </span>

        </div>

        <div>

          <p className="text-sm text-slate-400">
            Status
          </p>

          <span
            className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-medium ${
              notification.read
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-blue-500/10 text-blue-400"
            }`}
          >
            {notification.read
              ? "Read"
              : "Unread"}
          </span>

        </div>

      </div>

    </div>
  );
};

export default NotificationDetails;