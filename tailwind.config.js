/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html",],
  theme: {
    screens: {
      xxs: '360px',
      xs: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    extend: {
      backgroundImage: {
        heroMain: 'linear-gradient(180deg, #040094 0%, #201AF7 38.54%, #80DBE1 85.42%, #FFFFFF 100%)',
        heroGreen: 'linear-gradient(180deg, rgba(102,140,48,1) 0%, rgba(210,221,196,1) 100%)',
      }
    },
  },
  plugins: [],
}
