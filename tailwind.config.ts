import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3200px',
        '6xl': '3840px',
        '7xl': '4480px',
        '8xl': '5120px',
        '9xl': '5760px',
        '10xl': '6400px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        Lora: ['Lora', 'serif'],
        Mont: ['Montserrat', 'sans - serif'],
      }
    }
  },
  plugins: [],
};

export default config;
