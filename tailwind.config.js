/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Godens', 'Bebas Neue', 'DM Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '11': '11px',
        '10': '10px',
      },
      letterSpacing: {
        'widest2': '0.15em',
        'widest3': '0.1em',
        'widest4': '0.08em',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          from: { transform: 'translateY(110%)' },
          to: { transform: 'translateY(0)' },
        },
        growLine: {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        trustedScroll: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        rotateSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        rotateSlowReverse: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(-360deg)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.8s forwards',
        'fade-up-delay1': 'fadeUp 0.8s 0.3s forwards',
        'fade-up-delay2': 'fadeUp 0.8s 0.7s forwards',
        'fade-up-delay3': 'fadeUp 0.8s 0.9s forwards',
        'fade-up-delay4': 'fadeUp 0.8s 1.2s forwards',
        'slide-up': 'slideUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'grow-line': 'growLine 1.2s 1.5s forwards',
        'ticker': 'ticker 20s linear infinite',
        'trusted-scroll': 'trustedScroll 30s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-slow-2': 'rotateSlow 35s linear infinite',
        'rotate-slow-reverse': 'rotateSlowReverse 35s linear infinite',
      },
    },
  },
  plugins: [],
}
