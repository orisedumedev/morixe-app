import { NavLink } from "react-router-dom";

import NavbarDropdown from "./NavbarDropdown";

import { usePublicNavbar } from "../hooks";

const NavbarMenu = () => {
  const {
    navigation,
  } = usePublicNavbar();

  return (
    <nav
      className="
        hidden
        lg:flex
        items-center
        gap-8
      "
    >
      {navigation.map((item) => {

        if (item.children) {
          return (
            <NavbarDropdown
              key={item.id}
              item={item}
            />
          );
        }

        return (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) => `
              text-sm
              font-medium
              transition-colors
              ${
                isActive
                  ? "text-blue-400"
                  : "text-slate-300 hover:text-white"
              }
            `}
          >
            {item.label}
          </NavLink>
        );

      })}
    </nav>
  );
};

export default NavbarMenu;