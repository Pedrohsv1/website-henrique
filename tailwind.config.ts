import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green: {
          50: "#EEFFF5",
          100: "#D8FFEA",
          200: "#B4FED5",
          300: "#7AFBB6",
          400: "#39EF8D",
          500: "#0FD86D",
          600: "#05A650",
          700: "#088D47",
          800: "#0D6E3B",
          900: "#0D5A32",
          950: "#00331A",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
