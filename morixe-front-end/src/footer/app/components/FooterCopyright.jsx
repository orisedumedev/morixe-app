/**
 * @component FooterCopyright
 * @description
 * Displays copyright information.
 */

const FooterCopyright = ({
  copyright,
}) => {
  return (
    <p
      className="
        text-sm
        text-slate-500
      "
    >
      {copyright}
    </p>
  );
};

export default FooterCopyright;