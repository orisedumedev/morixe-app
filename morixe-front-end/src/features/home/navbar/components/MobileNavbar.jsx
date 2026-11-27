import { Menu, X } from "lucide-react";

import { usePublicNavbar } from "../hooks";

const MobileNavbar = () => {
  const {
    mobileMenuOpen,
    toggleMobileMenu,
  } = usePublicNavbar();

  return (
    <button
      type="button"
      onClick={toggleMobileMenu}
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
        lg:hidden
      "
      aria-label="Toggle navigation"
    >
      {mobileMenuOpen ? (
        <X size={22} />
      ) : (
        <Menu size={22} />
      )}
    </button>
  );
};

export default MobileNavbar;