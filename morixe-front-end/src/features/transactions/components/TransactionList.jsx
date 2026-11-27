import {
  ListOrdered,
} from "lucide-react";

import TransactionItem from "./TransactionItem";

const TransactionList = ({
  transactions = [],
  loading = false,
  selectedTransaction,
  onSelectTransaction,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">

      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-800 p-5">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
          <ListOrdered
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Transactions
          </h2>

          <p className="text-sm text-slate-400">
            Recent account activity
          </p>

        </div>

      </div>

      {/* List */}

      <div className="space-y-3 p-5">

        {loading ? (

          <div className="py-12 text-center text-slate-400">
            Loading transactions...
          </div>

        ) : transactions.length === 0 ? (

          <div className="py-12 text-center text-slate-500">
            No transactions found.
          </div>

        ) : (

          transactions.map(
            (transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                active={
                  selectedTransaction?.id ===
                  transaction.id
                }
                onSelect={
                  onSelectTransaction
                }
              />
            )
          )

        )}

      </div>

    </div>
  );
};

export default TransactionList;