import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-green': '#62F983',
        'desc-gray': '#8e8e8e',
        'inactive-gray' : '#ffffff9c',
        'blur-dark' : '#000000b3',
        'gray-light' : '#aaaaaa40',
        'modal-dark' : '#070707',
        'hover-gray': '#2c2c2ca7',
        'animation-gray' : '#121212bd',
        'code-dark' : '#2b2b2b',
        'btn-dark': '#202020a1',
        'via-dark': '#000000d8',
        'end-dark': '#0000002f',
        'bnr-btn':'#303030',
        'bnr-btn-bg': '#1c1c1c6f',
        'bnr-btn-text' : '#8d8d8d'
      },
    },
  },
  plugins: [ ],
};
export default config;
