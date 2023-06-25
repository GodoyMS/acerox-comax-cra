/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.{js,jsx,ts,tsx}',],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primary:'#008080',
        primaryhover:"#0080A0",
        secondary:"#f7680f",
        secondaryhover:"#c6530c",
        tertiary:"#2f5496",
        tertiaryhover:"#213b69"

      }
    },
  },
  plugins: [],
}

