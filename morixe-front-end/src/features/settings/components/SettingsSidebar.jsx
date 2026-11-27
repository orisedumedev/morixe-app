import {
  User,
  Shield,
  Bell,
  Palette,
  Globe,
  DollarSign,
  Lock,
  AlertTriangle,
} from "lucide-react";

import { settingsMenu } from "../data";`
`

const SettingsSidebar = ({
  active,
  onChange,
}) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">

      <nav className="space-y-2">

        {settingsMenu.map((item) => {
          const Icon = item.icon;

          const isActive =
            active === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                onChange(item.id)
              }
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icon size={18} />

              <span className="font-medium">
                {item.label}
              </span>

            </button>
          );
        })}

      </nav>

    </div>
  );
};

export default SettingsSidebar;