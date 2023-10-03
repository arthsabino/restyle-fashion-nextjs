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
          primary: "#7765c6",
          secondary: "#d33fb8",
          accent: "#19a838",
          neutral: "#181727",
          "base-100": "#272249",
          info: "#2178f2",
          success: "#229b66",
          warning: "#f9c31f",
          error: "#ee6375",
          body: {
            "background-color": "rgb(39, 34, 73)",
          },
        },
      },
    ],
  },
};
export default config;
