/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    '.preserve-3d': {
      transformStyle: 'preserve-3d',
    },

  });
});

module.exports = {
  content: ["./*.html", "./dist/*.js"],
  theme: {
    extend: {
      colors: {
        'Pinkku': '#D16BA5',
        'Unguku': '#86A8E7',
        'Cyan': '#5FFBF1',
      },
      fontFamily: {
        body: ['Monomaniac One'],
        title: ['Molle'],
      },
      boxShadow: {
        neon: "0 0 5px theme('colors.violet.600'), 0 0 10px theme('colors.slate.50')"
      },
    },
  },
  plugins: [Myclass],
}

