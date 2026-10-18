/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "ui-sans-serif", "system-ui"],
        display: ["Space Grotesk", "DM Sans", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 20px 70px rgba(15, 23, 42, 0.10)",
        "soft-dark": "0 20px 70px rgba(0, 0, 0, 0.28)"
      }
    }
  },
  plugins: []
};
