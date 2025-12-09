/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#000000', // Black background
        'accent-gold': '#FFD700',  // Gold/Yellow for highlights
        'text-light': '#FFFFFF',   // White text
        'bg-primary-dark':'#000000',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}