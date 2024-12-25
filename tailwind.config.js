/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        action: "#6c3baa",
        actionhover: "#6958b5",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
