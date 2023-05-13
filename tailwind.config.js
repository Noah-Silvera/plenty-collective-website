/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'plenty-pink': {
          100: '#f5f0f0',
          200: '#f6dced',
          300: '#f7c6ea',
          400: '#f8b2e7',
          500: '#f99ee4',
          600: '#fa88e1',
          700: '#fb74de',
          800: '#fc62dc',
          900: '#fd4ad9',
        },
        'plenty-purple': {
          100: '#fef0ff',
          200: '#eadbef',
          300: '#d4c4de',
          400: '#bfaecf',
          500: '#b794d0',
          600: '#af78d1',
          700: '#a65cd2',
          800: '#9e3fd4',
          900: '#9625d5',
        },
        'plenty-blue': {
          100: '#a5c7e4',
          200: '#a0bce5',
          300: '#9cb3e6',
          400: '#98a9e8',
          500: '#94a1e9',
          600: '#8278ef',
          700: '#6f4ff5',
          800: '#5e2afa',
          900: '#4d04ff'
        },
        "plenty-green": {
          100: '#dcffef',
          200: '#b7ffcd',
          300: '#8cffca',
          400: '#6fff9b',
          500: '#57ff74',
          600: '#44e95d',
          700: '#2ccc40',
          800: '#15b125',
          900: '#00990c'
        }
      },
      fontFamily: {
        'liberation-sans': 'LiberationSans',
        'libre-baskerville': 'LibreBaskerville',
      }
    },
  },
  plugins: [],
}
