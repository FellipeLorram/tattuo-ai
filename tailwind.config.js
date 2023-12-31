/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', ...fontFamily.sans],
        logo: ['var(--font-staatliches)', ...fontFamily.serif],
      },
      colors: {
        gray: {
          50: '#fafafa',
          300: '#c1c1c1',
          400: '#2b2b2b',
          600: '#616161',
          700: '#414141',
          850: '#1a1a1a',
          900: '#111111'
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}