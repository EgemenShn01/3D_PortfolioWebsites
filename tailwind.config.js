/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#dee3df",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "hero-pattern1": "url('/src/assets/heropng1.jpg')",
        "hero-pattern2" : "url('/src/assets/duvar.jpg')",
        "hero-pattern3": "url('/src/assets/duvar2.jpg')",
        "hero-pattern4": "url('/src/assets/ışıldama.png')",
        "hero-pattern5": "url('/src/assets/siyah.jpg')",
        "contact-pattern1":"url('/src/assets/mail.jpg')"
      },
    },
  },
  plugins: [],
};