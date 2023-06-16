/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    fontFamily: {
      display: ["Nunito", "sans-serif"],
    },
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primarycolor: "#F9A826",
      sidecolor: "#0b132b",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
  },
  plugins: [require("flowbite/plugin")],
};
