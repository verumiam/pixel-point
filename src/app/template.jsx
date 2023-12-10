'use client';

import PropTypes from 'prop-types';

import LayoutMain from 'layouts/layout-main';

const Template = ({ children }) => <LayoutMain>{children}</LayoutMain>;

Template.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Template;
