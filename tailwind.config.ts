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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "black": "#222",
        "white": "#DDD",
        "light-green": "#D3F0DF",
        "dark-green": "#005F59"
      },
      dropShadow: {
        "header": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "image": "0px 4px 35px rgba(0, 0, 0, 0.50)"
      }
    },
  },
  plugins: [],
};
export default config;
