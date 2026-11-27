import { Search, X } from "lucide-react";

const TradingPairSearch = ({
  value,
  onChange,
  placeholder = "Search pairs...",
}) => {
  return (
    <div className="relative">

      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-slate-700
          bg-slate-900
          py-2.5
          pl-10
          pr-10
          text-sm
          text-white
          placeholder:text-slate-500
          focus:border-blue-500
          focus:outline-none
          transition
        "
      />

      {value && (
        <button
          type="button"
          onClick={() =>
            onChange("")
          }
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-500
            hover:text-white
            transition
          "
        >
          <X size={16} />
        </button>
      )}

    </div>
  );
};

export default TradingPairSearch;