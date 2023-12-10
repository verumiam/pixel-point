import clsx from 'clsx';
import PropTypes from 'prop-types';

import { Button } from '../button';

const Burger = ({ onBurgerClick, isMobileMenuOpen }) => {
  const firstLineClassName = clsx({
    'h-[4px] w-[30px] rounded-md bg-white transition': !isMobileMenuOpen,
    'absolute top-[50%] left-[50%] h-[4px] w-[30px] translate-x-[-50%] rotate-[45deg] bg-white':
      isMobileMenuOpen,
  });

  const secondLineClassName = clsx({
    'h-[4px] w-[30px] rounded-md bg-white transition': !isMobileMenuOpen,
    'w-0 bg-white': isMobileMenuOpen,
  });

  const thirdLineClassName = clsx({
    'h-[4px] w-[30px] rounded-md bg-white transition': !isMobileMenuOpen,
    'absolute top-[50%] left-[50%] h-[4px] w-[30px] translate-x-[-50%] rotate-[-45deg] bg-white':
      isMobileMenuOpen,
  });

  return (
    <Button
      className="relative hidden flex-col justify-center gap-[5px] py-[2px] px-[5px] sm:flex"
      theme="bg-none"
      size="xs"
      onClick={onBurgerClick}
    >
      <div className={firstLineClassName} />
      <div className={secondLineClassName} />
      <div className={thirdLineClassName} />
    </Button>
  );
};

Burger.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

export default Burger;
