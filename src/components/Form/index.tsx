import React, { useState } from 'react';
import './styles.css';

const Form: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: false, email: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate fields
    const newErrors = {
      name: name.trim() === '',
      email: email.trim() === ''
    };
    setErrors(newErrors);

    // Proceed only if there are no errors
    if (!newErrors.name && !newErrors.email) {
      // Form submission logic goes here
      alert('Form submitted successfully!');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__group">
        <label htmlFor="name" className="form__label">Name</label>
        <input
          type="text"
          id="name"
          className={`form__input ${errors.name ? 'form__input--error' : ''}`}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="form__error">This field is required.</p>}
      </div>
      
      <div className="form__group">
        <label htmlFor="email" className="form__label">Email</label>
        <input
          type="email"
          id="email"
          className={`form__input ${errors.email ? 'form__input--error' : ''}`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="form__error">This field is required.</p>}
      </div>
      
      <button type="submit" className="form__button form__button--primary">Submit</button>
    </form>
  );
}

export default Form;
