import TransactionSearch from "./TransactionSearch";
import TransactionTypeFilter from "./TransactionTypeFilter";
import TransactionExportButton from "./TransactionExportButton";

const TransactionToolbar = ({
  loading,

  search,
  onSearchChange,

  typeFilter,
  onTypeChange,

  statusFilter,
  onStatusChange,

  onExportCSV,
  onExportPDF,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-4
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-5
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Search */}

      <div className="flex-1">

        <TransactionSearch
          value={search}
          onChange={onSearchChange}
        />

      </div>

      {/* Filters */}

      <div className="flex flex-col gap-3 sm:flex-row">

        <TransactionTypeFilter
          label="Type"
          value={typeFilter}
          options={[
            "Deposit",
            "Withdraw",
            "Buy",
            "Sell",
          ]}
          onChange={onTypeChange}
        />

        <TransactionTypeFilter
          label="Status"
          value={statusFilter}
          options={[
            "Completed",
            "Pending",
            "Failed",
          ]}
          onChange={onStatusChange}
        />

        <TransactionExportButton
            loading={loading}
            onExportCSV={onExportCSV}
            onExportPDF={onExportPDF}
        />

      </div>

    </div>
  );
};

export default TransactionToolbar;