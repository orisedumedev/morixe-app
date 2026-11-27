import usePositions from "./usePositions";

import PositionCard from "./PositionCard";

const OpenPositions = () => {
  const {
    positions,
    loading,
  } = usePositions();

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
          Open Positions
        </h2>

        <p className="text-slate-400 text-sm">
          Active Trades
        </p>

      </div>

      <div className="grid gap-5">

        {positions.map((position) => (
          <PositionCard
            key={position.id}
            position={position}
          />
        ))}

      </div>

    </div>
  );
};

export default OpenPositions;