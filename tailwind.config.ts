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
        // Primary Palette
        primary: {
          DEFAULT: '#a855f7',
          hover: '#c084fc',
          dark: '#6b21a8',
        },
        
        // Background Layers
        background: {
          DEFAULT: '#030014',
          elevated: '#0a0118',
        },
        
        // Surface & Content
        surface: {
          DEFAULT: 'rgba(26, 16, 60, 0.4)',
          content: '#ffffff',
          muted: '#94a3b8',
          dim: '#64748b',
        },
        
        // Cosmic Accents
        cosmic: {
          blue: '#3b82f6',
          pink: '#ec4899',
          cyan: '#06b6d4',
          orange: '#f97316',
        },
        
        // Border
        border: {
          DEFAULT: 'rgba(168, 85, 247, 0.2)',
        }
      },
      
      backgroundImage: {
        'gradient-cosmic': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #a855f7 0%, #3b82f6 50%, #06b6d4 100%)',
        'gradient-glow': 'radial-gradient(circle at center, rgba(168, 85, 247, 0.4), transparent)',
      },
      
      boxShadow: {
        'glow-sm': '0 0 20px rgba(168, 85, 247, 0.4)',
        'glow-md': '0 0 40px rgba(168, 85, 247, 0.5)',
        'glow-lg': '0 0 60px rgba(168, 85, 247, 0.6)',
        'cosmic': '0 0 50px rgba(168, 85, 247, 0.4), 0 0 100px rgba(59, 130, 246, 0.3)',
      },
      
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '0.7',
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
          },
          '50%': { 
            opacity: '1',
            boxShadow: '0 0 40px rgba(168, 85, 247, 0.8)'
          },
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: []
}