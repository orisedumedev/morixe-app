import { BellOff } from "lucide-react";

const NotificationEmpty = () => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 py-20 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-800">

        <BellOff
          size={32}
          className="text-slate-500"
        />

      </div>

      <h3 className="mt-6 text-xl font-semibold text-white">
        No Notifications
      </h3>

      <p className="mt-2 text-slate-400">
        You're all caught up.
        New notifications will
        appear here.
      </p>

    </div>
  );
};

export default NotificationEmpty;