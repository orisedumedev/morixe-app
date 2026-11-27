import DepositHistoryItem from "./DepositHistoryItem";

const DepositHistory = ({
  history = [],
  loading = false,
}) => {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
      "
    >
      {/* Header */}

      <div className="border-b border-slate-800 p-6">

        <h2 className="text-xl font-semibold text-white">
          Deposit History
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your recent cryptocurrency deposits.
        </p>

      </div>

      {/* Content */}

      <div className="space-y-4 p-6">

        {loading ? (
          <div className="py-12 text-center text-slate-400">
            Loading deposit history...
          </div>
        ) : history.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            No deposit history found.
          </div>
        ) : (
          history.map((transaction) => (
            <DepositHistoryItem
              key={transaction.id}
              transaction={transaction}
            />
          ))
        )}

      </div>

    </div>
  );
};

export default DepositHistory;