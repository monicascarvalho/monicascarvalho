/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Geist Mono"', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        rose: {
          50: '#FDF8F9',
          100: '#FCEEF1',
          200: '#F8D8DE',
          300: '#F0B2BE',
          400: '#E28396',
          500: '#C27D88', // Tom rosé principal editorial
          600: '#A75868',
          700: '#873E4E',
          800: '#652B37',
          900: '#451C24',
          950: '#260E14',
        },
        obsidian: {
          DEFAULT: '#141112',
          50: '#f7f6f6',
          100: '#edebee',
          200: '#dbd7db',
          300: '#beb7bf',
          400: '#9b919d',
          500: '#7e7380',
          600: '#665c68',
          700: '#524953',
          800: '#262024',
          850: '#1a1618',
          900: '#141112',
          950: '#0c0a0b',
        },
        alabaster: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FAF8F9',
          200: '#F5F1F2',
          300: '#EFE7E9',
          400: '#DDD2D5',
          500: '#AFA3A6',
          600: '#7D7174',
          700: '#5A5052',
          800: '#3D3537',
          900: '#231E20',
        },
      },
      backdropBlur: {
        glass: '16px',
        'glass-lg': '24px',
      },
      boxShadow: {
        'glass-light': '0 8px 30px rgba(194, 125, 136, 0.08), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'rose-subtle': '0 10px 30px -10px rgba(194, 125, 136, 0.25)',
      },
    },
  },
  plugins: [],
};
