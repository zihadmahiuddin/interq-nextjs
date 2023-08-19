/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#18161D",
        "main-secondary": "#6C8947",
        "alert-success": "#00C566",
        "alert-error": "#FF4747",
        "alert-warning": "#FACC15",
        "gray-10": "#FAFAFA",
        "gray-50": "#A3A4A9",
        "gray-100": "#51575D",
        "footer-copyright-background": "#121016"
      },
    },
    fontFamily: {
      heading: ["Playfair Display", "serif"],
      body: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
}
