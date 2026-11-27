import {
  AuthLayout,
  AuthCard,
  AuthLogo,
} from "@/components/Auth";

import {
  LoginForm,
} from "@/features/auth/components";

const Login = () => {
  return (
    <AuthLayout>
      <AuthCard>
        <AuthLogo />
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
};

export default Login;