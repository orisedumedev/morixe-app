const formatNumber = (
  value,
  decimals = 2
) => {
  return Number(value || 0).toLocaleString(
    undefined,
    {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }
  );
};

const OrderSummary = ({
  symbol,
  side,
  orderType,
  total = 0,
  wallet = {},
  feeRate = 0.001,
}) => {
  const {
    asset = "USDT",
    balance = 0,
    available = 0,
    locked = 0,
  } = wallet;

  const fee = Number(total) * feeRate;

  return (
    <div
      className="
        rounded-xl
        bg-slate-800
        border
        border-slate-700
        p-5
        space-y-3
      "
    >
      <h3
        className="
          text-sm
          font-semibold
          text-white
          border-b
          border-slate-700
          pb-2
        "
      >
        Order Summary
      </h3>

      <SummaryRow
        label="Trading Pair"
        value={symbol}
      />

      <SummaryRow
        label="Side"
        value={side}
        valueClass={
          side === "BUY"
            ? "text-emerald-400"
            : "text-red-400"
        }
      />

      <SummaryRow
        label="Order Type"
        value={orderType}
      />

      <SummaryRow
        label="Estimated Total"
        value={`${formatNumber(
          total
        )} ${asset}`}
      />

      <SummaryRow
        label="Trading Fee"
        value={`${formatNumber(
          fee,
          4
        )} ${asset}`}
      />

      <div className="border-t border-slate-700 pt-3 space-y-2">

        <SummaryRow
          label="Available"
          value={`${formatNumber(
            available
          )} ${asset}`}
        />

        <SummaryRow
          label="Locked"
          value={`${formatNumber(
            locked
          )} ${asset}`}
        />

        <SummaryRow
          label="Balance"
          value={`${formatNumber(
            balance
          )} ${asset}`}
        />

      </div>

    </div>
  );
};

const SummaryRow = ({
  label,
  value,
  valueClass = "text-white",
}) => (
  <div className="flex justify-between items-center">

    <span className="text-slate-400">
      {label}
    </span>

    <span
      className={`font-medium ${valueClass}`}
    >
      {value}
    </span>

  </div>
);

export default OrderSummary;