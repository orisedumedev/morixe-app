import { Link } from "react-router-dom";

/**
 * @component FooterLinks
 * @description
 * Dashboard footer navigation.
 */

const FooterLinks = ({
  links,
}) => {
  return (
    <nav
      className="
        flex
        flex-wrap
        items-center
        gap-6
      "
    >
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.href}
          className="
            text-sm
            text-slate-400
            transition-colors
            duration-300
            hover:text-blue-400
          "
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default FooterLinks;