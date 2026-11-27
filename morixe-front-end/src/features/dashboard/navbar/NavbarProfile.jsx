import { useState } from "react";
import {
  ChevronDown,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

import { ROUTES } from "@/constants";

const NavbarProfile = ({
  user = {
    name: "Michigan E.",
    email: "michigan@example.com",
    avatar: "",
  },
}) => {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative">

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900 px-3 py-2 transition hover:border-blue-500"
      >

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">

          {user.name.charAt(0)}

        </div>

        <div className="hidden text-left lg:block">

          <p className="text-sm font-medium text-white">
            {user.name}
          </p>

          <p className="text-xs text-slate-400">
            {user.email}
          </p>

        </div>

        <ChevronDown
          size={16}
          className="text-slate-400"
        />

      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl">

          <Link
            to={ROUTES.DASHBOARD.PROFILE}
            className="flex items-center gap-3 px-5 py-4 text-slate-300 transition hover:bg-slate-800"
          >
            <User size={18} />
            Profile
          </Link>

          <Link
            to={ROUTES.DASHBOARD.SETTINGS}
            className="flex items-center gap-3 px-5 py-4 text-slate-300 transition hover:bg-slate-800"
          >
            <Settings size={18} />
            Settings
          </Link>

          <button
            type="button"
            className="flex w-full items-center gap-3 px-5 py-4 text-left text-red-400 transition hover:bg-slate-800"
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>
      )}

    </div>
  );
};

export default NavbarProfile;