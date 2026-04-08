import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        brand: {
          50: "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a5b9fc",
          400: "#8194f8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#3730a3",
          800: "#312e81",
          900: "#1e1b4b",
          950: "#0f0d2e",
        },
        amber: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        teal: {
          400: "#2dd4bf",
          500: "#14b8a6",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, #0f0d2e 0%, #1e1b4b 40%, #312e81 70%, #1e1b4b 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(45,212,191,0.05) 100%)",
        "cta-gradient":
          "linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #14b8a6 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.3)",
        "glow-amber": "0 0 40px rgba(251,191,36,0.3)",
        card: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        "card-hover":
          "0 20px 60px rgba(99,102,241,0.2), 0 4px 16px rgba(0,0,0,0.1)",
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
