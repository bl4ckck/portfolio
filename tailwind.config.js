module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: {
          drib1: "#f8f7f1",
          drib2: "#ebf2eb",
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      boxShadow: {
        cust1: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        cust2: "0 1px 2px 0 rgb(0 0 0 / 10%)",
      },
      borderWidth: {
        1: "1.5px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
