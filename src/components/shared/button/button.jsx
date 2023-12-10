import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import SpinnerIcon from 'icons/spinner-icon';

import ErrorIcon from '../../../icons/error-icon';
import SuccessIcon from '../../../icons/success-icon';

const styles = {
  base: 'text-base border-none leading-none outline-none rounded-[40px] pointer',
  size: {
    xs: 'h-[40px] w-[40px]',
    sm: 'text-sm h-[35px] py-[10px] px-[18px]',
    md: 'h-[48px] min-w-[168px]',
  },
  theme: {
    white: 'text-white font-normal',
    'primary-white-filled': 'bg-white text-black font-semibold',
    'primary-white-outlined': 'bg-none text-white font-medium',
    'primary-purple-filled': 'bg-primary-1 text-black font-semibold',
    'none-filled': 'bg-none',
    loading:
      'rounded-full flex h-[48px] w-[48px] items-center justify-center py-[7px] px-[7px] bg-primary-1',
    success: 'bg-secondary-1',
    error: 'bg-primary-2',
  },
};

const Button = ({
  className: additionalClassName,
  to,
  size,
  theme,
  children,
  status = 'base',
  ...otherProps
}) => {
  const className = clsx(
    styles.base,
    styles.size[size],
    styles.theme[theme || status],
    additionalClassName
  );

  const Tag = to ? Link : 'button';

  switch (status) {
    case 'base':
      return (
        <Tag className={className} to={to} {...otherProps}>
          {children}
        </Tag>
      );
      break;
    case 'loading':
      return (
        <button className={className} disabled {...otherProps}>
          <SpinnerIcon />
        </button>
      );
      break;
    case 'error':
      return (
        <button className={className} disabled {...otherProps}>
          <ErrorIcon />
        </button>
      );
      break;
    case 'success':
      return (
        <button className={className} disabled {...otherProps}>
          <SuccessIcon />
        </button>
      );
      break;
  }
};

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(styles.size)).isRequired,
  theme: PropTypes.oneOf(Object.keys(styles.theme)).isRequired,
  children: PropTypes.node.isRequired,
  status: PropTypes.string,
};

Button.defaultProps = {
  className: null,
  to: null,
};

export default Button;
