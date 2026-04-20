/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EAB308',
        danger: '#DC2626',
        dark: '#0B0B0B',
        metal: '#2A2A2A'
      }
    },
  },
  plugins: [],
}