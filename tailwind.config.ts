import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          900: "#0E1422",
          800: "#202533",
          700: "#333845",
          600: "#474B57",
          500: "#5C5F6A",
          400: "#71747E",
          300: "#878A92",
          200: "#B6B7BC",
          100: "#E6E7E8",
          50: "#E9E9EB",
          10: "#F6F6F6",
          0: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
