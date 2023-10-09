import type { Config } from "tailwindcss";

const config: Config = {
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
          primary: "#ffcccf",
          secondary: "#acea8c",
          accent: "#ffc9ec",
          neutral: "#191b29",
          "base-100": "#f1eef1",
          info: "#3c53c8",
          success: "#1b9d81",
          warning: "#8a670f",
          error: "#e14164",
        },
      },
    ],
  },
};
export default config;
