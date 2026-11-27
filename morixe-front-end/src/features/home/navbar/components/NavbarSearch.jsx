import { Search } from "lucide-react";

import { usePublicNavbar } from "../hooks";

const NavbarSearch = () => {
  const {
    search,
    setSearch,
  } = usePublicNavbar();

  return (
    <div
      className="
        hidden
        xl:flex
        items-center
        gap-3
        w-72
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/60
        px-4
        py-2.5
        backdrop-blur-xl
        transition-all
        duration-300
        focus-within:border-blue-500
        focus-within:ring-2
        focus-within:ring-blue-500/20
      "
    >
      <Search
        size={18}
        className="text-slate-400"
      />

      <input
        type="text"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search markets..."
        className="
          w-full
          bg-transparent
          text-sm
          text-white
          placeholder:text-slate-500
          outline-none
        "
      />
    </div>
  );
};

export default NavbarSearch;