
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        xl: 'var(--radius)'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(0,0,0,0.08)'
      },
      colors: {
        brand: {
          DEFAULT: "#679966",
          dark: "#4e7550",
          light: "#89b58a"
        }
      }
    },
  },
  plugins: [],
}
