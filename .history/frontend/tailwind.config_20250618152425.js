 //** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ This includes all files in src with js/jsx/ts/tsx
    "./public/index.html"         // Optional: if you're using Tailwind classes in HTML
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
