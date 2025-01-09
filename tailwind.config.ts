import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ff8a6d",
        primaryText: "#a3a3a3",
        secondary: "#474747",
        bg: "#0d0d0d",
        dark: "#000000",
      },
      fontFamily: {},
      fontSize: {
        base: "calc(14px + 0.2vw)", // Custom base font size
      },
    },
  },
  plugins: [],
} satisfies Config;
