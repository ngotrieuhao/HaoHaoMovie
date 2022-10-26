/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { body: ["DM Sans", "sans-serif"] },
      colors: {
        primary: "#F62682",
        secondary: "#dd003f",
        hoverButton: "#020d18",
        textColor: "#9cabb6",
        titleColor: "#f1b722",
        whiteColor: "#FFFFFF",
        slateColor: "#0F172A",
        goldColor: "#d2b48c",
      },
      backgroundImage: {
        slider: "url('~/public/slider.jpg')",
      },
    },
  },
  plugins: [],
};
