import { Save } from "lucide-react";

const Input = ({
  label,
  value,
  onChange,
  type = "text",
}) => (
  <div>

    <label className="mb-2 block text-sm text-slate-400">
      {label}
    </label>

    <input
      type={type}
      value={value ?? ""}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
    />

  </div>
);

const GeneralSettings = ({
  general,
  onChange,
  onSave,
}) => {
  if (!general) return null;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="text-xl font-semibold text-white">
        General Settings
      </h2>

      <div className="mt-6 grid gap-5 md:grid-cols-2">

        <Input
          label="First Name"
          value={general.firstName}
          onChange={(v) =>
            onChange("firstName", v)
          }
        />

        <Input
          label="Last Name"
          value={general.lastName}
          onChange={(v) =>
            onChange("lastName", v)
          }
        />

        <Input
          label="Username"
          value={general.username}
          onChange={(v) =>
            onChange("username", v)
          }
        />

        <Input
          label="Email"
          type="email"
          value={general.email}
          onChange={(v) =>
            onChange("email", v)
          }
        />

        <Input
          label="Phone"
          value={general.phone}
          onChange={(v) =>
            onChange("phone", v)
          }
        />

        <Input
          label="Country"
          value={general.country}
          onChange={(v) =>
            onChange("country", v)
          }
        />

        <Input
          label="City"
          value={general.city}
          onChange={(v) =>
            onChange("city", v)
          }
        />

      </div>

      <div className="mt-8 flex justify-end">

        <button
          type="button"
          onClick={onSave}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
        >
          <Save size={18} />

          Save Changes

        </button>

      </div>

    </div>
  );
};

export default GeneralSettings;