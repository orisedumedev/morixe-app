import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarNav from "../sidebar/SidebarNav";
import SidebarFooter from "../sidebar/SidebarFooter";

import { useDashboardLayout } from "../hooks";

const Sidebar = () => {
  const {
    collapsed,
    toggleSidebar,
  } = useDashboardLayout();

  return (
    <aside
      className="
        h-full
        w-full
        bg-slate-900
        border-r
        border-slate-800
        flex
        flex-col
      "
    >
      <SidebarHeader
        collapsed={collapsed}
      />

      <button
        type="button"
        onClick={toggleSidebar}
        className="
          p-3
          self-end
          mr-4
          mt-4
          rounded-lg
          hover:bg-slate-800
          transition-colors
        "
        aria-label={
          collapsed
            ? "Expand Sidebar"
            : "Collapse Sidebar"
        }
      >
        {collapsed ? (
          <PanelLeftOpen size={20} />
        ) : (
          <PanelLeftClose size={20} />
        )}
      </button>

      <div
        className="
          flex-1
          mt-6
          px-4
          overflow-y-auto
        "
      >
        <SidebarNav
          collapsed={collapsed}
        />
      </div>

      <div className="p-4">
        <SidebarFooter
          collapsed={collapsed}
        />
      </div>
    </aside>
  );
};

export default Sidebar;