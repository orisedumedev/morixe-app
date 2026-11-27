import {
  Moon,
  Sun,
} from "lucide-react";

import { usePublicNavbar } from "../hooks";

const NavbarThemeToggle = () => {
  const {
    theme,
    toggleTheme,
  } = usePublicNavbar();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-xl
        border
        border-slate-800
        bg-slate-900/70
        text-slate-300
        transition-all
        duration-300
        hover:border-blue-500
        hover:text-white
      "
    >
      {theme === "dark" ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default NavbarThemeToggle;