/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bright-pink': '#f50057',
        'bright-blue': '#18c8f5',
        'dark-pink': '#b80040',
        'dark-blue': '#0888a8',
        beige: '#fff9ec',
        black: '#000000',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
