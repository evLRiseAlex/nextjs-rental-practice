/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router (Next.js 13+)
    "./components/**/*.{js,ts,jsx,tsx}", // Your components
  ],
  theme: {
    extend: {
      // Add custom theme extensions here
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 30%",
      },
    },
  },
  plugins: [],
};
