import { X } from "lucide-react";

import { useDashboardLayout } from "../hooks";

const MobileSidebar = ({ children }) => {
  const {
    sidebarOpen,
    closeSidebar,
  } = useDashboardLayout();

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={closeSidebar}
          className="
            fixed
            inset-0
            z-40
            bg-black/60
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed
          inset-y-0
          left-0
          z-50
          w-72
          transform
          border-r
          border-slate-800
          bg-slate-900
          transition-transform
          duration-300
          lg:hidden
          ${
            sidebarOpen
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
          <h1 className="text-2xl font-bold text-blue-500">
            Morixe
          </h1>

          <button
            type="button"
            onClick={closeSidebar}
            className="
              rounded-lg
              p-2
              transition-colors
              hover:bg-slate-800
            "
            aria-label="Close Sidebar"
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="h-[calc(100%-88px)] overflow-y-auto">
          {children}
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;