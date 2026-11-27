import { Link } from "react-router-dom";

import {
  InputField,
  SubmitButton,
} from "@/components/Ui";

import {
  useForgotPasswordForm,
} from "@/features/auth/hooks";

export default function ForgotPasswordForm() {
  const {
    values,
    errors,
    loading,
    handleChange,
    submit,
  } = useForgotPasswordForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <InputField
        id="email"
        name="email"
        label="Email Address"
        type="email"
        autoComplete="email"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange("email")}
        error={errors.email}
      />

      <SubmitButton loading={loading}>
        Send Reset Link
      </SubmitButton>

      <div className="text-center">
        <Link
          to="/login"
          className="
            text-blue-400
            hover:text-blue-300
            transition
          "
        >
          Back to Login
        </Link>
      </div>
    </form>
  );
}