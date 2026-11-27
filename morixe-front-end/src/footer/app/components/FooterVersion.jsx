/**
 * @component FooterVersion
 * @description
 * Displays the currently running application version.
 */

const FooterVersion = ({
  version,
}) => {
  return (
    <div
      className="
        rounded-lg
        border
        border-slate-700
        bg-slate-900
        px-3
        py-1.5
      "
    >
      <span
        className="
          text-xs
          font-medium
          tracking-wide
          text-blue-400
        "
      >
        {version}
      </span>
    </div>
  );
};

export default FooterVersion;