import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        background: "#000000",
        surface: "#050507",
        border: "rgba(255,255,255,0.06)",
        accent: "#6b7280",
        accentAlt: "#374151",
        text: "#f8fafc",
        muted: "#94a3b8",
      },
      boxShadow: {
        glow: "0 6px 30px rgba(0,0,0,0.6)",
      },
      backgroundImage: {
        mesh: "radial-gradient(circle at top left, rgba(255,255,255,0.02), transparent 32%), radial-gradient(circle at bottom right, rgba(255,255,255,0.02), transparent 32%)",
        grid: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
        pulseSoft: "pulse 3s ease-in-out infinite",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

export default config;
