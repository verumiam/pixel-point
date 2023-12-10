'use client';

import { Button } from 'components/shared/button';
import useForm from 'hooks/useForm';

import useApi from '../../../hooks/useApi';

const Input = () => {
  const { email, error, handleChange, validateEmail, clearForm } = useForm();
  const { status, sendEmail } = useApi();

  const handleSubmit = async () => {
    try {
      if (validateEmail()) {
        await sendEmail(email);
        setTimeout(() => clearForm(), 5000);
      }
    } catch (error) {
      clearForm();
    }
  };

  const handleKeyPress = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await handleSubmit();
    }
  };

  return (
    <>
      <div className="to-primary-white flex h-[60px] w-[504px] items-center justify-between gap-[6px] rounded-[45px] border-[1px] border-solid border-primary-4 border-opacity-[1] bg-gradient-to-r from-primary-4 bg-blend-overlay sm:w-full">
        <input
          placeholder={status === 'error' ? 'Oops! Something went wrong' : 'Your business email...'}
          type="text"
          value={email}
          className="w-full border-none bg-transparent py-[20px] pl-[32px] text-[16px] outline-none"
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
        {status ? (
          <Button status={status} className="mr-[6px]" />
        ) : (
          <Button
            size="md"
            className="mr-[6px] text-[14px] xs:min-w-[84px]"
            theme="primary-purple-filled"
            onClick={handleSubmit}
          >
            Free Trial
          </Button>
        )}
      </div>
      <span className="ml-[32px] mt-[12px] text-secondary-3">{error && error}</span>
    </>
  );
};

export default Input;
