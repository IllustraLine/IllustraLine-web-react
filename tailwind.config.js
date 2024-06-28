/** @type {import('tailwindcss').Config} */
export default {
  content: [`./index.html`, `./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(141deg, rgba(250,249,255,1) 0%, rgba(235,210,247,1) 15%, rgba(199,216,241,1) 34%, rgba(197,220,237,1) 62%, rgba(227,218,238,1) 82%, rgba(225,238,241,1) 100%);",
      },
    },
  },
  plugins: [],
};
