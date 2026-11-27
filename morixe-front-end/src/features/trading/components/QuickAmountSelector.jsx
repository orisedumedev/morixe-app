const percentages = [
  25,
  50,
  75,
  100,
];

const QuickAmountSelector = ({
  value = 0,
  onChange,
}) => {
  return (
    <div className="space-y-2">

      <div className="flex justify-between items-center">

        <span className="text-sm text-slate-400">
          Quick Amount
        </span>

        <span className="text-xs text-slate-500">
          % of Balance
        </span>

      </div>

      <div className="grid grid-cols-4 gap-2">

        {percentages.map((percent) => (
          <button
            key={percent}
            type="button"
            onClick={() =>
              onChange(percent)
            }
            className={`
              rounded-lg
              border
              border-slate-700
              bg-slate-800
              py-2
              text-sm
              font-medium
              text-slate-300
              transition-all
              hover:border-blue-500
              hover:bg-slate-700
              ${
                value === percent
                  ? "border-blue-500 bg-blue-600 text-white"
                  : ""
              }
            `}
          >
            {percent}%
          </button>
        ))}

      </div>

    </div>
  );
};

export default QuickAmountSelector;