/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // important for Vite
    "./src/**/*.{js,ts,jsx,tsx}",  // scan all React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

