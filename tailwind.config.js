module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: "'Lato', sans-serif",
        merriweather: "'Merriweather', serif",
      },
      textColor: {
        'w-white': '#FFF',
        'w-gray-dark': '#535353',
        'w-gray-light': '#F1F1F1',
        'w-gray-extra-light': '#B9B9B9',
      },
      backgroundColor: {
        'w-white': '#FFF',
        'w-gray-dark': '#535353',
        'w-gray-light': '#F1F1F1',
        'w-gray-extra-light': '#B9B9B9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
