/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JSX and TSX files in the src directory
    './public/index.html',         // If you have an HTML file in your public directory
  ],
  theme: {
    extend: {
      // You can extend the theme here, for example, add custom colors, fonts, etc.
    },
  },
  plugins: [],
}
