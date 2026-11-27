import { createContext, useCallback, useContext, useMemo, useState } from "react";

const DashboardLayoutContext = createContext(null);

export const DashboardLayoutProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const toggleSidebar = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  const value = useMemo(
    () => ({
      sidebarOpen,
      collapsed,
      openSidebar,
      closeSidebar,
      toggleSidebar,
    }),
    [
      sidebarOpen,
      collapsed,
      openSidebar,
      closeSidebar,
      toggleSidebar,
    ]
  );

  return (
    <DashboardLayoutContext.Provider value={value}>
      {children}
    </DashboardLayoutContext.Provider>
  );
};

export const useDashboardLayout = () => {
  const context = useContext(DashboardLayoutContext);

  if (!context) {
    throw new Error(
      "useDashboardLayout must be used inside DashboardLayoutProvider"
    );
  }

  return context;
};