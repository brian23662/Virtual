import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (provided by client)
        plum: {
          DEFAULT: "#462e66", // primary deep purple
          50: "#f4f1f8",
          100: "#e6dff0",
          200: "#cdbfe1",
          300: "#a48fc8",
          400: "#7d63ad",
          500: "#5e4690",
          600: "#462e66",
          700: "#3a2655",
          800: "#2d1d42",
          900: "#1f1430",
          deep: "#2d1d42",
        },
        teal: {
          DEFAULT: "#14accc", // accent teal
          50: "#e6f7fb",
          100: "#c4ecf3",
          200: "#a2dfeb", // light cyan from palette
          300: "#74cfdf",
          400: "#3cbed4",
          500: "#14accc",
          600: "#0e8ba5",
          700: "#0a6b80",
          800: "#074d5c",
          900: "#04303a",
        },
        ink: {
          DEFAULT: "#252b2c", // charcoal
          soft: "#3a4243",
        },
        bone: "#f4f6f6", // off-white background
        haze: {
          DEFAULT: "#938c9c", // mid lavender-gray
          light: "#bfbcc4",
          deep: "#6f627c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "subtle-float": "subtle-float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
