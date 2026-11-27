import { Menu } from "lucide-react";

const MobileMenuButton = ({
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 lg:hidden"
    >

      <Menu size={20} />

    </button>
  );
};

export default MobileMenuButton;