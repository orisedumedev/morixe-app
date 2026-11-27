import { useContext } from "react";

import { DashboardLayoutContext } from "../context";

const useDashboardLayout = () => {
  const context = useContext(
    DashboardLayoutContext
  );

  if (!context) {
    throw new Error(
      "useDashboardLayout must be used inside DashboardLayoutProvider."
    );
  }

  return context;
};

export default useDashboardLayout;