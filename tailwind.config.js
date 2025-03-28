/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "gradient-blue": "pulseGradientBlue 10s ease-in-out infinite",
        "gradient-green": "pulseGradientGreen 10s ease-in-out infinite",
      },
      keyframes: {
        pulseGradientBlue: {
          "0%, 100%": { backgroundPosition: "100% 50%" },
          "50%": { backgroundPosition: "0% 50%" },
        },
        pulseGradientGreen: {
          "0%, 100%": { backgroundPosition: "100% 50%" },
          "50%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};
