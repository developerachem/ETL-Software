/** @type {import('tailwindcss').Config} */
import daisyUi from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "670px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",

      xxl: "1580px",

      xxxl: "1780px",

      "3xl": "2020px",

      "4xl": "2440px",

      xs: "360px",

      xsm: "468px",
    },

    extend: {
      colors: {
        primaryColor: "var(--primaryColor)",
        color200: "var(--color20)",
        color300: "var(--color30)",
        color400: "var(--color40)",
        color500: "var(--color50)",
        color600: "var(--color60)",
        color700: "var(--color70)",
        color800: "var(--color80)",
        color900: "var(--color90)",
      },
    },
  },

  daisyui: {
    themes: [
      {
        blue: {
          "--primaryColor": "#2D62AE",
          "--color20": "#2D62AE20",
          "--color30": "#2D62AE30",
          "--color40": "#2D62AE40",
          "--color50": "#2D62AE50",
          "--color60": "#2D62AE60",
          "--color70": "#2D62AE70",
          "--color80": "#2D62AE80",
          "--color90": "#2D62AE99",
        },
        yellow: {
          "--primaryColor": "#F89F20",
          "--color20": "#F89F2020",
          "--color30": "#F89F2030",
          "--color40": "#F89F2040",
          "--color50": "#F89F2050",
          "--color60": "#F89F2060",
          "--color70": "#F89F2070",
          "--color80": "#F89F2080",
          "--color90": "#F89F2099",
        },
      },
    ],
  },

  plugins: [daisyUi],
};
