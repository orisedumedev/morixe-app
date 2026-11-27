import useAuthForm from "./useAuthForm";
import { validateForgotPassword } from "../validation";

export default function useForgotPasswordForm() {
  return useAuthForm({
    initialValues: {
      email: "",
    },

    validate: validateForgotPassword,

    async onSubmit(values) {
      console.log(values);

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      // await authService.forgotPassword(values);
    },
  });
}