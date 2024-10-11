/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3A1C1C',
        secondary: '#C8C2B8',
        accent: '#3A1C1C',
        background: '#F9F3EE',
        boldtext: '#181A18',
        text: '#FCFCFC'
      }
    },
  },
  plugins: [daisyui,],
}