import WalletTransactionItem from "./WalletTransactionItem";

const WalletTransactions = ({
  transactions = [],
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
          Recent Transactions
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Your latest wallet activity.
        </p>

      </div>

      {/* Content */}

      <div className="space-y-4 p-6">

        {loading ? (
          <div className="py-12 text-center text-slate-400">
            Loading transactions...
          </div>
        ) : transactions.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            No transactions available.
          </div>
        ) : (
          transactions.map(
            (transaction) => (
              <WalletTransactionItem
                key={transaction.id}
                transaction={
                  transaction
                }
              />
            )
          )
        )}

      </div>

    </div>
  );
};

export default WalletTransactions;