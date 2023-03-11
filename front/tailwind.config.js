/ @type {import('tailwindcss').Config} */;

module.exports = {
  content: ["./pages//*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#8bc441",
        secondaryColor: "#548ccc",
        colorYellow: "#edbf11",
        DarkGreen: "#57a94d",
        colorRed: "#de2026",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryLightGray: "#eee",
        exLightGray: "hsl(0, 0%, 98%)",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
