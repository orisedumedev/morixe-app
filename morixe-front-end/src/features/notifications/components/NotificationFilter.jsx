const NotificationFilter = ({
  filters = [],
  activeFilter,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => {
        const active =
          activeFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() =>
              onChange(filter)
            }
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              active
                ? "bg-blue-600 text-white"
                : "border border-slate-700 bg-slate-900 text-slate-400 hover:border-slate-500 hover:text-white"
            }`}
          >
            {filter}
          </button>
        );
      })}

    </div>
  );
};

export default NotificationFilter;