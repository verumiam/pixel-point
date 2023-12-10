import clsx from 'clsx';
import PropTypes from 'prop-types';

const style = {
  base: 'container safe-paddings',
};

const Container = ({ className: additionalClassName, children }) => {
  const className = clsx(style.base, additionalClassName);

  return <div className={className}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
