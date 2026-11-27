import {
  History,
} from "lucide-react";

import WithdrawHistoryItem from "./WithdrawHistoryItem";

const WithdrawHistory = ({
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

      <div
        className="
          flex
          items-center
          gap-3
          border-b
          border-slate-800
          p-6
        "
      >
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-xl
            bg-blue-600
          "
        >
          <History
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Withdrawal History
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            View your recent cryptocurrency
            withdrawals.
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-4 p-6">

        {loading ? (

          <div className="py-12 text-center text-slate-400">
            Loading withdrawal history...
          </div>

        ) : history.length === 0 ? (

          <div className="py-12 text-center text-slate-500">
            No withdrawal history found.
          </div>

        ) : (

          history.map((withdrawal) => (
            <WithdrawHistoryItem
              key={withdrawal.id}
              withdrawal={withdrawal}
            />
          ))

        )}

      </div>

    </div>
  );
};

export default WithdrawHistory;