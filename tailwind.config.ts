import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        'content-pc': 'calc(100vh - 196px)',
        'content-mb': 'calc(100vh - 284px)',
      },
      animation: {
        'fade-in-right': 'fadeInRight 1s linear ease-in-out',
        'bounce-two': 'bounce_two 2s ease infinite',
        'action-icon-info':
          'theme_animation_translateY 3s 0.3s ease-in-out infinite alternate forwards',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'hover-menu':
          'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
        'box-shadow-menu': '0 2px 2px -2px rgba(0, 0, 0, .2)',
      },
    },
    colors: {
      'bd-main': '#f2f2f2',
      'gray-400': '#858d9a',
      'primary-color': '#0048b9',
      transparent: 'transparent',
      text: '#0b2341',
      textGray: '#7A7A7A',
      textGray500: '#4E4D55',
      gray200: '#DCDCDC',
      redCus: '#FF0000',
      customBlue: '#6EC1E4',
      white: '#FFFFFF',
      white200: '#EAEAEA',
      black: '#000000',
      backBlur: '#111827',
      blackDarkBlur: '#24272E',
      blueSky: '#0B234D',
      blueSky200: '#D3DFED',
      blueSky100: '#E4EFFA',
      blueDark: '#009DCE',
      blue500: '#010B74',
      blue800: '#3399ff'
    },
    aspectRatio: {
      '41/13': '41 / 13',
    },
    keyframes: {
      fadeInRight: {
        from: { opacity: '0', transform: 'translateX(300px)' },
        to: { opacity: '1' },
      },
      bounce_two: {
        '0%': {
          transform: 'scale(1, 1) translateY(0)',
        },
        '10%': {
          transform: 'scale(1.1, 0.9) translateY(0)',
        },
        '30%': {
          transform: 'scale(0.9, 1.1) translateY(-1.375rem)',
        },
        '50%': {
          transform: 'scale(1, 1) translateY(0)',
        },
        '57%': {
          transform: 'scale(1, 1) translateY(-0.1875rem)',
        },
        '64%': {
          transform: 'scale(1, 1) translateY(0)',
        },
        '100%': {
          transform: 'scale(1, 1) translateY(0)',
        },
      },
      theme_animation_translateY: {
        '0%': {
          transform: 'translateY(0px)',
        },
        '25%': {
          transform: 'translateY(-4px)',
        },
        '50%': {
          transform: 'translateY(4px)',
        },
        '75%': {
          transform: 'translateY(-4px)',
        },
        '100%': {
          transform: 'translateY(0px)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
