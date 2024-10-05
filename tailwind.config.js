/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Removed the extra space between extensions
  theme: {
    extend: {
      colors: {
        customPurple: '#65558F', // Custom color
      },
      screens: {
        '2xl': '1536px', // Already exists in Tailwind by default
        '3xl': '1920px', // Custom breakpoint for larger screens
        '4xl': '2560px', // Custom breakpoint for ultra-large screens
      },
    },
  },
  plugins: [],
}
