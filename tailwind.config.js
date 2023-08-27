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
        'auth': "url('/img/Authentication.jpg')",
      },
      colors: {
        'foggy' : 'rgba(255, 255, 255, 0.9)'
      },
      dropShadow: {
        'white' : '0 4px 3px rgb(255, 255, 255, 0.25)'
      }
    },
  },
  plugins: [],
}
