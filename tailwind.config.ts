import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '1200': '75rem',
        "responsive": '90%'
      },
      colors:{
        'example': 'var(--text-color)',
        'header-background': 'var(--header-color)'
      }
    },
  },
  plugins: [],
};
export default config;
