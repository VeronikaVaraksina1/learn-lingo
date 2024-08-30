import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#ffffff',
        'text-color-main': '#121417',
        'text-color-muted': 'rgba(18, 20, 23, 0.7)',
        'text-color-gray': '#8a8a89',
        'black': '#121417',
        'white': '#ffffff',
        'guyabano': '#f8f8f8',
        'gray': '#8a8a89',
        'red': '#e0a39a',
        'light-red': '#f2c0bd',
        'green': '#38cd3e',
        'gold': '#ffc531',
      },
    },
    screens: {
      'sm': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'md': {'max': '1024px'},
      // => @media (max-width: 1024px) { ... }
    },
  },
  plugins: [],
};
export default config;
