/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0b1220',
          800: '#101a2b',
          700: '#17243a',
          600: '#20304a',
        },
        surface: {
          DEFAULT: '#111c2e',
          hover: '#192840',
          elevated: '#20304a',
        },
        border: {
          DEFAULT: '#293951',
          light: '#354966',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#b8c4d6',
          muted: '#8797ad',
        },
        primary: {
          DEFAULT: '#4f8ff7',
          hover: '#3978df',
          glow: 'rgba(79, 143, 247, 0.16)',
        },
        accent: {
          DEFAULT: '#38bdf8',
          glow: 'rgba(56, 189, 248, 0.12)',
        },
        cyan: {
          DEFAULT: '#22d3ee',
          glow: 'rgba(34, 211, 238, 0.12)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.5rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'jumbo': ['clamp(1.75rem, 4vw, 2.75rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h1': ['clamp(1.5rem, 3vw, 2rem)', { lineHeight: '1.3' }],
        'h2': ['clamp(1.25rem, 2.5vw, 1.5rem)', { lineHeight: '1.35' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -4px rgba(2, 8, 23, 0.28)',
        'glow': '0 0 40px -12px rgba(79, 143, 247, 0.25)',
        'card': '0 8px 32px -8px rgba(2, 8, 23, 0.4)',
      },
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
