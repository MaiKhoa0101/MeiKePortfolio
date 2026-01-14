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
      colors: {
        primary: {
          DEFAULT: '#003780', // Tím Neon
          hover: '#430081',   
          content: '#ffffff'
        },
        background: {
          DEFAULT: '#030014', // Đen thẳm
          soft: '#2a0042',    // Sáng hơn xíu (dùng cho Footer, Section chẵn)
        },
        surface: {
          DEFAULT: '#131131', // Tím than (Card, Modal)
          content: '#ffffff', // Chữ chính (Trắng tím)
          muted: '#ebebeb',   // Chữ phụ (Xám xanh)
        },
        border: {
          DEFAULT: 'rgba(255, 255, 255, 0.1)', // Viền kính mờ chung
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}