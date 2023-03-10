import { useState } from "react";

export function useForm({ initialFormFields, onSubmit }) {
  const [formFields, setFormFields] = useState(initialFormFields);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormFields((oldFormFields) => ({
      ...oldFormFields,
      [name]: {
        value,
      },
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(formFields);
  }

  return {
    handleChange,
    handleSubmit,
    formFields,
  };
}
