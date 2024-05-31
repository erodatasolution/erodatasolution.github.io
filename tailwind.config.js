/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        hero: "#F7FAFD",
        birutua: "#24417C",
        biru: "#355575",
        latar: "#FFFFFF",
      },
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
