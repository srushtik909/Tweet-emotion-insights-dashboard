/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1967D2',
          hover: '#185ABC',
          50: '#E8F0FE',
          100: '#D2E3FC',
          200: '#A6C8FF',
          300: '#7BAAF7',
          400: '#4285F4',
          500: '#1967D2',
          600: '#185ABC',
          700: '#1B4EA3',
          800: '#174EA6',
          900: '#174EA6'
        },
        background: {
          DEFAULT: '#F8FAFC',
          dark: '#1A1F36'
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")]
}