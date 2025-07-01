/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A8EF6",
        secondary: "#6F3AFA",
      },
      backgroundImage: {
        primaryGradient: "linear-gradient(to right, #3A8EF6, #6F3AFA)",
      },
    },
  },
  plugins: [],
}
