import { Bell } from "lucide-react";

const NotificationButton = () => {
  return (
    <button
      className="
        relative
        p-2.5
        rounded-xl
        bg-slate-900
        hover:bg-slate-800
        transition
      "
    >
      <Bell size={20} />

      <span
        className="
          absolute
          top-1
          right-1
          w-2.5
          h-2.5
          rounded-full
          bg-red-500
        "
      />
    </button>
  );
};

export default NotificationButton;