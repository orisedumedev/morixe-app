import { Search } from "lucide-react";

const NotificationSearch = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative">

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        placeholder="Search notifications..."
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="w-full rounded-2xl border border-slate-800 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-blue-500"
      />

    </div>
  );
};

export default NotificationSearch;