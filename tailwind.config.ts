import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "mob": '400px"'
      },
      colors: {
        background: "var(--background)",
        light: "var(--light)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
