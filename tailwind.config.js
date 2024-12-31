const { nextui } = require("@nextui-org/react");
import tailwindcssMotion from "tailwindcss-motion";
/** @type {import('tailwindcss').Config} */

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
        dark: {
          colors: {
            accent: "#4783de",
            subtle: "#011627",
            primary: "#000000",
            secondary: "#FFFFFF",
            white: "#FFFFFF",
          },
          layout: {
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
          },
        },
        light: {
          colors: {
            accent: "#008473",
            subtle: "#d4d4d8",
            primary: "#e4e4e7",
            secondary: "#000000",
          },
          layout: {
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
          },
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
          layout: {
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
          },
        },
        lightOwl: {
          extend: "light",
          colors: {
            accent: "#FF00FF",
            subtle: "#011627",
            primary: "#0D0D0D",
            secondary: "#FFFFFF",
            tertiary: "#011627",
            white: "#FFFFFF",
          },
          layout: {
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
          },
        },
        black: {
          extend: "dark",
          colors: {
            accent: "#bad32c",
            subtle: "#011627",
            primary: "#000000",
            secondary: "#FFFFFF",
            tertiary: "#011627",
            white: "#FFFFFF",
          },
          layout: {
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
          },
        },
      },
    }),
    tailwindcssMotion,
  ],
};
