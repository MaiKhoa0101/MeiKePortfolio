// plugins/swiper.ts
import { defineNuxtPlugin } from '#app'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import các style cần thiết của Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade' // Thêm hiệu ứng fade cho mượt

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Swiper', Swiper)
  nuxtApp.vueApp.component('SwiperSlide', SwiperSlide)
})