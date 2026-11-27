import navigation from "./navigation";
import SidebarItem from "./SidebarItem";

const SidebarNav = ({ collapsed }) => {
  return (
    <nav className="space-y-2">
      {navigation.map((item) => (
        <SidebarItem
          key={item.path}
          {...item}
          collapsed={collapsed}
        />
      ))}
    </nav>
  );
};

export default SidebarNav;