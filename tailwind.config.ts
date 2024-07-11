import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: { 
        "darkItem": "#1e1f1f",
        "lightItem": "#6200EE",
        "primaryLight": "#3700B3",
        "errorLightItem": "#B00020",
        "errorDarkItem": "#CF6679",
        "redLightItem": "#E30425",
        "hoverItemDark": "#363637",
        "toggleDark": "#3F3F46",
        "toggleLight": "#D4D4D8"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
