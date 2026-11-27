import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Navbar from "../navbar/Navbar";
import AppFooter from "@/footer/app/components/AppFooter";

import { useDashboardLayout } from "../hooks";

const DashboardLayout = () => {
  const {
    sidebarOpen,
    collapsed,
    closeSidebar,
  } = useDashboardLayout();

  return (
    <div className="h-screen overflow-hidden bg-slate-950 text-white">

      {/* Desktop Sidebar */}
      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-40
          hidden
          overflow-hidden
          border-r
          border-slate-800
          bg-slate-900
          transition-all
          duration-300
          lg:block
          ${collapsed ? "w-24" : "w-72"}
        `}
      >
        <Sidebar />
      </aside>

      {/* Mobile Sidebar */}
      <MobileSidebar
        open={sidebarOpen}
        onClose={closeSidebar}
      >
        <Sidebar />
      </MobileSidebar>

      {/* Main Content */}
      <div
        className={`
          flex
          h-screen
          flex-col
          transition-all
          duration-300
          ${collapsed ? "lg:ml-24" : "lg:ml-72"}
        `}
      >
        <Navbar />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>

        <AppFooter />

      </div>

    </div>
  );
};

export default DashboardLayout;