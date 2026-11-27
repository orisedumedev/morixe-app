import { useRegisterForm } from "@/features/auth/hooks";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Phone,
  Gift,
} from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import {
  handleSocialLogin
} from "@/utils/Social";

import {
  InputField,
  PasswordField,
  Checkbox,
  SubmitButton,
  Divider,
  SocialLoginButton,
  CountrySelect,
} from "@/components/Ui";

const RegisterForm = () => {

  const {
    values,
    errors,
    loading,
    handleChange,
    submit,
  } = useRegisterForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">

      <div className="grid md:grid-cols-2 gap-5">

        <InputField
          id="firstName"
          name="firstName"
          label="First Name"
          icon={User}
          autoComplete="given-name"
          value={values.firstName}
          onChange={handleChange("firstName")}
          error={errors.firstName}
        />

        <InputField
          id="lastName"
          name="lastName"
          label="Last Name"
          icon={User}
          autoComplete="family-name"
          value={values.lastName}
          onChange={handleChange("lastName")}
          error={errors.lastName}
        />

      </div>

      <InputField
        id="username"
        name="username"
        label="Username"
        autoComplete="username"
        icon={User}
        value={values.username}
        onChange={handleChange("username")}
        error={errors.username}
      />

      <InputField
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        label="Email Address"
        icon={Mail}
        value={values.email}
        onChange={handleChange("email")}
        error={errors.email}
      />

      <InputField
        id="phone"
        name="phone"
        type="tel"
        autoComplete="tel"
        label="Phone Number"
        icon={Phone}
        value={values.phone}
        onChange={handleChange("phone")}
        error={errors.phone}
      />

      <CountrySelect
        inputId="country"
        name="country"
        value={values.country}
        onChange={handleChange("country")}
        error={errors.country}
      />

      <PasswordField
        id="password"
        name="password"
        label="Password"
        autoComplete="new-password"
        value={values.password}
        onChange={handleChange("password")}
        error={errors.password}
      />

      <PasswordField
        id="confirmPassword"
        name="confirmPassword"
        label="Confirm Password"
        autoComplete="new-password"
        value={values.confirmPassword}
        onChange={handleChange("confirmPassword")}
        error={errors.confirmPassword}
      />

      <InputField
        id="referralCode"
        name="referralCode"
        label="Referral Code (Optional)"
        icon={Gift}
        value={values.referralCode}
        onChange={handleChange("referralCode")}
      />

      <Checkbox
        id="acceptTerms"
        name="acceptTerms"
        checked={values.acceptTerms}
        onChange={handleChange("acceptTerms")}
        label="I agree to the Terms & Conditions"
      />

      {errors.acceptTerms && (
        <p className="text-red-400 text-sm">
          {errors.acceptTerms}
        </p>
      )}

      <SubmitButton loading={loading}>
        Create Account
      </SubmitButton>

      <Divider text="OR" />

      <SocialLoginButton
        provider="Google"
        icon={FcGoogle}
        onClick={() => handleSocialLogin("Google")}
      />

      <p className="text-center text-slate-400">

        Already have an account?

        <Link
          to="/login"
          className="ml-2 text-blue-400 hover:text-blue-300"
        >
          Sign In
        </Link>

      </p>

    </form>
  );
};

export default RegisterForm;