// tailwind.config.js
import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#000409",
        foreground: "#a8b2d1",
        secondary: "#099fff",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) 

        laptop: "1024px",
        // => @media (min-width: 1024px) 

        desktop: "1280px",
        // => @media (min-width: 1280px) 
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;
