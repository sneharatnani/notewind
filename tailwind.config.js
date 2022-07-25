module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "481px",
      md: "769px",
      lg: "993px",
      xl: "1281px",
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins','sans - serif'",
      },
      gridTemplateColumns: {
        "1col": "repeat(1,1fr)",
        "2col": "repeat(2,1fr)",
        "3col": "repeat(3,1fr)",
        "4col": "repeat(4,1fr)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
