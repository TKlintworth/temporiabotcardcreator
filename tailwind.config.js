/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'gradient-oscillate': 'gradient-oscillate 0.5s ease infinite',
        float: 'float 1s ease-in-out infinite',
      },
      keyframes: {
        'gradient-oscillate': {
          '0%, 100%': {
            'background-size': '100% 100%',
          },
          '50%': {
            'background-size': '200% 200%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
            boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
          },
          '50%': {
            transform: 'translateY(-5px)',
            boxShadow: '0px 14px 20px rgba(0,0,0,0.32)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
