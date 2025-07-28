// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}', // include this if you're using /src
  ],
  darkMode: 'class', // 🔥 THIS is what your setup needs
  theme: {
    extend: {},
  },
  plugins: [],
}
