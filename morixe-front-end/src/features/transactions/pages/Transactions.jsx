import {
  TransactionToolbar,
  TransactionTable,
} from "../components";

import { useTransactions } from "../hooks";

const Transactions = () => {
  const {
    loading,

    filteredTransactions,

    search,
    setSearch,

    typeFilter,
    setTypeFilter,

    statusFilter,
    setStatusFilter,
  } = useTransactions();

  const handleExportCSV = () => {
    console.log("Export CSV");
    // Future:
    // transactionService.exportCSV();
  };

  const handleExportPDF = () => {
    console.log("Export PDF");
    // Future:
    // transactionService.exportPDF();
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-white">
          Transaction History
        </h1>

        <p className="mt-1 text-slate-400">
          View and manage all of your deposits,
          withdrawals and trading activity.
        </p>

      </div>

      {/* Toolbar */}

      <TransactionToolbar
        loading={loading}
        search={search}
        onSearchChange={setSearch}
        typeFilter={typeFilter}
        onTypeChange={setTypeFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        onExportCSV={handleExportCSV}
        onExportPDF={handleExportPDF}
      />

      {/* Transactions Table */}

      <TransactionTable
        transactions={filteredTransactions}
        loading={loading}
      />

    </div>
  );
};

export default Transactions;