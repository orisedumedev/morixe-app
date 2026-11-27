import { useNavigate } from "react-router-dom";

import {
  User,
  Settings,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { useState } from "react";

import { useAuth } from "@/features/auth/context";

import {
  logout,
  openSettings,
} from "./navigationActions";

const UserMenu = () => {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          items-center
          gap-3
          px-3
          py-2
          rounded-xl
          hover:bg-slate-900
          transition
        "
      >
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-blue-600
            flex
            items-center
            justify-center
          "
        >
          <User size={18} />
        </div>

        <div className="hidden lg:block text-left">
          <p className="font-medium">
            {user?.firstName ?? "User"}
          </p>

          <p className="text-sm text-slate-400">
            Trader
          </p>
        </div>

        <ChevronDown size={18} />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-2
            w-56
            rounded-xl
            bg-slate-900
            border
            border-slate-800
            shadow-lg
            overflow-hidden
          "
        >
          <button
            type="button"
            onClick={() => openSettings(navigate)}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              hover:bg-slate-800
            "
          >
            <Settings size={18} />
            Settings
          </button>

          <button
            type="button"
            onClick={() => logout(navigate)}
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              text-red-400
              hover:bg-slate-800
            "
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;