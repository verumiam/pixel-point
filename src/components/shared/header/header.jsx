import PropTypes from 'prop-types';
import React from 'react';

import Burger from 'components/shared/burger';
import { Link, Button } from 'components/shared/button';
import Container from 'components/shared/container';
import ArrowDown from 'icons/arrow-down';
import { links } from 'utils';

const Header = ({ isMobileMenuOpen, onBurgerClick }) => (
  <header>
    <Container>
      <nav className="font-roboto flex items-center justify-end gap-[244px] pt-[14px] pb-[15px] md:justify-between md:gap-[10px] sm:justify-end">
        <ul className=" flex gap-[40px] sm:hidden">
          {links.map(({ to, text }, index) => (
            <li key={index}>
              <Link className="flex items-center gap-[4px] md:text-[14px]" theme="white" to={to}>
                {text}
                {index !== 0 && <ArrowDown />}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-[32px] md:gap-[10px] sm:hidden">
          <Button className="md:text-[14px] " theme="primary-white-outlined">
            Contact Sales
          </Button>
          <Button className="text-[15px] md:text-[14px]" size="sm" theme="primary-white-filled">
            Book a Demo
          </Button>
        </div>
        <Burger isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={onBurgerClick} />
      </nav>
    </Container>
  </header>
);

Header.propTypes = {
  isMobileMenuOpen: PropTypes.bool,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  isMobileMenuOpen: false,
};

export default Header;
