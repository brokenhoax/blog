const { nextui } = require("@nextui-org/react");
import tailwindcssMotion from "tailwindcss-motion";
/** @type {import('tailwindcss').Config} */

const sharedLayout = {
  disabledOpacity: "0.3",
  radius: {
    small: "4px",
    medium: "6px",
    large: "8px",
  },
  borderWidth: {
    small: "1px",
    medium: "2px",
    large: "3px",
  },
};

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        /* NextUI fallback — matches darkOwl, not in palette cycle */
        dark: {
          colors: {
            accent: "#bad32c",
            subtle: "#011627",
            primary: "#09061b",
            secondary: "#FFFFFF",
            tertiary: "#011627",
            white: "#FFFFFF",
          },
          layout: sharedLayout,
        },
        /* Light gray “cloud” */
        light: {
          extend: "light",
          colors: {
            accent: "#5C7A9E",
            subtle: "#8B9CB3",
            primary: "#E8EEF4",
            secondary: "#243041",
            tertiary: "#F6F8FB",
            white: "#FFFFFF",
          },
          layout: sharedLayout,
        },
        darkOwl: {
          extend: "dark",
          colors: {
            accent: "#bad32c",
            subtle: "#011627",
            primary: "#09061b",
            secondary: "#FFFFFF",
            tertiary: "#011627",
            white: "#FFFFFF",
          },
          layout: sharedLayout,
        },
        /* Black & white */
        black: {
          extend: "dark",
          colors: {
            accent: "#FFFFFF",
            subtle: "#737373",
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#141414",
            white: "#FFFFFF",
          },
          layout: sharedLayout,
        },
        /* Blue / orange (formerly the old “light” theme) */
        preppy: {
          extend: "dark",
          colors: {
            accent: "#FF7844",
            subtle: "#547792",
            primary: "#213448",
            secondary: "#FFFFFF",
            tertiary: "#1a2a38",
            white: "#FFFFFF",
          },
          layout: sharedLayout,
        },
      },
    }),
    tailwindcssMotion,
  ],
};
