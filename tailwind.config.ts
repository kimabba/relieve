import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b89c6f",
        "primary-dark": "#9a825a",
        "background-light": "#faf7f5",
        "background-dark": "#282820",
        "secondary-bg": "#F3EFE9",
        "accent-green": "#5C6F68",
        "text-main": "#282820",
        "text-muted": "#5d5d55",
      },
      fontFamily: {
        display: ["var(--font-noto-serif)", "Noto Serif", "serif"],
        body: ["var(--font-noto-sans)", "Noto Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
