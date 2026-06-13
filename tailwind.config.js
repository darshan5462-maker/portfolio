export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cal Sans', 'Inter var', 'sans-serif'],
      },
      colors: {
        brand: { DEFAULT: '#7c3aed', light: '#a78bfa', dark: '#5b21b6' },
        accent: { DEFAULT: '#06b6d4', light: '#67e8f9' },
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%,100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        'glow-pulse': { '0%,100%': { opacity: '0.6' }, '50%': { opacity: '1' } },
      },
    },
  },
}
