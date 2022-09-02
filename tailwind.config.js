module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "361px",
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
      },
      colors: {
        labelColor: "rgba(0,0,0,.08)",
        labelTextColor: "#3c4043",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
