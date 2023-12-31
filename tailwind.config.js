const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
     "inter":["Inter", 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
});
