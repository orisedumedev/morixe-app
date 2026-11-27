import useHistory from "./useHistory";

import HistoryTable from "./HistoryTable";

const TradingHistory = () => {
  const {
    history,
    loading,
  } = useHistory();

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
          Trading History
        </h2>

        <p className="text-slate-400 text-sm">
          Complete Trading Activity
        </p>

      </div>

      <HistoryTable
        history={history}
      />

    </div>
  );
};

export default TradingHistory;