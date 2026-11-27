import {
  useEffect,
  useState,
} from "react";

import { X } from "lucide-react";

const ProfileEditModal = ({
  open,
  user,
  onClose,
  onSave,
}) => {
  const [form, setForm] =
    useState(user);

  useEffect(() => {
    setForm(user);
  }, [user]);

  if (!open || !form) return null;

  const updateField = (
    field,
    value
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onSave?.(form);
    onClose?.();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">

      <div className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-800 p-6">

          <h2 className="text-xl font-semibold text-white">
            Edit Profile
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-800 hover:text-white"
          >
            <X size={20} />
          </button>

        </div>

        {/* Body */}

        <div className="space-y-5 p-6">

          <Input
            label="First Name"
            value={form.firstName}
            onChange={(v) =>
              updateField(
                "firstName",
                v
              )
            }
          />

          <Input
            label="Last Name"
            value={form.lastName}
            onChange={(v) =>
              updateField(
                "lastName",
                v
              )
            }
          />

          <Input
            label="Email"
            value={form.email}
            onChange={(v) =>
              updateField(
                "email",
                v
              )
            }
          />

          <Input
            label="Phone"
            value={form.phone}
            onChange={(v) =>
              updateField(
                "phone",
                v
              )
            }
          />

          <Input
            label="Country"
            value={form.country}
            onChange={(v) =>
              updateField(
                "country",
                v
              )
            }
          />

          <Input
            label="City"
            value={form.city}
            onChange={(v) =>
              updateField(
                "city",
                v
              )
            }
          />

          <Input
            label="Avatar URL"
            value={form.avatar}
            onChange={(v) =>
              updateField(
                "avatar",
                v
              )
            }
          />

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-3 border-t border-slate-800 p-6">

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 px-5 py-3 text-white transition hover:bg-slate-800"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
          >
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
};

const Input = ({
  label,
  value,
  onChange,
}) => (
  <div>

    <label className="mb-2 block text-sm text-slate-400">
      {label}
    </label>

    <input
      value={value ?? ""}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
    />

  </div>
);

export default ProfileEditModal;