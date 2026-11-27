const PerformanceTooltip = ({
  active,
  payload,
  label,
}) => {
  if (
    !active ||
    !payload ||
    !payload.length
  ) {
    return null;
  }

  return (
    <div
      className="
        rounded-xl
        border
        border-slate-700
        bg-slate-900
        px-4
        py-3
        shadow-xl
      "
    >
      <p className="text-slate-400 text-sm">
        {label}
      </p>

      <p className="text-white font-semibold">
        $
        {payload[0].value.toLocaleString()}
      </p>
    </div>
  );
};

export default PerformanceTooltip;