/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0D47A1',
        green: {
          DEFAULT: '#2E7D32',
          600: '#2E7D32',
          700: '#1B5E20',
        },
        dark: '#263238',
        light: '#F6F7F9',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
