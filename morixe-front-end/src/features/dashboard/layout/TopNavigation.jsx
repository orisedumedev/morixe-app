import { Menu } from "lucide-react";

import SearchBar from "../topNavigation/SearchBar";
import NotificationButton from "../topNavigation/NotificationButton";
import UserMenu from "../topNavigation/UserMenu";

const TopNavigation = ({
  onMenuClick,
}) => {
  return (
    <header
      className="
        sticky
        top-0
        z-30
        h-20
        bg-slate-950
        border-b
        border-slate-800
        flex
        items-center
        justify-between
        px-6
      "
    >
      <div className="flex items-center gap-4">

        <button
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu size={24} />
        </button>

        <h1 className="text-xl font-semibold">
          Dashboard
        </h1>

      </div>

      <div className="flex items-center gap-4">

        <SearchBar />

        <NotificationButton />

        <UserMenu />

      </div>
    </header>
  );
};

export default TopNavigation;