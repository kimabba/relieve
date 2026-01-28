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
        // Bloom & Rest Theme (Primary)
        primary: "#d97e6a",
        "primary-dark": "#c46a56",
        "background-light": "#fdfaf6",
        "background-dark": "#3d3530",
        "secondary-bg": "#f4dada",
        "accent-green": "#a4b494",
        "accent-teal": "#8fa882",
        "accent-gold": "#d97e6a",
        "text-main": "#5c4a43",
        "text-muted": "#7a6a5f",
        "warm-grey": "#9a8a7f",
        "subtle-gray": "#b5a89e",
        // Legacy bloom aliases
        "bloom-primary": "#d97e6a",
        "bloom-secondary": "#a4b494",
        "bloom-accent": "#f4dada",
        "bloom-bg": "#fdfaf6",
        "bloom-surface": "#ffffff",
        "bloom-text": "#5c4a43",
        "bloom-muted": "#7a6a5f",
        // Joyful Bloom Theme (for /joyful page)
        "primary-joy": "#FFD93D",
        "accent-pink": "#FF9292",
        "bg-cream": "#FFF9F0",
        "text-soft": "#4A4A4A",
      },
      fontFamily: {
        display: ["var(--font-merriweather)", "Merriweather", "serif"],
        body: ["var(--font-nunito)", "Nunito", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem", // 12px - Stitch default
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        // Bloom warm ambient drop shadows (terracotta tinted)
        "stitch-sm": "0 2px 8px rgba(217, 126, 106, 0.08)",
        stitch: "0 4px 20px rgba(217, 126, 106, 0.10)",
        "stitch-md": "0 8px 30px rgba(217, 126, 106, 0.12)",
        "stitch-lg": "0 12px 40px rgba(217, 126, 106, 0.15)",
        "stitch-xl": "0 20px 50px rgba(217, 126, 106, 0.18)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
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
      },
    },
  },
  plugins: [],
};
export default config;
