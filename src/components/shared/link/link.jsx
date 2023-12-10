/* eslint-disable jsx-a11y/anchor-is-valid */
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({ className, to, children, ...props }) => {
  if (to.startsWith('/')) {
    return (
      <NextLink className={className} href={to} {...props}>
        {children}
      </NextLink>
    );
  }

  return (
    <a className={className} href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
  size: null,
  theme: null,
};

export default Link;
