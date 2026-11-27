import { Search } from "lucide-react";

const MarketSearch = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative max-w-md">

      <Search
        size={20}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      <input
        type="search"
        id="market-search"
        name="market-search"
        autoComplete="off"
        placeholder="Search market..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          py-3
          pl-12
          pr-4
          text-white
          placeholder:text-slate-500
          focus:border-blue-500
          focus:outline-none
          transition
        "
      />

    </div>
  );
};

export default MarketSearch;