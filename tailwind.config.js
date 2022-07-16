module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "993px",
      xl: "1281px",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
