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
        // Joy Theme (Main)
        joy: {
          bg: "#FFFAF4",
          card: "#FFFFFF",
          pink: "#FF9E9E",
          pinkLight: "#FFD1D1",
          teal: "#73C7C7",
          tealDark: "#5EAAAA",
          yellow: "#FFD54F",
          text: "#4A4A4A",
          textLight: "#8A8A8A",
          dark: "#3D3D3D",
        },
        // Legacy aliases for compatibility
        primary: "#FF9E9E",
        "primary-dark": "#FF8E8E",
        "background-light": "#FFFAF4",
        "background-dark": "#3D3D3D",
        "secondary-bg": "#FFF5E6",
        "accent-green": "#73C7C7",
        "accent-teal": "#5EAAAA",
        "text-main": "#4A4A4A",
        "text-muted": "#8A8A8A",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", "Noto Sans KR", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "3rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.05)",
        glow: "0 0 20px rgba(255, 158, 158, 0.3)",
        "glow-teal": "0 0 20px rgba(115, 199, 199, 0.3)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "bounce-soft": "bounceSoft 2s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        bounceSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
