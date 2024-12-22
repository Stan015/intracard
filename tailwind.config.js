/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        action: "#6958b5",
        actionhover: "#a68ce3",
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
