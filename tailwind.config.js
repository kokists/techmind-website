// tailwind.config.js
/** @type {import('tailwindcss').Config} */

module.exports = {
  // Purge unused styles in production by specifying paths
  content: [
    "./index.html",
    // Ensure this pattern correctly covers all files where you use Tailwind classes
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Define theme customizations
  theme: {
    extend: {
      // Custom colors for TechMind themes (Adjust hex codes as needed)
      colors: {
        "tech-blue": "#3B82F6", // Example: Blue-500
        "tech-blue-dark": "#1e3a8a", // Example: Blue-900 (Adjust for desired background darkness)
        "tech-teal": "#14B8A6", // Example: Teal-500
        "tech-lime": "#A3E635", // Example: Lime-400
        "tech-lime-dark": "#3f6212", // Example: Lime-900 (Adjust for desired background darkness)
        // Add any other custom colors from your brand guide here
      },

      // Custom keyframes for animations
      keyframes: {
        // Animation for the gradient overlay movement
        gradientOverlay: {
          "0%, 100%": { backgroundPosition: "0% 50%" }, // Start/End position
          "50%": { backgroundPosition: "100% 50%" }, // Midpoint position
        },
        // Example: Optional looping background animation (adjust properties as needed)
        backgroundLoop: {
          "0%, 100%": { transform: "scale(1.0) /* filter(blur(0px)) */" }, // You might add blur here too
          "50%": { transform: "scale(1.03) /* filter(blur(1px)) */" },
        },
        // Add other custom keyframes if needed
      },

      // Custom animation utilities using the keyframes
      animation: {
        // Utility class 'animate-gradient-overlay' uses the keyframes above
        "gradient-overlay": "gradientOverlay 15s ease infinite", // Adjust duration and timing (15s is example)
        // Example: Optional background loop utility
        "bg-loop": "backgroundLoop 25s ease-in-out infinite", // Adjust duration/timing
        // Add other custom animations here
      },

      // You can extend other theme properties here (fonts, spacing, etc.)
      // fontFamily: {
      //   sans: ['YourFontName', 'sans-serif'],
      // },
    },
  },
  // Include Tailwind CSS plugins
  plugins: [
    // Plugin for basic form styling resets
    require("@tailwindcss/forms"),
    // Add other plugins here if you use them (e.g., aspect-ratio, typography)
  ],
};
