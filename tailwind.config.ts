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
        "hoverItemDark": "#363637",
        "hoverTableDark": "#2c2c2c",
        "erroDarkItem": "#CF6679",
        "toggleDark": "#3F3F46",
        "secundary": "#03DAC5",
        "purpleDark": "#BB86FC",
        
        "lightItem": "#6200EE",
        "primaryLight": "#3700B3",
        "purpleLight": "#4B00D1",
        "purpleTable": "#dbb2ff",
        "errorLightItem": "#B00020",
        "redLightItem": "#E30425",
        "greenLightItem": "#2E7D32",
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
