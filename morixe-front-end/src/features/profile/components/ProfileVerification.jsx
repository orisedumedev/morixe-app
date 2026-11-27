import {
  CheckCircle2,
  Clock3,
  ShieldCheck,
} from "lucide-react";

const VerificationItem = ({
  label,
  verified,
}) => {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-800 p-4">

      <div className="flex items-center gap-3">

        <ShieldCheck
          size={20}
          className="text-blue-400"
        />

        <span className="text-white">
          {label}
        </span>

      </div>

      <div
        className={`flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
          verified
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-yellow-500/10 text-yellow-400"
        }`}
      >
        {verified ? (
          <>
            <CheckCircle2 size={14} />
            Verified
          </>
        ) : (
          <>
            <Clock3 size={14} />
            Pending
          </>
        )}
      </div>

    </div>
  );
};

const ProfileVerification = ({
  verification,
}) => {
  if (!verification) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Verification
      </h2>

      <div className="mt-6 space-y-4">

        <VerificationItem
          label="Identity Verification"
          verified={verification.identity}
        />

        <VerificationItem
          label="Address Verification"
          verified={verification.address}
        />

        <VerificationItem
          label="Facial Recognition"
          verified={verification.facialRecognition}
        />

      </div>

    </div>
  );
};

export default ProfileVerification;