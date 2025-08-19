/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // ✅ enable class-based dark mode
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#6b21a8',
        darkone: '#1f2937',
        'dark-darkone': '#f9fafb',
        bginput: '#f9fafb',
        'dark-bginput': '#1f2937',
        bordercolor: '#d1d5db',
        'dark-bordercolor': '#4b5563'
      }
    }
  },
  plugins: []
}