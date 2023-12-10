import { motion, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Link from 'components/shared/link';

import { links } from '../../../utils';
import { Button } from '../button';

const ANIMATION_DURATION = 0.2;

const variants = {
  from: {
    opacity: 0,
    translateY: 30,
    transition: {
      duration: ANIMATION_DURATION,
    },
    transitionEnd: {
      zIndex: -1,
    },
  },
  to: {
    zIndex: 999,
    opacity: 1,
    translateY: 0,
    transition: {
      duration: ANIMATION_DURATION,
    },
  },
};

const MobileMenu = ({ isOpen }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start('to');
    } else {
      controls.start('from');
    }
  }, [isOpen, controls]);

  return (
    <motion.nav
      className="absolute top-[64px] right-8 left-8 z-[-1] hidden rounded-md bg-white px-8 pt-4 pb-7 shadow-[0px_10px_20px/primary-5] lg:block md:right-4 md:left-4"
      initial="from"
      animate={controls}
      variants={variants}
    >
      <ul className="flex flex-col gap-[10px] text-center">
        {links.map(({ text, to }, index) => (
          <li key={index}>
            <Link to={to}>{text}</Link>
          </li>
        ))}
        <li>
          <Button theme="primary-black-outlined">Contact Sales</Button>
        </li>
        <li>
          <Button theme="primary-black-outlined">Book a Demo</Button>
        </li>
      </ul>
    </motion.nav>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool,
};

MobileMenu.defaultProps = {
  isOpen: false,
};

export default MobileMenu;
