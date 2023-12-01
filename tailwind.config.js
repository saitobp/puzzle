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
      boxShadow: {
        'bttn-hover': '-5px 5px 0px 0px rgb(184 0 64)',
        'bttn-md': '-5px 5px 0px 0px rgb(245 0 87)',
      },
    },
  },
  plugins: [],
}
