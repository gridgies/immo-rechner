import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4B644A", // Dark green
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#9FB8AD", // Light green for buttons
          foreground: "#1f2937",
        },
        accent: {
          DEFAULT: "#7A9B8E", // Medium green
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#6B9F7F",
          foreground: "#ffffff",
        },
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
