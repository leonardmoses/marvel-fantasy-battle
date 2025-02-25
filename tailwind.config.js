/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#1B1B3A",
        Secondary: "#693668",
        MarvelRed: "#e62429",
        MarvelBlack: "#202020",
        ThemeWhite: "#D7D9D7",
        ThemeWhite2: "#FFFFFA",

        ThemeA1: "#D11664",
        ThemeA2: "#A03988",
        ThemeA3: "#644C8E",
        ThemeA4: "#354F7A",
        ThemeA5: "#2F4858",

        ThemeB1: "#ED0058",
        ThemeB2: "#E40985",
        ThemeB3: "#CB37AE",
        ThemeB4: "#A155CF",
        ThemeB5: "#5F6BE4",
      },
      animation: {
        grow: "grow 0.5s ease-in-out infinite",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
