<script setup>
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules'

// 1. LẤY DỮ LIỆU
const { projects } = usePortfolioData()

const featuredProjects = projects.filter(p => p.isFeatured)
const otherProjects = projects.filter(p => !p.isFeatured && p.category !== 'Thành tựu')
const achievements = projects.filter(p => p.category === 'Thành tựu')

const swiperModules = [Navigation, Pagination, Autoplay, EffectFade, A11y]

// 2. QUẢN LÝ TRẠNG THÁI PROFILE
const isProfileOpen = ref(false)

const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
  if (process.client) {
    document.body.style.overflow = isProfileOpen.value ? 'hidden' : 'auto'
  }
}
</script>

<template>
  <div class="bg-background min-h-screen">

    <div class="fixed z-[999] inset-0 pointer-events-none flex items-end justify-end p-6 md:p-10">

      <div v-if="isProfileOpen"
        class="fixed inset-0 bg-background/90 backdrop-blur-md transition-opacity duration-500 pointer-events-auto"
        @click="toggleProfile"></div>

      <div class="relative transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) pointer-events-auto"
        :class="isProfileOpen ? 'w-full h-full md:w-[900px] md:h-[600px] mx-auto my-auto inset-0 absolute flex items-center justify-center' : 'w-16 h-16 md:w-20 md:h-20'">
        <div @click="!isProfileOpen ? toggleProfile() : null"
          class="w-full h-full bg-surface/90 backdrop-blur-2xl border border-border shadow-2xl overflow-hidden transition-all duration-500"
          :class="isProfileOpen ? 'rounded-3xl shadow-[0_0_100px_rgba(168,85,247,0.2)]' : 'rounded-full hover:scale-110 cursor-pointer animate-float hover:bg-primary shadow-[0_0_30px_rgba(168,85,247,0.5)]'">

          <div v-if="!isProfileOpen" class="w-full h-full flex items-center justify-center relative group">
            <img src="https://placehold.co/100x100/1e1b4b/white?text=Me"
              class="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
          </div>

          <div v-else class="w-full h-full flex flex-col md:flex-row relative">
            <button @click.stop="toggleProfile"
              class="absolute top-5 right-5 z-20 p-2 bg-white/5 hover:bg-red-500/80 text-white rounded-full transition-colors backdrop-blur-md">
              <Icon name="heroicons:x-mark" size="24" />
            </button>

            <div class="md:w-5/12 h-64 md:h-full relative">
              <img src="https://placehold.co/600x800/1e1b4b/white?text=Profile"
                class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
              <div class="absolute bottom-8 left-8">
                <h3 class="text-3xl font-bold text-white mb-1">Nguyễn Văn A</h3>
                <p class="text-primary font-medium tracking-wider text-sm uppercase">Fullstack Developer</p>
              </div>
            </div>

            <div class="md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar">
              <h2
                class="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-primary/50 bg-clip-text text-transparent">
                Về bản thân
              </h2>
              <p class="text-surface-content/80 mb-8 leading-loose text-lg font-light">
                Tôi là một lập trình viên đam mê tạo ra các sản phẩm web có tính tương tác cao. Tôi tin rằng một website
                tốt không chỉ chạy đúng logic mà còn phải mang lại cảm xúc cho người dùng.
              </p>

              <h3 class="font-bold text-white mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Icon name="heroicons:cpu-chip" class="text-primary" /> Kỹ năng chính
              </h3>
              <div class="flex flex-wrap gap-2 mb-10">
                <span v-for="skill in ['Vue/Nuxt', 'NodeJS', 'Tailwind', 'UI/UX', 'Figma']" :key="skill"
                  class="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-xl text-sm hover:border-primary/50 transition-colors cursor-default">
                  {{ skill }}
                </span>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <a href="#" target="_blank"
                  class="group flex items-center gap-4 p-4 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1">
                  <div
                    class="p-3 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors text-surface-muted">
                    <Icon name="uil:github" size="24" />
                  </div>
                  <div>
                    <div class="font-bold text-white">Github</div>
                    <div class="text-xs text-surface-muted">Xem mã nguồn</div>
                  </div>
                </a>
                <a href="#"
                  class="group flex items-center gap-4 p-4 bg-background border border-border rounded-2xl hover:border-primary/50 transition-all hover:-translate-y-1">
                  <div
                    class="p-3 bg-white/5 rounded-full group-hover:bg-primary group-hover:text-white transition-colors text-surface-muted">
                    <Icon name="uil:envelope" size="24" />
                  </div>
                  <div>
                    <div class="font-bold text-white">Email</div>
                    <div class="text-xs text-surface-muted">Liên hệ ngay</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>


    <section class="h-screen relative overflow-hidden">
      <Swiper :modules="swiperModules" :slides-per-view="1" :loop="true" :effect="'fade'"
        :fade-effect="{ crossFade: true }" :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }" :grab-cursor="true" class="h-full w-full">
        <SwiperSlide v-for="project in featuredProjects" :key="project.id"
          class="relative bg-background overflow-hidden">

          <div class="absolute inset-0 w-full h-full md:w-[85%] ml-auto">
            <img :src="project.image" class="w-full h-full object-cover object-center md:object-left opacity-90" />
          </div>

          <div class="absolute inset-0 bg-gradient-to-r from-background via-background/95 via-40% to-transparent z-0">
          </div>

          <div class="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent md:hidden z-0">
          </div>

          <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div class="max-w-3xl pt-24 md:pt-0">

              <div
                class="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md mb-6 animate-fade-in-up">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span class="text-primary text-xs font-bold tracking-widest uppercase">Featured Project</span>
              </div>

              <h2
                class="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] animate-fade-in-up delay-100 tracking-tight drop-shadow-lg">
                {{ project.title }}
              </h2>

              <p
                class="text-lg md:text-xl text-surface-muted mb-10 leading-relaxed animate-fade-in-up delay-200 font-light max-w-xl">
                {{ project.description }}
              </p>

              <div class="animate-fade-in-up delay-300 flex gap-4">
                <NuxtLink :to="`/project/${project.id}`"
                  class="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-shadow">
                  <span
                    class="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                    Xem Chi Tiết
                    <Icon name="heroicons:arrow-right" class="w-5 h-5" />
                  </span>
                  <div
                    class="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  </div>
                </NuxtLink>
              </div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-surface-muted/50">
        <Icon name="heroicons:chevron-double-down" size="32" />
      </div>
    </section>

    <section id="intro" class="py-32 bg-background-soft border-b border-border relative overflow-hidden">
      <div
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]">
      </div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-bold text-white mb-8">
          Không chỉ là Code, đó là <span
            class="text-primary bg-clip-text bg-gradient-to-r from-primary to-blue-500">Nghệ thuật</span>
        </h2>
        <p class="text-surface-muted max-w-3xl mx-auto text-xl leading-relaxed font-light">
          Ngoài những dự án lớn phía trên, mình còn dành thời gian nghiên cứu các công nghệ mới và xây dựng các tiện ích
          nhỏ trong vũ trụ công nghệ bao la này.
        </p>
      </div>
    </section>

    <section id="apps" class="py-32 bg-background relative">
      <div class="container mx-auto px-6">
        <div class="flex items-center justify-between mb-16">
          <div>
            <h2 class="text-3xl font-bold text-white flex items-center gap-3">
              <Icon name="heroicons:squares-2x2" class="text-primary" />
              Ứng dụng & Mini Projects
            </h2>
            <p class="text-surface-muted mt-2">Các dự án nhỏ để rèn luyện kỹ năng</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink v-for="p in otherProjects" :key="p.id" :to="`/project/${p.id}`"
            class="group bg-surface/40 backdrop-blur-sm border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(168,85,247,0.2)]">
            <div class="h-56 overflow-hidden relative">
              <img :src="p.image"
                class="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out opacity-80 group-hover:opacity-100" />
              <div class="absolute inset-0 bg-background/40 group-hover:bg-transparent transition duration-500"></div>
            </div>
            <div class="p-8">
              <div class="flex justify-between items-center mb-4">
                <span
                  class="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-lg uppercase tracking-wider">{{
                  p.category }}</span>
                <Icon name="heroicons:arrow-up-right"
                  class="text-surface-muted group-hover:text-primary transition-colors" />
              </div>
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{{ p.title }}
              </h3>
              <p class="text-surface-muted text-sm line-clamp-2 leading-relaxed">{{ p.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-32 bg-background-soft relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Icon name="heroicons:academic-cap" class="text-primary" />
          Thành tựu & Chứng chỉ
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink v-for="item in achievements" :key="item.id" :to="`/project/${item.id}`"
            class="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-border hover:border-primary/60 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-primary/20">
            <img :src="item.image"
              class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition duration-500 grayscale group-hover:grayscale-0" />

            <div
              class="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity">
            </div>

            <div
              class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 p-4 text-center z-10">
              <div
                class="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white mb-2 shadow-lg scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                <Icon name="heroicons:eye" />
              </div>
              <h4
                class="font-bold text-white text-lg translate-y-4 group-hover:translate-y-0 transition duration-300 delay-75">
                {{ item.title }}</h4>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Scrollbar tùy chỉnh cho nội dung Modal */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.5);
}
</style>