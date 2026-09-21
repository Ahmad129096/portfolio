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
        background: "#0a0a09",
        surface: "#141311",
        border: "rgba(255,255,255,0.08)",
        accent: "#c9a24d",
        text: "#eeece6",
        muted: "#928c7d",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.35)",
      },
      animation: {
        "spin-slow": "spin 6s linear infinite",
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
