'use client';

import axios from 'axios';
import { useState } from 'react';

const useApi = () => {
  const [status, setStatus] = useState(null);

  const sendEmail = async (email) => {
    setStatus('loading');

    try {
      const apiResponse = await axios.post('/api/send-email', JSON.stringify(email));
      console.log('API Response:', apiResponse);

      setStatus('success');
    } catch (error) {
      console.error('Error submitting data:', error.message);
      setStatus('error');
    }

    setTimeout(() => setStatus(null), 5000);
  };

  return {
    status,
    sendEmail,
  };
};

export default useApi;
