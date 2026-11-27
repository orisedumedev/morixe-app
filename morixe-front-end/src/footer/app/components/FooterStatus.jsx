/**
 * @component FooterStatus
 * @description
 * Displays live platform status indicators.
 */

const FooterStatus = ({
  apiStatus,
  serverStatus,
  region,
}) => {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        gap-6
        text-sm
      "
    >
      <div className="flex items-center gap-2">
        <span
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-emerald-500
            animate-pulse
          "
        />

        <span className="text-slate-400">
          API
        </span>

        <span className="font-medium text-white">
          {apiStatus}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span
          className="
            h-2.5
            w-2.5
            rounded-full
            bg-green-500
          "
        />

        <span className="text-slate-400">
          Server
        </span>

        <span className="font-medium text-white">
          {serverStatus}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-slate-400">
          Region
        </span>

        <span className="font-medium text-white">
          {region}
        </span>
      </div>
    </div>
  );
};

export default FooterStatus;