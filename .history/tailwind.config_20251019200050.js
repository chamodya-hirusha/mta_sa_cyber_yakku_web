/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        
        'sm': '640px',
        'md': '768px',
        'lg': '1224px',
        'xl': '1280px',
        '2xl': '1536px',
        'mobile': '480px',
        'tablet': '900px',
        'desktop': '1200px',
      },
      container: {
        center: true, // centers the container
        padding: '5px', // optional padding inside container
        screens: {
          xs: '480px',
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
}
  
