const Toggle = ({
  label,
  description,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">

      <div>

        <h3 className="font-medium text-white">
          {label}
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          {description}
        </p>

      </div>

      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`relative h-7 w-12 rounded-full transition ${
          checked
            ? "bg-blue-600"
            : "bg-slate-600"
        }`}
      >
        <span
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            checked
              ? "left-6"
              : "left-1"
          }`}
        />
      </button>

    </div>
  );
};

const NotificationSettings = ({
  notifications,
  onChange,
}) => {
  if (!notifications) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Notification Settings
      </h2>

      <div className="mt-6 space-y-4">

        <Toggle
          label="Email Notifications"
          description="Receive updates by email."
          checked={notifications.email}
          onChange={(value) =>
            onChange("email", value)
          }
        />

        <Toggle
          label="SMS Notifications"
          description="Receive SMS alerts."
          checked={notifications.sms}
          onChange={(value) =>
            onChange("sms", value)
          }
        />

        <Toggle
          label="Push Notifications"
          description="Receive browser notifications."
          checked={notifications.push}
          onChange={(value) =>
            onChange("push", value)
          }
        />

        <Toggle
          label="Marketing Emails"
          description="Receive promotions and newsletters."
          checked={notifications.marketing}
          onChange={(value) =>
            onChange("marketing", value)
          }
        />

      </div>

    </div>
  );
};

export default NotificationSettings;