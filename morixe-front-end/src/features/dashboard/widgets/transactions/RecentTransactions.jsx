import useTransactions from "./useTransactions";

import TransactionItem from "./TransactionItem";

const RecentTransactions = () => {
  const {
    transactions,
    loading,
  } = useTransactions();

  if (loading) {
    return (
      <div
        className="
          h-96
          rounded-2xl
          bg-slate-900
          animate-pulse
        "
      />
    );
  }

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-6
      "
    >
      <div className="mb-6">

        <h2 className="text-xl font-semibold">
          Recent Transactions
        </h2>

        <p className="text-slate-400 text-sm">
          Latest account activity
        </p>

      </div>

      <div>

        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
          />
        ))}

      </div>

    </div>
  );
};

export default RecentTransactions;