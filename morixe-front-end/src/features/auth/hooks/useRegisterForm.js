import useAuthForm from "./useAuthForm";
import { validateRegister } from "../validation";

export default function useRegisterForm() {
  return useAuthForm({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      phone: "",
      country: null,
      password: "",
      confirmPassword: "",
      referralCode: "",
      acceptTerms: false,
    },

    validate: validateRegister,

    async onSubmit(values) {
      const payload = {
        ...values,
        country: values.country?.value,
      };

      console.log(payload);

      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      // await authService.register(payload);
    },
  });
}