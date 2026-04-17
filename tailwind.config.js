/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        aura: '0 20px 60px rgba(15, 23, 42, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 18px 45px rgba(15, 23, 42, 0.18)',
      },
      colors: {
        coal: '#070B11',
        oat: '#F6EBDD',
        sand: '#E6D8C7',
        cyanGlow: '#67E8F9',
        goldGlow: '#F7C873',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
