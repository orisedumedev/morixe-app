import { NavLink } from "react-router-dom";

const SidebarItem = ({
  icon: Icon,
  label,
  path,
  collapsed,
}) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `
        flex
        items-center
        gap-4
        px-4
        py-3
        rounded-xl
        transition

        ${
          isActive
            ? "bg-blue-600 text-white"
            : "text-slate-400 hover:bg-slate-800 hover:text-white"
        }
      `
      }
    >
      <Icon size={20} />

      {!collapsed && (
        <span>{label}</span>
      )}
    </NavLink>
  );
};

export default SidebarItem;