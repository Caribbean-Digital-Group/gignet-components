const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",
      },
      colors: {
        bluegray: colors.blueGray,
        coolgray: colors.coolGray,
        lightblue: colors.lightBlue,
        teal: colors.teal,
        gignetgreen: {
          50: "#fafeff",
          100: "#f6fefe",
          200: "#c3f6f9",
          300: "#7decf2",
          400: "#1cdee8",
          500: "#15c7d0",
          600: "#13b5be",
          700: "#119fa7",
          800: "#0e858b",
          900: "#0a6166",
        },
        gignetblue: {
          50: "#11610b",
          100: "#f1f8fe",
          200: "#acd5f7",
          300: "#66b2ef",
          400: "#1c8ce8",
          500: "#1163a7",
          600: "#0e538b",
          700: "#0b3f6a",
          800: "#082f4f",
          900: "#051c2e",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("./src/utils/shadowPallete.plugin.js"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
