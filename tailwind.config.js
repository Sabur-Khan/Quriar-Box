/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
        'Oxanium': ['Oxanium', 'sans-serif'],
      },
      maxWidth: {
        'container': '1144px',
      }
    },
  },
  plugins: [],
}