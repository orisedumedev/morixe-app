const SubmitOrderButton = ({
  side = "BUY",
  symbol = "",
  loading = false,
  disabled = false,
}) => {
  const isBuy = side === "BUY";

  return (
    <button
      type="submit"
      disabled={loading || disabled}
      className={`
        w-full
        rounded-xl
        py-3
        font-semibold
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-slate-900
        disabled:opacity-50
        disabled:cursor-not-allowed

        ${
          isBuy
            ? `
              bg-emerald-500
              hover:bg-emerald-600
              focus:ring-emerald-500
            `
            : `
              bg-red-500
              hover:bg-red-600
              focus:ring-red-500
            `
        }
      `}
    >
      {loading
        ? "Processing Order..."
        : `${isBuy ? "Buy" : "Sell"} ${symbol}`}
    </button>
  );
};

export default SubmitOrderButton;