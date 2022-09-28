/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Neuton", "sans-serif"],
      },
      colors: {
        cream: "#FFFCF1",
        blue: "#283338",
        main: "#5F7161",
        secondary: "#6D8B74",
        grey: "#D0C9C0",
        creambg: "#EFEAD8",
      },
      spacing: {
        38: "9.5rem",
      },
    },
  },
  plugins: [],
};
