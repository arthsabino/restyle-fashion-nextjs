import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        grey: "rgba(239, 239, 239, 1)",
        dark1: "rgba(50, 61, 56, 1)",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          // primary: "#ffcccf",
          // secondary: "#acea8c",
          // accent: "#ffc9ec",
          // neutral: "#191b29",
          // "base-100": "#f1eef1",
          // info: "#3c53c8",
          // success: "#1b9d81",
          // warning: "#8a670f",
          // error: "#e14164",
          primary: "#f9b8f1",
          secondary: "#f2ed54",
          accent: "#9b4e91",
          neutral: "#2a232e",
          "base-100": "#f3eaf6",
          info: "#7bb2e5",
          success: "#7beab3",
          warning: "#fdc463",
          error: "#f4503e",
        },
      },
    ],
  },
};
export default config;
