import { Bell } from "lucide-react";

const NavbarNotifications = ({
  notifications = [],
}) => {
  const unread =
    notifications.filter(
      (notification) =>
        !notification.read
    ).length;

  return (
    <button
      type="button"
      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-blue-500"
    >

      <Bell
        size={20}
        className="text-slate-300"
      />

      {unread > 0 && (
        <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">

          {unread > 99
            ? "99+"
            : unread}

        </span>
      )}

    </button>
  );
};

export default NavbarNotifications;