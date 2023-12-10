import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Header from 'components/shared/header';
import SEO from 'components/shared/seo';

import 'styles/main.css';

const DynamicMobileMenu = dynamic(() => import('../../components/shared/mobile-menu'));

const LayoutMain = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHeaderBurgerClick = () => setIsMobileMenuOpen((prevState) => !prevState);

  return (
    <>
      <SEO />
      <Header isMobileMenuOpen={isMobileMenuOpen} onBurgerClick={handleHeaderBurgerClick} />
      <main>{children}</main>
      <DynamicMobileMenu isOpen={isMobileMenuOpen} />
    </>
  );
};

LayoutMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMain;
