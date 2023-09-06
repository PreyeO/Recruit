/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-btn": "#284B63",
        "primary-dark": "#2E4A64",
        "dark-blue": "#004e98",
        "light-gray": "#7a7a7a",
        "dark-gray": "#333333",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        robotoMono: ["Roboto Mono", "monospace"],
        plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        slide: {
          "0%": { right: "-192px" },
          "100%": { right: "0" },
        },
        slideReverse: {
          "0%": { right: "0" },
          "100%": { right: "-192px" },
        },
      },
    },
  },
  plugins: [],
};
