// tailwind.config.ts
import type { Config } from 'tailwindcss'

export default <Config>{
  // Đảm bảo đường dẫn content đúng với cấu trúc thư mục của bạn (folder 'app')
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
      primary: {
            DEFAULT: 'var(--primary)',
            hover: 'var(--primary-hover)',
        },
        background: {
            DEFAULT: 'var(--background)',
            soft: 'var(--background-soft)',
        },
        surface: {
            DEFAULT: 'var(--surface)',
            content: 'var(--surface-content)',
            muted: 'var(--surface-muted)',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite', // Xoay chậm cho hành tinh
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.5)' },
        }
      }
    },
  plugins: []
}