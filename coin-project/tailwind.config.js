/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      vazirMedium: "vazirMedium",
      vazirBold: "vazirBold",
      vazirExtraBold: "vazirExtraBold",
      vazirRegular: "vazirRegular",
    },
    extend: {
      animation: {
        borderItemsMenu: "borderItemsMenu .2s linear 1",
      },

      keyframes: {
        borderItemsMenu: {
          "0%": { width: "0px" },
          "100%": { width: "90px" },
        },
      },
    },
  },
  plugins: [],
};
