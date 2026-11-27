import { Search } from "lucide-react";

const HelpSearch = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        placeholder="Search help articles..."
        className="w-full rounded-2xl border border-slate-800 bg-slate-900 py-4 pl-14 pr-5 text-white outline-none transition focus:border-blue-500"
      />

    </div>
  );
};

export default HelpSearch;