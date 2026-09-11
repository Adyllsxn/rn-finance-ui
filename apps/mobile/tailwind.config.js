/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        lime: {
          DEFAULT: "#D0F244", // Cor verde lima neon destaque do design
          light: "#E1FB6C",
          dark: "#A3C718",
        },
        card: {
          dark: "#121314",
          light: "#F3F4F6",
        }
      },
    },
  },
  plugins: [],
};