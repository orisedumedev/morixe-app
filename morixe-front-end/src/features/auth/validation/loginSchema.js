export const validateLogin = (values) => {
  const errors = {};

  if (!values.email.trim()) {
    errors.email = "Email is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  return errors;
};