import { useState } from 'react';

const useForm = (initialValues: { [key: string]: string }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (errors[name]) setErrors({ ...errors, [name]: false }); // Clear error on input change
  };

  const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    Object.keys(values).forEach((key) => {
      newErrors[key] = values[key].trim() === '';
    });
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    errors,
    handleChange,
    validate,
    clearForm,
  };
};

export default useForm;
