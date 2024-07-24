import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cblue": {
          900: "#020617",
          800: "#1c283b"
        },
        "cpink": {
          900: "#9d174d",
        }
      },
    },
    theme: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    backgroundImage: {
      darkImg: 'linear-gradient(15deg, rgba(13,17,23,1) 0%, rgba(28,40,59,1) 80%, rgba(157,23,77,1) 100%)',
    },
  },
  plugins: [],
};
export default config;
