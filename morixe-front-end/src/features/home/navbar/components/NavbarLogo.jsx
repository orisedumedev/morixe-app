import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="
        flex
        items-center
        gap-3
        shrink-0
      "
    >
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-blue-500/15
          ring-1
          ring-blue-500/20
          transition-all
          duration-300
          hover:bg-blue-500/25
        "
      >
        <Hexagon
          size={24}
          className="
            text-blue-400
            fill-blue-500/20
          "
        />
      </div>

      <div className="leading-tight">
        <h1
          className="
            text-lg
            font-bold
            tracking-wide
            text-white
          "
        >
          MORIXE
        </h1>

        <p
          className="
            text-xs
            text-slate-400
          "
        >
          Crypto Trading Platform
        </p>
      </div>
    </Link>
  );
};

export default NavbarLogo;