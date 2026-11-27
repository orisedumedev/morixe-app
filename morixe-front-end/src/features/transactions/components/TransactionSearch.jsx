import { Search } from "lucide-react";

const TransactionSearch = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative flex-1">

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />

      <input
        type="text"
        placeholder="Search transactions..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          w-full
          rounded-xl
          border
          border-slate-800
          bg-slate-900
          py-3
          pl-11
          pr-4
          text-white
          placeholder:text-slate-500
          outline-none
          transition
          focus:border-blue-500
        "
      />

    </div>
  );
};

export default TransactionSearch;