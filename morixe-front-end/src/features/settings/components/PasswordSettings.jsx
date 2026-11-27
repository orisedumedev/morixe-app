import {
  useState,
} from "react";

import {
  Lock,
  Save,
} from "lucide-react";

const PasswordSettings = ({
  password,
  onSave,
}) => {
  const [
    currentPassword,
    setCurrentPassword,
  ] = useState("");

  const [
    newPassword,
    setNewPassword,
  ] = useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const handleSubmit = () => {
    onSave?.({
      currentPassword,
      newPassword,
      confirmPassword,
    });

    setCurrentPassword("");

    setNewPassword("");

    setConfirmPassword("");
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="flex items-center gap-3">

        <Lock
          size={22}
          className="text-blue-400"
        />

        <h2 className="text-xl font-semibold text-white">
          Password
        </h2>

      </div>

      <p className="mt-2 text-sm text-slate-400">
        Last Updated:{" "}
        {password?.lastUpdated}
      </p>

      <div className="mt-6 space-y-5">

        <Field
          label="Current Password"
          value={currentPassword}
          onChange={
            setCurrentPassword
          }
        />

        <Field
          label="New Password"
          value={newPassword}
          onChange={
            setNewPassword
          }
        />

        <Field
          label="Confirm Password"
          value={confirmPassword}
          onChange={
            setConfirmPassword
          }
        />

      </div>

      <div className="mt-8 flex justify-end">

        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-500"
        >
          <Save size={18} />

          Update Password

        </button>

      </div>

    </div>
  );
};

const Field = ({
  label,
  value,
  onChange,
}) => (
  <div>

    <label className="mb-2 block text-sm text-slate-400">
      {label}
    </label>

    <input
      type="password"
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
      className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
    />

  </div>
);

export default PasswordSettings;