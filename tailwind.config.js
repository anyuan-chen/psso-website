module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgreen: {
          dark: "#1B361D",
        },
      },
      fontFamily: {
        sans: ["Helvetica", "Roboto"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
