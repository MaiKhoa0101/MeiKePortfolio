// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  content: [
    './app/components/**/*.{vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/composables/**/*.ts',
    './app/plugins/**/*.ts',
    './app/utils/**/*.ts',
    './app/app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#a855f7',
          hover: '#c084fc',
          dark: '#581c87',
          light: '#e9d5ff',
        },
        // Background Colors
        background: {
          DEFAULT: '#030014',
          soft: '#0a0118',
          elevated: '#1a0b2e',
        },
        // Surface Colors
        surface: {
          DEFAULT: '#1a103c',
          content: '#ffffff',
          muted: '#94a3b8',
          dim: '#64748b',
        },
        // Cosmic Accent Colors
        cosmic: {
          purple: '#a855f7',
          blue: '#3b82f6',
          pink: '#ec4899',
          orange: '#f97316',
          cyan: '#06b6d4',
          emerald: '#10b981',
        },
        // Border
        border: {
          DEFAULT: 'rgba(168, 85, 247, 0.2)',
          bright: 'rgba(168, 85, 247, 0.4)',
        }
      },
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-purple-blue': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-cosmic-radial': 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15), transparent 70%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(168, 85, 247, 0.4), transparent)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(168, 85, 247, 0.3)',
        'glow-md': '0 0 30px rgba(168, 85, 247, 0.4)',
        'glow-lg': '0 0 40px rgba(168, 85, 247, 0.5)',
        'glow-xl': '0 0 60px rgba(168, 85, 247, 0.6)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.4)',
        'glow-pink': '0 0 30px rgba(236, 72, 153, 0.4)',
        'cosmic': '0 0 50px rgba(168, 85, 247, 0.3), 0 0 100px rgba(59, 130, 246, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-slower': 'spin 30s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: []
}