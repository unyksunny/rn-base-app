/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        azure: {
          50: '#F3F8FF',
          100: '#E6F0FF',
          200: '#C7DDFF',
          300: '#9EC5FF',
          400: '#6FA8FF',
          500: '#3B82F6', // Primary Azure Blue
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#172554',
        },
        neutralBg: '#F8FAFC',
        surface: '#FFFFFF',
        borderSoft: '#E2E8F0',
      },
      borderRadius: {
        xl: '16px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
};
