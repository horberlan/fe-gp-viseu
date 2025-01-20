import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      ...colors,
      brand: {
        red: "#f44250",
        yellow: "#fecc1b",
        green: "#6bd968",
        aqua: "#3defe9",
        blue: "#3992ff",
        pink: "#d83bd2",
      },
    },
  },
};