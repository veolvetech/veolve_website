/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Glot', 'Inter', 'system-ui'],
        body: ['Inter', 'system-ui'],
      },
    },
  },
  plugins: [],
}
