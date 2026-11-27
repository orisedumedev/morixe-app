/**
 * @component Navbar
 * @description
 * Landing page navigation for the MORIXE platform.
 * Provides branding, primary navigation, and authentication actions
 * with a premium glassmorphism appearance.
 */

import { Hexagon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        inset-x-0
        top-0
        z-50

        border-b
        border-slate-800/70

        bg-slate-950/90
        supports-[backdrop-filter]:bg-slate-950/70

        backdrop-blur-sm

        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          flex
          h-16
          max-w-7xl
          items-center
          justify-between
          px-6
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex
            items-center
            gap-3
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl

              bg-blue-500/15
              border
              border-blue-500/20

              shadow-lg
              shadow-blue-500/20
            "
          >
            <Hexagon
              size={22}
              className="
                text-blue-500
                fill-blue-500/20
              "
            />
          </div>

          <div>
            <h1
              className="
                text-xl
                font-bold
                tracking-tight
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

        {/* Desktop Navigation */}
        <div
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >
          <Link
            to="/markets"
            className="
              text-slate-300
              transition-colors
              hover:text-blue-400
            "
          >
            Markets
          </Link>

          <Link
            to="/trading"
            className="
              text-slate-300
              transition-colors
              hover:text-blue-400
            "
          >
            Trading
          </Link>

          <Link
            to="/help-center"
            className="
              text-slate-300
              transition-colors
              hover:text-blue-400
            "
          >
            Features
          </Link>

          <Link
            to="/security"
            className="
              text-slate-300
              transition-colors
              hover:text-blue-400
            "
          >
            Security
          </Link>
        </div>

        {/* Right Side */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <Link to="/login">
            <button
              type="button"
              className="
                rounded-lg
                px-2
                py-2

                font-medium
                text-slate-300

                transition-all
                duration-300

                hover:text-white
              "
            >
              Login
            </button>
          </Link>

          <Link to="/register">
            <button
              type="button"
              className="
                rounded-xl

                bg-blue-600
                px-6
                py-3

                font-semibold
                text-white

                shadow-lg
                shadow-blue-500/30

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:bg-blue-500
                hover:shadow-blue-500/50

                active:translate-y-0
              "
            >
              Create Account
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;