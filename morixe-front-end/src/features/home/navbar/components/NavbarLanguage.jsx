import { Languages } from "lucide-react";

import { usePublicNavbar } from "../hooks";

const NavbarLanguage = () => {
  const {
    language,
    languages,
    setLanguage,
  } = usePublicNavbar();

  return (
    <div
      className="
        hidden
        lg:flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-800
        bg-slate-900/70
        px-3
        py-2
      "
    >
      <Languages
        size={18}
        className="text-slate-400"
      />

      <select
        value={language}
        onChange={(e) =>
          setLanguage(e.target.value)
        }
        className="
          bg-transparent
          text-sm
          text-slate-300
          outline-none
          cursor-pointer
        "
      >
        {languages.map((item) => (
          <option
            key={item.code}
            value={item.code}
            className="bg-slate-900"
          >
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default NavbarLanguage;