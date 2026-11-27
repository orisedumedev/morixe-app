import {
  AuthLayout,
  AuthCard,
  AuthLogo,
} from "@/components/Auth";

import { ForgotPasswordForm } from "@/features/auth/components";

export default function ForgotPassword() {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white">
            Forgot Password
          </h1>

          <p className="mt-3 text-slate-400">
            Enter your email address and we'll send you a password reset link.
          </p>
        </div>

        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}