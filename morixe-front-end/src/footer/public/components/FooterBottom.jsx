import { Link } from "react-router-dom";

const FooterBottom = ({
  copyright,
  links,
}) => {
  return (
    <div
      className="
        mt-16
        flex
        flex-col
        items-center
        justify-between
        gap-6
        border-t
        border-slate-800
        pt-8
        text-sm
        md:flex-row
      "
    >

      <p className="text-slate-500">
        {copyright}
      </p>

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-6
        "
      >

        {links.map((link) => (

          <Link
            key={link.label}
            to={link.href}
            className="
              text-slate-500
              transition-colors
              hover:text-blue-400
            "
          >
            {link.label}
          </Link>

        ))}

      </div>

    </div>
  );
};

export default FooterBottom;