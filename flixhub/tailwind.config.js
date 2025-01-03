/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main:'#00A8E1',
        background: '#01133d',
        // second: ''
      },
      fontFamily: {
        geist: ['geist','sans-serif'],
        lora: ['lora','sans-serif'],
        nunito: ['nunito','sans-serif'],
        poppins: ['poppins','sans-serif'],
        source: ['source','sans-serif'],
        fira: ['fira','sans-serif'],
        inter: ['inter','sans-serif'],
        roboto: ['roboto','sans-serif'],
      },
    },
  },
  plugins: [],
}