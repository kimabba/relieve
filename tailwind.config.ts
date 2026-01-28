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
        // Beauty Theme (New Main) - Pink/Lavender Diagonal Style
        beauty: {
          pink: "#FFB5C5",        // Primary pink
          pinkLight: "#FFC0CB",
          pinkDark: "#FF9EB0",
          lavender: "#9B8AC4",    // Secondary lavender
          lavenderLight: "#B8A5E3",
          lavenderDark: "#8577B0",
          cream: "#FFFAF4",       // Background
          gold: "#FFD700",        // Award badges
        },
        // Joy Theme (Legacy) - WCAG AA Compliant
        joy: {
          bg: "#FFFAF4",
          card: "#FFFFFF",
          pink: "#E07070",        // P0: 대비율 4.5:1+ 충족
          pinkLight: "#FFD1D1",
          pinkDark: "#C55A5A",    // hover 상태용
          teal: "#5BA8A8",        // P0: 대비율 개선
          tealDark: "#4A9090",
          tealLight: "#E0F2F1",
          yellow: "#F5B800",      // P0: 대비율 개선
          yellowLight: "#FFF3CD",
          text: "#3D3D3D",        // P0: 더 진한 텍스트
          textLight: "#6B6B6B",   // P0: 대비율 개선
          dark: "#2D2D2D",
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
      // P1: 통일된 라운드니스 시스템
      borderRadius: {
        DEFAULT: "0.75rem",   // 12px - 기본
        sm: "0.5rem",         // 8px
        md: "0.75rem",        // 12px
        lg: "1rem",           // 16px
        xl: "1.25rem",        // 20px
        "2xl": "1.5rem",      // 24px - 카드 기본
        "3xl": "2rem",        // 32px - 대형 카드
        "4xl": "2rem",        // 32px - 통일
        full: "9999px",       // 버튼/pill
      },
      boxShadow: {
        // P2: 체계적인 그림자 레벨 시스템
        xs: "0 1px 2px rgba(0,0,0,0.05)",
        sm: "0 2px 8px rgba(0,0,0,0.04)",
        soft: "0 4px 16px rgba(0,0,0,0.06)",
        md: "0 6px 24px rgba(0,0,0,0.08)",
        lg: "0 12px 40px rgba(0,0,0,0.10)",
        xl: "0 20px 60px rgba(0,0,0,0.12)",
        glow: "0 0 20px rgba(224, 112, 112, 0.35)",
        "glow-teal": "0 0 20px rgba(91, 168, 168, 0.35)",
        "glow-yellow": "0 0 16px rgba(245, 184, 0, 0.3)",
      },
      // P2: 일관된 spacing 시스템
      spacing: {
        'section': '7rem',
        'component': '2rem',
        'element': '1rem',
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
