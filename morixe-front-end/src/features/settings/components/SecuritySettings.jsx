import {
  ShieldCheck,
  Mail,
  Smartphone,
  Lock,
  CheckCircle2,
} from "lucide-react";

const SecurityRow = ({
  icon: Icon,
  label,
  enabled,
}) => (
  <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">

    <div className="flex items-center gap-4">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700">
        <Icon
          size={18}
          className="text-blue-400"
        />
      </div>

      <span className="text-white">
        {label}
      </span>

    </div>

    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        enabled
          ? "bg-emerald-500/10 text-emerald-400"
          : "bg-red-500/10 text-red-400"
      }`}
    >
      {enabled
        ? "Enabled"
        : "Disabled"}
    </span>

  </div>
);

const SecuritySettings = ({
  security,
}) => {
  if (!security) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Security
      </h2>

      <div className="mt-6 space-y-4">

        <SecurityRow
          icon={Mail}
          label="Email Verification"
          enabled={
            security.emailVerified
          }
        />

        <SecurityRow
          icon={Smartphone}
          label="Phone Verification"
          enabled={
            security.phoneVerified
          }
        />

        <SecurityRow
          icon={Lock}
          label="Two-Factor Authentication"
          enabled={
            security.twoFactorEnabled
          }
        />

        <SecurityRow
          icon={ShieldCheck}
          label="KYC Verification"
          enabled={
            security.kycVerified
          }
        />

      </div>

      <div className="mt-8 rounded-xl bg-slate-800 p-4">

        <div className="flex items-center gap-2">

          <CheckCircle2
            size={18}
            className="text-emerald-400"
          />

          <span className="font-medium text-white">
            Last Password Change
          </span>

        </div>

        <p className="mt-2 text-slate-400">
          {security.lastPasswordChange}
        </p>

      </div>

    </div>
  );
};

export default SecuritySettings;