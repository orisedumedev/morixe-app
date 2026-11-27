export const validateForgotPassword = (values) => {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required";
  }

  return errors;
};