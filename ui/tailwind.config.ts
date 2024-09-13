// tailwind.config.ts
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './node_modules/@tremor/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3498db',
        'secondary': '#2ecc71',
        'gray': {
          'light': '#f7fafc',
          'DEFAULT': '#9ca3af',
          'dark': '#374151',
        },
      },
      fontFamily: {
        'sans': ['"Open Sans"', 'sans-serif'],
        'serif': ['"Merriweather"', 'serif'],
      },
      fontSize: {
        'custom-size': '1.25rem',
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/hero-pattern.png')",
      },
      width: {
        'custom-width': '50rem',
      },
      height: {
        'custom-height': '30rem',
      },
      padding: {
        'custom-padding': '2.5rem',
      },
      margin: {
        'custom-margin': '3rem',
      },
      zIndex: {
        'custom-zindex': '10',
      },
      opacity: {
        'custom-opacity': '0.75',
      },
    },
  },
  plugins: [],
};

export default config;