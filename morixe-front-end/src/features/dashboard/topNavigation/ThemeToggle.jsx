import { Moon, Sun } from "lucide-react";
import { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);

    // Later:
    // document.documentElement.classList.toggle("dark");
    // localStorage.setItem("theme", darkMode ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="
        p-2.5
        rounded-xl
        bg-slate-900
        hover:bg-slate-800
        transition
      "
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;