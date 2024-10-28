import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/useForm';
import './styles.css';

const Form: React.FC = () => {
  const { values, errors, handleChange, validate, clearForm } = useForm({ name: '', email: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates 2 seconds of loading time

    return () => clearTimeout(timeoutId);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
      clearForm(); // Clear form fields after successful submission
    }
  };

  if (loading) return <p>Loading form...</p>;

  return (
    <div className="form__wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__group">
          <label htmlFor="name" className="form__label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`form__input ${errors.name ? 'form__input--error' : ''}`}
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && <p className="form__error">This field is required.</p>}
        </div>
        
        <div className="form__group">
          <label htmlFor="email" className="form__label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form__input ${errors.email ? 'form__input--error' : ''}`}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="form__error">This field is required.</p>}
        </div>
        
        <button type="submit" className="form__button form__button--primary">Submit</button>
      </form>
    </div>
  );
};

export default Form;
