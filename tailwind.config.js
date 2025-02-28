const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", ...fontFamily.serif],
        sourceSans: ["Source Sans 3", ...fontFamily.sans],
      },
    },
  },
};
