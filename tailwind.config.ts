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
        // Bloom & Rest Theme
        "bloom-primary": "#d97e6a",
        "bloom-secondary": "#a4b494",
        "bloom-accent": "#f4dada",
        "bloom-bg": "#fdfaf6",
        "bloom-surface": "#ffffff",
        "bloom-text": "#5c4a43",
        "bloom-muted": "#7a6a5f",
        // Joyful Bloom Theme
        "primary-joy": "#FFD93D",
        "accent-pink": "#FF9292",
        "bg-cream": "#FFF9F0",
        "text-soft": "#4A4A4A",
        // Original Theme
        primary: "#b89c6f",
        "primary-dark": "#9a825a",
        "background-light": "#faf7f5",
        "background-dark": "#282820",
        "secondary-bg": "#F3EFE9",
        "accent-green": "#5C6F68",
        "accent-teal": "#4b7c7c",
        "accent-gold": "#c4a36e",
        "text-main": "#282820",
        "text-muted": "#5d5d55",
        "warm-grey": "#7e776d",
        "subtle-gray": "#7f776c",
      },
      fontFamily: {
        display: ["var(--font-noto-serif)", "Noto Serif", "serif"],
        body: ["var(--font-manrope)", "Manrope", "sans-serif"],
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
        // Stitch whisper-soft ambient drop shadows
        "stitch-sm": "0 2px 8px rgba(184, 156, 111, 0.06)",
        stitch: "0 4px 20px rgba(184, 156, 111, 0.08)",
        "stitch-md": "0 8px 30px rgba(184, 156, 111, 0.10)",
        "stitch-lg": "0 12px 40px rgba(184, 156, 111, 0.12)",
        "stitch-xl": "0 20px 50px rgba(184, 156, 111, 0.15)",
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
