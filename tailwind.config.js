/** @type {import('tailwindcss').Config} */

const colors = {
  transparent: twColors.transparent,
  black: '#2e3239',
  gray: '#f6f6f6',
  secondary: '#161d25',
  primary: '#ff9902',
  'bg-color': '#f2f2f5',
  aqua: '#268697',
};

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors,
    extend: {},
  },
  plugins: [],
};
