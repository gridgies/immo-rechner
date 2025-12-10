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
          DEFAULT: "#7199a2", // Teal - your brand color
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#7199a2", // Same as primary for consistency
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#5d7e87", // Darker teal
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
