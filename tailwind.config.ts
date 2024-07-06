import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      padding: {
        '1px': "1px"
      },
      width: {
        '1200': '75rem',
        "responsive": '90%',
        "maxx": '70%'
      },
      colors:{
        'weakblack': 'var(--text-color)',
        'header-background': 'var(--header-color)'
      }
    },
  },
  plugins: [],
};
export default config;
