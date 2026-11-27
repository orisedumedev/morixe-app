import {
  Monitor,
  Moon,
  Sun,
} from "lucide-react";

const themes = [
  {
    value: "Light",
    icon: Sun,
  },
  {
    value: "Dark",
    icon: Moon,
  },
  {
    value: "System",
    icon: Monitor,
  },
];

const AppearanceSettings = ({
  appearance,
  onChange,
}) => {
  if (!appearance) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        Appearance
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        {themes.map((theme) => {
          const Icon = theme.icon;

          const active =
            appearance.theme ===
            theme.value;

          return (
            <button
              key={theme.value}
              type="button"
              onClick={() =>
                onChange(
                  "theme",
                  theme.value
                )
              }
              className={`rounded-xl border p-6 transition ${
                active
                  ? "border-blue-500 bg-blue-600/10"
                  : "border-slate-700 bg-slate-800 hover:border-slate-500"
              }`}
            >
              <Icon
                size={28}
                className={`mx-auto ${
                  active
                    ? "text-blue-400"
                    : "text-slate-400"
                }`}
              />

              <p className="mt-4 font-medium text-white">
                {theme.value}
              </p>

            </button>
          );
        })}

      </div>

    </div>
  );
};

export default AppearanceSettings;