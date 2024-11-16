const { nextui } = require("@nextui-org/react");
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
            accent: "#bad32c",
            subtle: "#011627",
            primary: "#09061b",
            secondary: "#FFFFFF",
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
            accent: "#bad32c",
            subtle: "#011627",
            primary: "#dccdbf",
            secondary: "#42547b",
            tertiary: "#FFFFFF",
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
            accent: "#09061b",
            subtle: "#837469",
            primary: "#dccdbf",
            secondary: "#09061b",
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
  ],
};
