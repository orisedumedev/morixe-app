import { Search, X } from "lucide-react";

const MarketSidebarSearch = ({
  value,
  onChange,
  placeholder = "Search coins...",
  disabled = false,
}) => {
  const handleClear = () => {
    onChange?.("");
  };

  return (
    <div className="relative">
      {/* Search Icon */}

      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-slate-500
          pointer-events-none
        "
      />

      {/* Input */}

      <input
        type="text"
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) =>
          onChange?.(e.target.value)
        }
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
          transition
          focus:border-blue-500
          focus:outline-none
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      />

      {/* Clear Button */}

      {value && !disabled && (
        <button
          type="button"
          onClick={handleClear}
          className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-500
            transition
            hover:text-white
          "
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default MarketSidebarSearch;