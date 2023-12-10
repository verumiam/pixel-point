import PropTypes from 'prop-types';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head />
    <body>{children}</body>
  </html>
);

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RootLayout;
