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

    boxShadow : {
      slow : "0 2px 2px rgba(99 , 99 , 99 , 0.3)"
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

      screens: {
        xs : "450px"
      }
    },
  },
  plugins: [],
};
