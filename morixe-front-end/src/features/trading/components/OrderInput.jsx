const OrderInput = ({
  label,
  value,
  onChange,
  placeholder = "0.00",
  type = "number",
  suffix,
}) => {
  return (
    <div>
      <label
        className="
          block
          text-sm
          text-slate-400
          mb-2
        "
      >
        {label}
      </label>

      <div className="relative">
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            rounded-xl
            border
            border-slate-700
            bg-slate-800
            px-4
            py-3
            pr-16
            text-white
            placeholder:text-slate-500
            focus:outline-none
            focus:border-blue-500
            transition
          "
        />

        {suffix && (
          <span
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              text-sm
              text-slate-400
            "
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};

export default OrderInput;