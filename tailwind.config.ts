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
      darkImg: 'linear-gradient(15deg, #0d1117 0%, #1c283b 80%, #9d174d 100%)',
      darkBodyImg: 'linear-gradient(145deg, #0d1117 0%, #1c283b 40%, #0d1117 100%)',
    },
  },
  plugins: [],
};
export default config;
