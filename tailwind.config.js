/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tech-blue": "#3B82F6",
        "tech-teal": "#14B8A6",
        "tech-lime": "#A3E635",
        "tech-lime-dark": "#3f6212",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
