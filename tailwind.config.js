const { theme } = require("tailwindcss/stubs/defaultConfig.stub");

module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.js"],
  variants: {},
  plugins: [],
  theme:{
    colors:{
      ...theme.colors,
      violet : "#8b5cf6"
    }
  }
};
