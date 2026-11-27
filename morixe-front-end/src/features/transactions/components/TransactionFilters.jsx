const filters = [
  "All",
  "Deposit",
  "Withdraw",
  "Buy",
  "Sell",
  "Completed",
  "Pending",
  "Failed",
];

const TransactionFilters = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">

      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() =>
            onChange(filter)
          }
          className={`
            rounded-xl
            px-4
            py-2
            text-sm
            font-medium
            transition
            ${
              value === filter
                ? "bg-blue-600 text-white"
                : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-blue-500 hover:text-white"
            }
          `}
        >
          {filter}
        </button>
      ))}

    </div>
  );
};

export default TransactionFilters;