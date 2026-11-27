const OrderTypeTabs = ({
  value,
  onChange,
}) => {
  const types = [
    "MARKET",
    "LIMIT",
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {types.map((type) => (
        <button
          key={type}
          type="button"
          onClick={() =>
            onChange(type)
          }
          className={`
            rounded-lg
            py-2.5
            text-sm
            font-medium
            transition-all
            duration-200
            ${
              value === type
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400 hover:bg-slate-700"
            }
          `}
        >
          {type.charAt(0)}
          {type
            .slice(1)
            .toLowerCase()}
        </button>
      ))}
    </div>
  );
};

export default OrderTypeTabs;