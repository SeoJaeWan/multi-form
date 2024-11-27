/** @type {import('tailwindcss').Config} */
import colors from "./src/tailwind/colors";
import { px0_20, px0_200 } from "./src/tailwind/pxSize";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        ...px0_200,
      },
      borderWidth: {
        ...px0_20,
      },
      borderRadius: {
        ...px0_20,
      },
      fontSize: {
        ...px0_200,
      },
      colors,
    },
  },
  plugins: [],
};
