import { useState } from 'react';

interface UseFormReturn {
  values: {
      [key: string]: string;
  };
  errors: {
      [key: string]: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate: () => boolean;
  clearForm: () => void;
}

/**
 * useForm Hook:
 * @param records of key value pairs to the form 
 * @returns values and errors: Manages the form values and errors as single state objects.
 * @returns handleChange: Updates field values and clears specific errors if the user corrects them.
 * @returns validate: Validates all fields, setting errors for empty fields and returning a boolean indicating if the form is valid.
 * @returns clearForm: Resets form fields to their initial values after submission.
 *  
 */
const useForm = (initialValues: { [key: string]: string }): UseFormReturn => {
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
