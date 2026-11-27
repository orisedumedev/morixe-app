import { Search } from "lucide-react";

const NavbarSearch = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative hidden w-96 lg:block">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="search"
        placeholder="Search..."
        value={value}
        onChange={(e) =>
          onChange?.(e.target.value)
        }
        className="w-full rounded-xl border border-slate-800 bg-slate-900 py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-blue-500"
      />

    </div>
  );
};

export default NavbarSearch;