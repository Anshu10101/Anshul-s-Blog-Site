// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './node_modules/pliny/**/*.js',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'wave-animation': {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'music-bar-1': {
          '0%, 100%': { height: '0%' },
          '50%': { height: '70%' },
        },
        'music-bar-2': {
          '0%, 100%': { height: '50%' },
          '25%': { height: '0%' },
          '75%': { height: '100%' },
        },
        'music-bar-3': {
          '0%, 100%': { height: '70%' },
          '15%': { height: '100%' },
          '65%': { height: '0%' },
        },
        'music-bar-4': {
          '0%, 100%': { height: '50%' },
          '35.7%': { height: '0%' },
          '85.7%': { height: '70%' },
        },
        'scale-up': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.18)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        wave: 'wave-animation 2.5s linear infinite',
        'music-bar-1': 'music-bar-1 .8s linear infinite',
        'music-bar-2': 'music-bar-2 .8s linear infinite',
        'music-bar-3': 'music-bar-3 .8s linear infinite',
        'music-bar-4': 'music-bar-4 .8s linear infinite',
        'scale-up': 'scale-up 150ms ease-in-out forwards',
      },
      boxShadow: {
        nextjs: '0 8px 20px rgb(0,0,0,0.12)',
        'nextjs-dark': '0 0 30px rgba(6, 182, 212, 0.15)',
        'neon': '0 0 10px theme(colors.cyan.400), 0 0 30px theme(colors.cyan.700)',
        'neon-strong': '0 0 15px theme(colors.cyan.400), 0 0 45px theme(colors.cyan.600)',
        'neon-glow': '0 0 20px theme(colors.cyan.300), 0 0 60px theme(colors.cyan.500), 0 0 120px theme(colors.cyan.700)',
      },
      spacing: {
        '9/16': '56.25%',
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', ...fontFamily.sans],
      },
      colors: {
        primary: colors.cyan,
        sky: colors.sky,
        gray: colors.neutral,
        dark: '#030711',
        darker: '#020509',
        spotify: '#1DB954',
        coral: '#EF596F',
        accent: {
          100: '#8BE9FD',
          200: '#50FA7B',
          300: '#FFB86C',
          400: '#FF79C6',
          500: '#BD93F9',
          600: '#FF5555',
          700: '#6EE7B7',
          800: '#60A5FA',
        },
        futuristic: {
          100: '#0FF',
          200: '#0BC5EA',
          300: '#086F83',
          400: '#701A75',
          500: '#86198F',
          600: '#0284C7',
        },
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cyber': 'linear-gradient(45deg, var(--tw-gradient-stops))',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              color: theme('colors.primary.500'),
              'text-underline-offset': '4px',
              '&:hover': {
                color: `${theme('colors.primary.600')}`,
              },
              code: { color: theme('colors.primary.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              scrollMarginTop: '6em',
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            pre: {
              backgroundColor: theme('colors.dark'),
            },
            code: {
              color: theme('colors.accent.500'),
              backgroundColor: theme('colors.dark'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            details: {
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              color: theme('colors.cyan.400'),
              'text-underline-offset': '4px',
              '&:hover': {
                color: theme('colors.cyan.300'),
                textShadow: '0 0 8px rgba(6, 182, 212, 0.5)',
              },
              code: { color: theme('colors.cyan.400') },
            },
            h1: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              background: `linear-gradient(to right, ${theme('colors.cyan.400')}, ${theme('colors.accent.400')})`,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              textShadow: '0 0 8px rgba(6, 182, 212, 0.3)',
            },
            h2: {
              fontWeight: '700',
              letterSpacing: theme('letterSpacing.tight'),
              background: `linear-gradient(to right, ${theme('colors.cyan.400')}, ${theme('colors.accent.300')})`,
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              textShadow: '0 0 8px rgba(6, 182, 212, 0.3)',
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
              textShadow: '0 0 8px rgba(6, 182, 212, 0.2)',
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
              textShadow: '0 0 8px rgba(6, 182, 212, 0.2)',
            },
            pre: {
              backgroundColor: theme('colors.darker'),
              borderColor: theme('colors.cyan.900'),
              borderWidth: '1px',
              boxShadow: 'inset 0 0 20px rgba(6, 182, 212, 0.1)',
            },
            code: {
              backgroundColor: theme('colors.darker'),
              color: theme('colors.cyan.400'),
              textShadow: '0 0 8px rgba(6, 182, 212, 0.3)',
            },
            details: {
              backgroundColor: theme('colors.darker'),
              borderColor: theme('colors.cyan.900'),
              borderWidth: '1px',
            },
            hr: { 
              borderColor: theme('colors.cyan.900'),
              borderWidth: '1px',
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.2)',
            },
            'ol li::marker': {
              fontWeight: '600',
              color: theme('colors.cyan.400'),
            },
            'ul li::marker': {
              backgroundColor: theme('colors.cyan.400'),
            },
            strong: { 
              color: theme('colors.cyan.100'),
              textShadow: '0 0 8px rgba(6, 182, 212, 0.3)',
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.cyan.700'),
              borderLeftWidth: '2px',
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.1)',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
