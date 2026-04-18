/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        forest: {
          50: '#f0f7ec',
          100: '#ddefd3',
          200: '#bde0ab',
          300: '#93cb78',
          400: '#6db54d',
          500: '#4A7C2E',
          600: '#3d6825',
          700: '#2D5016',
          800: '#264213',
          900: '#1a2f0d',
          950: '#0d1a06',
        },
        earth: {
          50: '#fdf8f3',
          100: '#faf0e4',
          200: '#f4ddc3',
          300: '#ecc89e',
          400: '#D4A574',
          500: '#c08d55',
          600: '#ab7640',
          700: '#8f5f34',
          800: '#754d2f',
          900: '#614029',
          950: '#342014',
        },
        charcoal: {
          50: '#f0f0f4',
          100: '#d8d8e0',
          200: '#b0b0c0',
          300: '#88889e',
          400: '#60607c',
          500: '#3d3d5c',
          600: '#2e2e4a',
          700: '#1A1A2E',
          800: '#151528',
          900: '#0f0f1e',
          950: '#080812',
        },
        cream: {
          50: '#FFFDF7',
          100: '#FAF3E0',
          200: '#F5E6C4',
          300: '#EDDA9E',
          400: '#E0C876',
          500: '#D4B84E',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.8s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
