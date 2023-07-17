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
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'BackFace': "url('img/Backface.png')",
      },
      colors: {
        'PurpleKu': '#8100BE',
        'AbuKu': '#5E6F83',
      },
      fontFamily: {
        body: ['Monomaniac One'],
        title: ['Molle'],
      }
    },
  },
  plugins: [Myclass],
}

