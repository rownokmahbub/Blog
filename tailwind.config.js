/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      daisyui: {
        themes: [
          {
            light: {
              ...require("daisyui/src/colors/themes")["[data-theme=light]"],
              primary: "#DA1E37",
              "primary-focus": "#E74848",
            },
          },
        ],
      },
    },
  },
  plugins: [ require("daisyui")],
}