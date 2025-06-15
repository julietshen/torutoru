/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        torutoru: {
          primary: "#f88d6a", // Brand Orange
          secondary: "#1a4a3c", // Brand Green
          accent: "#fdf6ef", // Brand Beige
          neutral: "#212121", // Brand Black
          "base-100": "#ffffff", // White
        },
      },
    ],
  },
}; 