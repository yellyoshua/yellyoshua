module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        arvo: ["Arvo", "sans-serif"],
        varela: ["Varela Round", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    invert: true,
  },
};
