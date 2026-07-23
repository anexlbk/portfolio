/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        "tech-accent": "#00d4ff",
        "mkt-accent": "#ff6ec7",
        secondary: "#aaa6c3",
        tertiary: "#151030",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
