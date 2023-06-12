/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ["var(--font-manrope)"],
        sans: ["var(--font-fira-sans)", ...defaultTheme.fontFamily.sans],
        mono: ["var(--font-fira-code)", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        theme: "var(--theme-bg)",
      },
    },
  },
  plugins: [],
};
