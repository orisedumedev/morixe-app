import { Link } from "react-router-dom";

const NavbarActions = () => {
  return (
    <div
      className="
        flex
        items-center
        gap-4
      "
    >
      <Link
        to="/login"
        className="
          rounded-xl
          px-5
          py-2.5
          text-sm
          font-medium
          text-slate-300
          transition-all
          duration-300
          hover:text-white
        "
      >
        Login
      </Link>

      <Link
        to="/register"
        className="
          rounded-xl
          bg-blue-500
          px-6
          py-2.5
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-blue-600
          hover:shadow-lg
          hover:shadow-blue-500/30
        "
      >
        Create Account
      </Link>
    </div>
  );
};

export default NavbarActions;