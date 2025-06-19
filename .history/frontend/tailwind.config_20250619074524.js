 /** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ includes jsx & tsx files too
    "./public/index.html"         // ✅ optional: if you use Tailwind in HTML
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5f6FFF"
      },
      gridTemplateColumns:{
      }
    },
  },
  plugins: [],
}
