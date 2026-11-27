import {
  CheckCircle,
  Lock,
  Smartphone,
  Mail,
} from "lucide-react";

const ProfileSecurity = ({
  security,
}) => {
  if (!security) return null;

  const items = [
    {
      label: "Email Verification",
      value: security.emailVerified,
      icon: Mail,
    },
    {
      label: "Phone Verification",
      value: security.phoneVerified,
      icon: Smartphone,
    },
    {
      label: "Two-Factor Authentication",
      value: security.twoFactorEnabled,
      icon: Lock,
    },
    {
      label: "KYC Verification",
      value: security.kycVerified,
      icon: CheckCircle,
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Security
      </h2>

      <div className="mt-6 space-y-4">

        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
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
                  {item.label}
                </span>

              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  item.value
                    ? "bg-emerald-500/10 text-emerald-400"
                    : "bg-red-500/10 text-red-400"
                }`}
              >
                {item.value ? "Enabled" : "Disabled"}
              </span>

            </div>
          );
        })}

        <div className="border-t border-slate-800 pt-4">

          <p className="text-sm text-slate-400">
            Last Password Change
          </p>

          <p className="mt-1 text-white">
            {security.lastPasswordChange}
          </p>

        </div>

      </div>

    </div>
  );
};

export default ProfileSecurity;