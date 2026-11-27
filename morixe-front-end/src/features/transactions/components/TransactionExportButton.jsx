import {
  ChevronDown,
  Download,
} from "lucide-react";

const TransactionExportButton = ({
  loading = false,
  onExportCSV,
  onExportPDF,
}) => {
  const handleExport = (type) => {
    if (loading) return;

    if (type === "csv") {
      onExportCSV?.();
      return;
    }

    onExportPDF?.();
  };

  return (
    <div className="relative group">

      <button
        type="button"
        disabled={loading}
        className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-800
          bg-slate-900
          px-4
          py-3
          text-white
          transition
          hover:border-blue-500
          hover:bg-slate-800
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >
        <Download size={18} />

        <span>Export</span>

        <ChevronDown size={16} />

      </button>

      {/* Dropdown */}

      <div
        className="
          invisible
          absolute
          right-0
          top-full
          z-20
          mt-2
          w-44
          overflow-hidden
          rounded-xl
          border
          border-slate-800
          bg-slate-900
          opacity-0
          shadow-xl
          transition-all
          duration-200
          group-hover:visible
          group-hover:opacity-100
        "
      >
        <button
          type="button"
          onClick={() =>
            handleExport("csv")
          }
          className="
            w-full
            px-4
            py-3
            text-left
            text-white
            transition
            hover:bg-slate-800
          "
        >
          Export CSV
        </button>

        <button
          type="button"
          onClick={() =>
            handleExport("pdf")
          }
          className="
            w-full
            border-t
            border-slate-800
            px-4
            py-3
            text-left
            text-white
            transition
            hover:bg-slate-800
          "
        >
          Export PDF
        </button>

      </div>

    </div>
  );
};

export default TransactionExportButton;