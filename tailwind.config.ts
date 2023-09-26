import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "main-white": "#f0ece4",
        "main-dark": "#151515",
        "main-second-dark": "#1D1C20",
        "main-DustyRose": "#d4a6b1",
        "main-PaleCoral": "#f5b7a5",
        "main-MutedBlue": "#536878",
      },
    },
  },
  plugins: [],
};
export default config;
