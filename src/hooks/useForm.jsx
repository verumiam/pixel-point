'use client';

import { useState } from 'react';

const useForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const clearForm = () => {
    setEmail('');
    setError(null);
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
      return false;
    }

    if (!emailRegex.test(email)) {
      setError('Invalid email format');
      return false;
    }

    return true;
  };

  return {
    email,
    error,
    handleChange,
    validateEmail,
    clearForm,
  };
};

export default useForm;
