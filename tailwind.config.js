/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colorBlack": "#000",
        "colorBlackbland": "#505050",
        "color": "#FFFFFF",
        "mainstream": "#B26135",
        "headerbackgrou": "#FFF",
        "headerbackgbtnFooter": "#FFF",
        "backgroundBtn": "#B26135",
        "textmainstream": "#B26135",
        "line": "#B26135",
      },
      boxShadow: {
        'boxshadowbottom': '0px 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}