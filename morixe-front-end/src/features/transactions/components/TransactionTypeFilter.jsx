const TransactionTypeFilter = ({
  label,
  value,
  options = [],
  onChange,
}) => {
  return (
    <div className="min-w-[170px]">

      <select
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
          px-4
          py-3
          text-white
          outline-none
          transition
          focus:border-blue-500
        "
      >
        <option value="All">
          {label}
        </option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

    </div>
  );
};

export default TransactionTypeFilter;