import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#222",
        white: "#DDD",
        red: "#BA1B1D",
        "light-green": "#D3F0DF",
        "dark-green": "#005F59",
      },
      dropShadow: {
        header: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        image: "0px 4px 35px rgba(0, 0, 0, 0.50)",
      },
      boxShadow: {
        'coverage': '0 4px 25px 5px rgba(0, 0, 0, 0.25)',
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      "mid-lg": "839px",
      lg: "1024px",
      "mid-xl": "1277px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
