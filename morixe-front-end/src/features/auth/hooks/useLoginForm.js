import useAuthForm from "./useAuthForm";
import { validateLogin } from "../validation";

export default function useLoginForm() {
  return useAuthForm({
    initialValues: {
      email: "",
      password: "",
      remember: false,
    },

    validate: validateLogin,

    async onSubmit(values) {
      console.log(values);

      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      // await authService.login(values);
    },
  });
}