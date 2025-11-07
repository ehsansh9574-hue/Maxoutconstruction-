/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#0074FF" // Electric Persian Blue from your logo
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0,116,255,0.45)',
      }
    }
  },
  plugins: []
};
