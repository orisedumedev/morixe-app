import { LogOut } from "lucide-react";
import { useAuth } from "@/features/auth/context";

const SidebarFooter = ({ collapsed }) => {
  const { logout } = useAuth();

  return (
    <button
      onClick={logout}
      className="
        w-full
        flex
        items-center
        gap-4
        px-4
        py-3
        rounded-xl
        hover:bg-red-600
        transition
      "
    >
      <LogOut size={20} />

      {!collapsed && (
        <span>Logout</span>
      )}
    </button>
  );
};

export default SidebarFooter;