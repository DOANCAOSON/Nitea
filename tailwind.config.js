/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#789363',
        'text-#0000': '#243c5a',
        "boder": "#000",
        "themtest": "#F4F4F4",
        "footer": "#575757",
        "footer-them": "#969696",
        "backgroundopacity": "rgba(255,255,255,0.4)",
        "backgroundopacityslider": "rgba(0,0,0,0.1)",
        "backgroundopacityTOP": "rgba(0,0,0,0.6)",
        "btn": "#5dacdc",
        "btnhover": "#EE0000",
        "backgroundopacitywhite": "rgba(255,255,255,0.5)",
        "bgwhite": "#FFFFFF",
        "texthover": "#f70909",


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
      }
    },
  },
  plugins: [],
}