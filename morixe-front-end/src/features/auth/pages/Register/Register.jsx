import {
  AuthLayout,
  AuthCard,
  AuthLogo,
} from "@/components/Auth";

import {
  RegisterForm,
} from "@/features/auth/components";

const Register = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Create Your Account
          </h2>

          <p className="mt-2 text-slate-400">
            Join MORIXE and start trading with confidence.
          </p>
        </div>

        <RegisterForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Register;