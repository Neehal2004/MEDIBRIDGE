/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html",
    ],
    theme: {
      extend: {
        colors: {
          medired: {
            dark: "#9f2b2b",
            coral: "#ff5a58",
          },
          medicyan: {
            light: "#edfffe",
            bright: "#20d0ce",
          },
          mediteal: {
            deep: "#125774",
          },
        },
      },
    },
    plugins: [],
  }
  