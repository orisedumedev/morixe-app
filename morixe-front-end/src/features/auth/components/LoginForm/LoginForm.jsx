import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";

import {
  InputField,
  PasswordField,
  Checkbox,
  SubmitButton,
  Divider,
  SocialLoginButton,
} from "@/components/Ui";

import { useLoginForm } from "@/features/auth/hooks";

import { handleSocialLogin } from "@/utils/Social";

const LoginForm = () => {
 
  const {
    values,
    errors,
    loading,
    handleChange,
    handleSubmit,
  } = useLoginForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8"
    >
      <InputField
        id="email"
        name="email"
        type="email"
        label="Email Address"
        autoComplete="email"
        icon={Mail}
        placeholder="john@example.com"
        value={values.email}
        onChange={handleChange("email")}
        error={errors.email}
      />
  
      <PasswordField
        id="password"
        name="password"
        label="Password"
        autoComplete="current-password"
        value={values.password}
        onChange={handleChange("password")}
        error={errors.password}
      />

      <div className="flex justify-between items-center mb-6">

        <Checkbox
          id="remember"
          name="remember"
          checked={values.remember}
          onChange={handleChange("remember")}
          label="Remember me"
        />

        <Link
          to="/forgot-password"
          className="text-blue-400 hover:text-blue-300 text-sm"
        >
          Forgot Password?
        </Link>

      </div>

      <SubmitButton loading={loading}>
        Sign In
      </SubmitButton>

      <Divider />

      <SocialLoginButton
        provider="Google"
        icon={FcGoogle}
        onClick={() => handleSocialLogin("Google")}
        />
        <Divider />

      <SocialLoginButton
        provider="Apple"
        icon={FaApple}
        variant="dark"
        onClick={() => handleSocialLogin("Apple")}
        />
        
        <Divider />

        <SocialLoginButton
            provider="GitHub"
            icon={FaGithub}
            variant="dark"
            onClick={() => handleSocialLogin("GitHub")}
        />

      <p className="mt-8 text-center text-slate-400">

        Don't have an account?

        <Link
          to="/register"
          className="ml-2 text-blue-400 hover:text-blue-300"
        >
          Create Account
        </Link>

      </p>

    </form>
  );
};

export default LoginForm;