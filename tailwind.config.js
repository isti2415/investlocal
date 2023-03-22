// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit', // Just-In-Time mode for faster builds (optional, but recommended)
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'], // Configure the paths to your source files
    options: {
      safelist: [], // Add any classes that should not be purged (if needed)
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Add your custom styles here
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans], // Example of how to add a custom font family (optional)
    },
  },
  variants: {
    extend: {},
  },
  plugins:[require('@tailwindcss/forms')],
};
