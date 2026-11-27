import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarDropdown = ({
  item,
}) => {
  return (
    <div className="group relative">
      <button
        className="
          flex
          items-center
          gap-1
          text-sm
          font-medium
          text-slate-300
          transition-colors
          hover:text-white
        "
      >
        {item.label}

        <ChevronDown
          size={16}
          className="
            transition-transform
            duration-300
            group-hover:rotate-180
          "
        />
      </button>

      <div
        className="
          invisible
          absolute
          left-0
          top-full
          mt-4
          w-60
          rounded-2xl
          border
          border-slate-800
          bg-slate-900/95
          p-2
          opacity-0
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-300
          group-hover:visible
          group-hover:opacity-100
        "
      >
        {item.children?.map((child) => (
          <Link
            key={child.id}
            to={child.href}
            className="
              block
              rounded-xl
              px-4
              py-3
              text-sm
              text-slate-300
              transition-colors
              hover:bg-slate-800
              hover:text-white
            "
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavbarDropdown;