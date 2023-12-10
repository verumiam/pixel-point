/* eslint-disable global-require */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    fontFamily: {
      sans: ['"Roboto"', '"Poppins"', '"EditorialNew"'],
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: '#0E0A0F',
      white: '#FFFFFF',
      primary: {
        1: '#9966FF',
        2: '#CB6AFB',
        3: '#F7E16E',
        4: 'rgba(203, 106, 251, 0.20)',
        5: 'rgba(26, 26, 26, 0.4)',
      },
      secondary: {
        1: '#40BFAA',
        2: '#4D66E5',
        3: '#F04242',
      },
      gray: {
        1: '#F0EEF1',
        2: '#FAF9FA',
      },
    }),
    screens: {
      '2xl': { max: '1919px' },
      xl: { max: '1535px' },
      lg: { max: '1279px' },
      md: { max: '1023px' },
      sm: { max: '767px' },
      xs: { max: '320px' },
    },
  },
  plugins: [require('tailwindcss-safe-area')],
};
