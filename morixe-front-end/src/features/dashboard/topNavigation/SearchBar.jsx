import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative hidden md:block">
      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="search"
        placeholder="Search..."
        autoComplete="off"
        className="
          w-72
          pl-10
          pr-4
          py-2.5
          rounded-xl
          bg-slate-900
          border
          border-slate-800
          text-white
          placeholder:text-slate-500
          focus:outline-none
          focus:border-blue-500
        "
      />
    </div>
  );
};

export default SearchBar;