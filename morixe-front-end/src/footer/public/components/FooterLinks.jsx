import { Link } from "react-router-dom";

const FooterLinks = ({
  title,
  links,
}) => {
  return (
    <div>

      <h3
        className="
          mb-6
          text-lg
          font-semibold
          text-white
        "
      >
        {title}
      </h3>

      <ul className="space-y-4">

        {links.map((link) => (

          <li key={link.label}>

            <Link
              to={link.href}
              className="
                text-slate-400
                transition-colors
                duration-300
                hover:text-blue-400
              "
            >
              {link.label}
            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default FooterLinks;