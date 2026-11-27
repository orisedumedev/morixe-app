import { Link, NavLink } from "react-router-dom";

import {
  X,
  Search,
  Languages,
  Moon,
  Sun,
} from "lucide-react";

import { usePublicNavbar } from "../hooks";

const MobileMenu = () => {
  const {
    mobileMenuOpen,
    closeMobileMenu,

    navigation,

    search,
    setSearch,

    language,
    languages,
    setLanguage,

    theme,
    toggleTheme,
  } = usePublicNavbar();

  return (
    <>
      {/* Overlay */}

      <div
        onClick={closeMobileMenu}
        className={`
          fixed
          inset-0
          z-40
          bg-black/60
          backdrop-blur-sm
          transition-opacity
          duration-300
          lg:hidden

          ${
            mobileMenuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      />

      {/* Drawer */}

      <aside
        className={`
          fixed
          top-0
          left-0
          z-50
          flex
          h-screen
          w-80
          flex-col
          border-r
          border-slate-800
          bg-slate-950/95
          backdrop-blur-2xl
          transition-transform
          duration-300
          lg:hidden

          ${
            mobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-slate-800
            p-6
          "
        >
          <h2
            className="
              text-xl
              font-bold
              text-white
            "
          >
            MORIXE
          </h2>

          <button
            type="button"
            onClick={closeMobileMenu}
            className="
              rounded-xl
              p-2
              hover:bg-slate-800
            "
          >
            <X size={22} />
          </button>
        </div>

        {/* Search */}

        <div className="p-6">
          <div
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-slate-800
              bg-slate-900
              px-4
              py-3
            "
          >
            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search..."
              className="
                w-full
                bg-transparent
                text-white
                outline-none
                placeholder:text-slate-500
              "
            />
          </div>
        </div>

        {/* Navigation */}

        <nav
          className="
            flex-1
            space-y-2
            px-6
          "
        >
          {navigation.map((item) => (
            <NavLink
              key={item.id}
              to={item.href}
              onClick={closeMobileMenu}
              className={({ isActive }) => `
                flex
                items-center
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-all

                ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }
              `}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}

        <div
          className="
            border-t
            border-slate-800
            p-6
            space-y-5
          "
        >
          {/* Language */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <Languages
              size={18}
              className="text-slate-400"
            />

            <select
              value={language}
              onChange={(e) =>
                setLanguage(e.target.value)
              }
              className="
                flex-1
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                px-3
                py-2
                text-white
                outline-none
              "
            >
              {languages.map((item) => (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Theme */}

          <button
            type="button"
            onClick={toggleTheme}
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              border
              border-slate-800
              bg-slate-900
              px-4
              py-3
              text-white
            "
          >
            <span>
              Theme
            </span>

            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* Buttons */}

          <Link
            to="/login"
            onClick={closeMobileMenu}
            className="
              block
              rounded-xl
              border
              border-slate-700
              py-3
              text-center
              text-white
            "
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={closeMobileMenu}
            className="
              block
              rounded-xl
              bg-blue-500
              py-3
              text-center
              font-semibold
              text-white
              transition
              hover:bg-blue-600
            "
          >
            Create Account
          </Link>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;