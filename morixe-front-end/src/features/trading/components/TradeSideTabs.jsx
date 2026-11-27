const TradeSideTabs = ({
  value,
  onChange,
}) => {
  const sides = [
    {
      label: "Buy",
      value: "BUY",
      activeClass:
        "bg-emerald-500 text-white",
    },
    {
      label: "Sell",
      value: "SELL",
      activeClass:
        "bg-red-500 text-white",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {sides.map((side) => (
        <button
          key={side.value}
          type="button"
          onClick={() =>
            onChange(side.value)
          }
          className={`
            rounded-xl
            py-3
            font-medium
            transition-all
            duration-200
            ${
              value === side.value
                ? side.activeClass
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }
          `}
        >
          {side.label}
        </button>
      ))}
    </div>
  );
};

export default TradeSideTabs;