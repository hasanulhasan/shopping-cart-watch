/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6576FF",
        secondary: "#816BFF",
        border: "#DBDFEA",
        text: {
          "100": "#8091A7",
          "200": "#364A63"
        },
      }
    },
  },
  plugins: [],
}