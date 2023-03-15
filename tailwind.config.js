/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'HSL(180, 100%, 95%)',
          100: 'HSL(180, 100%, 90%)',
          300: 'HSL(180, 100%, 75%)',
          500: 'HSL(180, 100%, 50%)',
          600: 'HSL(180, 60%, 50%)',
          700: 'HSL(180, 40%, 40%)',
          800: 'HSL(180, 35%, 35%)',
          900: 'HSL(180, 25%, 25%)',
        },
        neutral: {
          100: 'HSL(0, 0%, 97%)',
          200: 'HSL(0, 0%, 90%)',
          300: 'HSL(0, 0%, 75%)',
          500: 'HSL(0, 0%, 50%)',
          700: 'HSL(0, 0%, 35%)',
          900: 'HSL(0, 0%, 20%)',
        },
        accent1: {
          100: 'HSL(60, 100%, 90%)',
          300: 'HSL(60, 100%, 75%)',
          500: 'HSL(60, 100%, 50%)',
          600: 'HSL(57, 100%, 50%)',
          700: 'HSL(53, 100%, 50%)',
          800: 'HSL(50, 90%, 40%)',
          900: 'HSL(48, 50%, 40%)',
        },
        accent2: {
          100: 'HSL(300, 100%, 90%)',
          300: 'HSL(300, 100%, 75%)',
          500: 'HSL(300, 100%, 50%)',
          700: 'HSL(300, 60%, 50%)',
          900: 'HSL(300, 40%, 40%)',
        },
        accent3: {
          100: 'HSL(280, 100%, 90%)',
          300: 'HSL(280, 100%, 75%)',
          500: 'HSL(280, 100%, 50%)',
          700: 'HSL(280, 60%, 50%)',
          900: 'HSL(280, 40%, 40%)',
        },
        accent4: {
          100: 'HSL(90, 100%, 90%)',
          300: 'HSL(90, 100%, 75%)',
          500: 'HSL(90, 100%, 50%)',
          700: 'HSL(90, 60%, 50%)',
          900: 'HSL(90, 40%, 40%)',
        },
      },
    },
  },
  plugins: [],
}