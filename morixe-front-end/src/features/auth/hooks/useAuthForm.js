import { useState } from "react";

export default function useAuthForm({
  initialValues,
  validate,
  onSubmit,
}) {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (valueOrEvent) => {
    const value =
        valueOrEvent?.target?.type === "checkbox"
        ? valueOrEvent.target.checked
        : valueOrEvent?.target?.value ?? valueOrEvent;

    setValues((prev) => ({
        ...prev,
        [field]: value,
    }));

    setErrors((prev) => ({
        ...prev,
        [field]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await submit();

    if (success) {
      // navigate("/dashboard");
    }
  };

  const setFieldValue = (field, value) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  const submit = async () => {
    const validationErrors = validate(values);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length) {
      return false;
    }

    setLoading(true);

    try {
      await onSubmit(values);

      return true;
    } finally {
      setLoading(false);
    }
  };

  return {
    values,
    errors,
    loading,
    handleChange,
    setFieldValue,
    handleSubmit,
    submit,
    reset,
  };
}