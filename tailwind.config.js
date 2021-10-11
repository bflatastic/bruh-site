module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter"],
        heading: ["BasementGrotesque"],
      },
      fontSize: {
        base: "15px",
        base1: "16px",
        base2: "17px",
      },
      colors: {
        primary: "#3aa0da",
        "primary-darker": "#308bbf",
        "dark-gray": "#161616",
      },
      height: {
        btn: "36px",
        "btn-lg": "46px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
