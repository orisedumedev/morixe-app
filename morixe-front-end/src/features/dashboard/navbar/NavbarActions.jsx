import {
  Globe,
  Moon,
} from "lucide-react";

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-3">

      <button
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-blue-500"
      >
        <Globe size={18} />
      </button>

      <button
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 transition hover:border-blue-500"
      >
        <Moon size={18} />
      </button>

    </div>
  );
};

export default NavbarActions;