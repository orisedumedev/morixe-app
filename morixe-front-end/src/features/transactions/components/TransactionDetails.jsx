import {
  FileText,
} from "lucide-react";

const Detail = ({
  label,
  value,
}) => (
  <div>

    <p className="text-sm text-slate-500">
      {label}
    </p>

    <p className="mt-1 break-all font-medium text-white">
      {value}
    </p>

  </div>
);

const TransactionDetails = ({
  transaction,
}) => {
  if (!transaction) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-12 text-center text-slate-500">
        Select a transaction to view its
        details.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900">

      {/* Header */}

      <div className="flex items-center gap-3 border-b border-slate-800 p-5">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
          <FileText
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-xl font-semibold text-white">
            Transaction Details
          </h2>

          <p className="text-sm text-slate-400">
            Complete transaction information
          </p>

        </div>

      </div>

      {/* Body */}

      <div className="grid gap-6 p-6">

        <Detail
          label="Type"
          value={transaction.type}
        />

        <Detail
          label="Asset"
          value={transaction.asset}
        />

        <Detail
          label="Amount"
          value={transaction.amount}
        />

        <Detail
          label="Fee"
          value={transaction.fee}
        />

        <Detail
          label="Network"
          value={transaction.network}
        />

        <Detail
          label="Status"
          value={transaction.status}
        />

        <Detail
          label="Wallet Address"
          value={transaction.address}
        />

        <Detail
          label="Transaction ID"
          value={transaction.txId}
        />

        <Detail
          label="Date"
          value={transaction.date}
        />

      </div>

    </div>
  );
};

export default TransactionDetails;