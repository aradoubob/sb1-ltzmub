/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenrod: '#FDD700',
        'custom-black': '#000000',
        'custom-white': '#FFFFFF',
      },
      backgroundColor: {
        'main': '#000000',
        'card': '#FFFFFF',
      },
    },
  },
  plugins: [],
}