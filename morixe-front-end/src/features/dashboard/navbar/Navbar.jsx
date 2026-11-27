import {
  MobileMenuButton,
  NavbarActions,
  NavbarBreadcrumb,
  NavbarNotifications,
  NavbarProfile,
  NavbarSearch,
} from ".";

import { useNavbar } from "../hooks";
import { useDashboardLayout } from "../../dashboard/hooks";

const Navbar = () => {
  const {
    user,
    notifications,
    search,
    setSearch,
    loading,
  } = useNavbar();

  const {
    openSidebar,
  } = useDashboardLayout();

  if (loading) {
    return (
      <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950 px-6">
        Loading...
      </header>
    );
  }

  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        h-20
        items-center
        justify-between
        border-b
        border-slate-800
        bg-slate-950/80
        px-6
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-6">

        <MobileMenuButton
          onClick={openSidebar}
        />

        <NavbarBreadcrumb />

        <NavbarSearch
          value={search}
          onChange={setSearch}
        />

      </div>

      <div className="flex items-center gap-4">

        <NavbarActions />

        <NavbarNotifications
          notifications={notifications}
        />

        <NavbarProfile
          user={user}
        />

      </div>
    </header>
  );
};

export default Navbar;