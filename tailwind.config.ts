import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'bg-color': '#ffffff',
        'text-color-main': '#121417',
        'text-color-muted': 'rgba(18, 20, 23, 0.8)',
        'pale-black': 'rgba(18, 20, 23, 0.2)',
        'text-color-gray': '#8a8a89',
        'pastel-red': '#fceeed',
        black: '#121417',
        white: '#ffffff',
        guyabano: '#f8f8f8',
        gray: '#8a8a89',
        'light-gray': '#E8E8E6',
        red: '#e0a39a',
        'light-red': '#f2c0bd',
        green: '#38cd3e',
        gold: '#ffc531',
        'backdrop-mobile-menu': 'rgba(242, 193, 189, 0.7)',
        error: '#e44848',
      },
    },
    screens: {
      sm: { max: '768px' },
      // => @media (max-width: 768px) { ... }

      md: { min: '769px' },
      // => @media (min-width: 769px) { ... }

      mdMax: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      lg: { min: '1024px' },
      // => @media (min-width: 1024px) { ... }

      xl: { min: '1440px' },
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [],
};
export default config;
