import {
  Bell,
  Globe,
  Moon,
  DollarSign,
} from "lucide-react";

const ProfilePreferences = ({
  preferences,
}) => {
  if (!preferences) return null;

  const settings = [
    {
      icon: Globe,
      label: "Language",
      value: preferences.language,
    },
    {
      icon: DollarSign,
      label: "Currency",
      value: preferences.currency,
    },
    {
      icon: Moon,
      label: "Theme",
      value: preferences.theme,
    },
    {
      icon: Bell,
      label: "Email Notifications",
      value: preferences.emailNotifications
        ? "Enabled"
        : "Disabled",
    },
    {
      icon: Bell,
      label: "SMS Notifications",
      value: preferences.smsNotifications
        ? "Enabled"
        : "Disabled",
    },
    {
      icon: Globe,
      label: "Timezone",
      value: preferences.timezone,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Preferences
      </h2>

      <div className="mt-6 space-y-4">

        {settings.map((setting) => {
          const Icon = setting.icon;

          return (
            <div
              key={setting.label}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >
              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700">
                  <Icon
                    size={18}
                    className="text-blue-400"
                  />
                </div>

                <span className="text-white">
                  {setting.label}
                </span>

              </div>

              <span className="font-medium text-slate-300">
                {setting.value}
              </span>

            </div>
          );
        })}

      </div>

    </div>
  );
};

export default ProfilePreferences;