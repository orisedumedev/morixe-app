export const validateRegister = (values) => {
  const errors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  if (!values.username.trim()) {
    errors.username = "Username is required";
  }

  if (!values.email.trim()) {
    errors.email = "Email is required";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number is required";
  }

  if (!values.country?.value) {
    errors.country = "Country is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Please confirm your password";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!values.acceptTerms) {
    errors.acceptTerms = "You must accept the Terms & Conditions";
  }

  return errors;
};