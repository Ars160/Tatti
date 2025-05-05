/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js}'],
  theme: {
    extend: {
      colors: {
        'tatti-pink': '#FF97B2',
        'tatti-brown': '#4A3728',
        'tatti-light-pink': '#FDF6F0',
        'tatti-mint': '#D4EFDF',
        'tatti-yellow': '#F7DC6F',
        'tatti-bg': '#FDF6F0',
        'tatti-peach': '#FFB3A7',
        'tatti-light-green': '#A8D5BA',
        'tatti-gold': '#FFD700',
        'tatti-coral': '#E6B8AF',
        'tatti-gray-light': 'rgba(92, 90, 87, 0.1)'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lato': ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

