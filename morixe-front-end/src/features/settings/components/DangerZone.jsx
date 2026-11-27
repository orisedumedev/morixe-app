import {
  AlertTriangle,
  LogOut,
  Trash2,
} from "lucide-react";

const DangerZone = ({
  onLogoutAll,
  onDeleteAccount,
}) => {
  return (
    <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6">

      <div className="flex items-center gap-3">

        <AlertTriangle
          size={24}
          className="text-red-400"
        />

        <h2 className="text-xl font-semibold text-red-400">
          Danger Zone
        </h2>

      </div>

      <p className="mt-3 text-sm text-slate-400">
        These actions are irreversible.
        Please proceed with caution.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          type="button"
          onClick={onLogoutAll}
          className="flex items-center gap-2 rounded-xl border border-yellow-600 bg-yellow-600/10 px-5 py-3 font-medium text-yellow-400 transition hover:bg-yellow-600/20"
        >
          <LogOut size={18} />

          Logout All Devices

        </button>

        <button
          type="button"
          onClick={onDeleteAccount}
          className="flex items-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-medium text-white transition hover:bg-red-500"
        >
          <Trash2 size={18} />

          Delete Account

        </button>

      </div>

    </div>
  );
};

export default DangerZone;