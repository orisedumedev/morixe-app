import { ChevronRight } from "lucide-react";
import { useLocation } from "react-router-dom";

import { NAVIGATION } from "@/constants";

const NavbarBreadcrumb = () => {
  const { pathname } = useLocation();

  let current = null;

  NAVIGATION.forEach((section) => {
    section.items.forEach((item) => {
      if (item.path === pathname) {
        current = item;
      }
    });
  });

  return (
    <div>

      <div className="flex items-center gap-2 text-sm text-slate-400">

        <span>Dashboard</span>

        {current && (
          <>
            <ChevronRight size={15} />

            <span className="text-white">
              {current.title}
            </span>
          </>
        )}

      </div>

      {current && (
        <p className="mt-1 text-xs text-slate-500">
          {current.description}
        </p>
      )}

    </div>
  );
};

export default NavbarBreadcrumb;