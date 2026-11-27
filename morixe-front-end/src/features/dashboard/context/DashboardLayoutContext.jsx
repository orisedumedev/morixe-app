import {
  createContext,
  useCallback,
  useMemo,
  useState,
} from "react";

export const DashboardLayoutContext =
  createContext(null);

export const DashboardLayoutProvider = ({
  children,
}) => {
  // Desktop Sidebar
  const [collapsed, setCollapsed] =
    useState(false);

  // Mobile Sidebar
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  // Collapse / Expand Desktop Sidebar
  const toggleSidebar = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  // Open Mobile Sidebar
  const openSidebar = useCallback(() => {
    setSidebarOpen(true);
  }, []);

  // Close Mobile Sidebar
  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  // Toggle Mobile Sidebar
  const toggleMobileSidebar =
    useCallback(() => {
      setSidebarOpen((prev) => !prev);
    }, []);

  const value = useMemo(
    () => ({
      // State
      collapsed,
      sidebarOpen,

      // Desktop Actions
      toggleSidebar,

      // Mobile Actions
      openSidebar,
      closeSidebar,
      toggleMobileSidebar,
    }),
    [
      collapsed,
      sidebarOpen,
      toggleSidebar,
      openSidebar,
      closeSidebar,
      toggleMobileSidebar,
    ]
  );

  return (
    <DashboardLayoutContext.Provider
      value={value}
    >
      {children}
    </DashboardLayoutContext.Provider>
  );
};