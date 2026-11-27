import {
  Download,
  FileSpreadsheet,
  FileText,
} from "lucide-react";

const TransactionExport = ({
  loading = false,
  onExportCSV,
  onExportPDF,
}) => {
  const handleCSV = () => {
    if (loading) return;

    if (onExportCSV) {
      onExportCSV();
      return;
    }

    console.log("Export CSV");
  };

  const handlePDF = () => {
    if (loading) return;

    if (onExportPDF) {
      onExportPDF();
      return;
    }

    console.log("Export PDF");
  };

  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900
        p-5
      "
    >
      {/* Header */}

      <div className="flex items-center gap-3">

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
          <Download
            size={20}
            className="text-white"
          />
        </div>

        <div>

          <h2 className="text-lg font-semibold text-white">
            Export Transactions
          </h2>

          <p className="text-sm text-slate-400">
            Download your transaction history.
          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="mt-6 grid grid-cols-1 gap-3">

        <button
          type="button"
          disabled={loading}
          onClick={handleCSV}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-emerald-600
            px-4
            py-3
            font-medium
            text-white
            transition
            hover:bg-emerald-700
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <FileSpreadsheet size={18} />

          Export CSV
        </button>

        <button
          type="button"
          disabled={loading}
          onClick={handlePDF}
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-red-600
            px-4
            py-3
            font-medium
            text-white
            transition
            hover:bg-red-700
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          <FileText size={18} />

          Export PDF
        </button>

      </div>

      {/* Footer */}

      <div className="mt-5 rounded-xl bg-slate-800 p-4">

        <p className="text-sm text-slate-400">
          Export your complete transaction history for
          record keeping, accounting, or tax reporting.
        </p>

      </div>

    </div>
  );
};

export default TransactionExport;