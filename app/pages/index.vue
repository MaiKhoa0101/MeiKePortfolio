<script setup>
import { Navigation, Pagination, Autoplay, EffectFade, A11y } from 'swiper/modules'
import { ref, onMounted } from 'vue'

// Data
const { projects } = usePortfolioData()
const featuredProjects = projects.filter(p => p.isFeatured)
const otherProjects = projects.filter(p => !p.isFeatured && p.category !== 'Thành tựu')
const achievements = projects.filter(p => p.category === 'Thành tựu')

const swiperModules = [Navigation, Pagination, Autoplay, EffectFade, A11y]

// Profile Modal
const isProfileOpen = ref(false)

const toggleProfile = () => {
  isProfileOpen.value = !isProfileOpen.value
  if (process.client) {
    document.body.style.overflow = isProfileOpen.value ? 'hidden' : 'auto'
  }
}

// Starfield effect
onMounted(() => {
  if (process.client) {
    createStarfield()
  }
})

const createStarfield = () => {
  const starfield = document.getElementById('starfield')
  if (!starfield) return
  
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div')
    star.className = 'star'
    star.style.left = `${Math.random() * 100}%`
    star.style.top = `${Math.random() * 100}%`
    star.style.animationDelay = `${Math.random() * 3}s`
    starfield.appendChild(star)
  }
}
</script>

<template>
  <div class="bg-background min-h-screen relative overflow-x-hidden">
    
    <!-- Starfield Background -->
    <div id="starfield" class="fixed inset-0 z-0 pointer-events-none"></div>

    <!-- Floating Profile Button & Modal -->
    <div class="fixed z-50 bottom-6 right-6 md:bottom-10 md:right-10 pointer-events-auto">

      <!-- Profile Button (Closed State) -->
      <div v-if="!isProfileOpen"
        @click="toggleProfile"
        class="w-20 h-20 md:w-24 md:h-24 bg-white/5 backdrop-blur-xl border border-primary/50 rounded-full overflow-hidden hover:scale-110 cursor-pointer animate-float shadow-glow-md hover:shadow-glow-lg transition-all group">
        <img src="https://placehold.co/200x200/1e1b4b/a855f7?text=👨‍💻"
          class="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
        <div class="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
    </div>

    <!-- Profile Modal (Open State) -->
    <Transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isProfileOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-background/95 backdrop-blur-xl"
        @click="toggleProfile">
        
        <div @click.stop
          class="w-full max-w-4xl h-full max-h-[600px] bg-white/5 backdrop-blur-xl border border-primary/30 rounded-3xl overflow-hidden shadow-glow-lg flex flex-col md:flex-row modal-enter">
          
          <!-- Close Button -->
          <button @click="toggleProfile"
            class="absolute top-5 right-5 z-10 p-3 bg-white/5 hover:bg-red-500 text-white rounded-xl backdrop-blur-md border border-white/10 hover:border-red-500 hover:rotate-90 transition-all group">
            <Icon name="heroicons:x-mark" size="20" class="group-hover:scale-110 transition-transform" />
          </button>

          <!-- Left Side: Image -->
          <div class="md:w-5/12 h-64 md:h-full relative overflow-hidden">
            <img src="https://placehold.co/600x800/0a0118/a855f7?text=Profile+Photo"
              class="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700" />
            
            <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            
            <!-- Info on Image -->
            <div class="absolute bottom-8 left-8 right-8">
              <h3 class="text-4xl font-black text-white mb-2 neon-text">Nguyễn Văn A</h3>
              <p class="text-primary font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                <span class="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Fullstack Developer
              </p>
            </div>
          </div>

          <!-- Right Side: Content -->
          <div class="md:w-7/12 p-8 md:p-12 overflow-y-auto custom-scrollbar">
            
            <!-- About Section -->
            <div class="space-y-4 mb-8">
              <h2 class="text-3xl font-black text-white flex items-center gap-3">
                <Icon name="heroicons:user-circle" class="text-primary" />
                <span class="bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  Về bản thân
                </span>
              </h2>
              <p class="text-surface-content/80 leading-relaxed text-lg">
                Tôi là một lập trình viên đam mê tạo ra các sản phẩm web có tính tương tác cao. 
                Tôi tin rằng một website tốt không chỉ chạy đúng logic mà còn phải mang lại 
                <span class="text-primary font-semibold">trải nghiệm tuyệt vời</span> cho người dùng.
              </p>
            </div>

            <!-- Skills Section -->
            <div class="space-y-4 mb-8">
              <h3 class="font-bold text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                <Icon name="heroicons:cpu-chip" class="text-primary" size="20" /> 
                Kỹ năng chính
              </h3>
              <div class="flex flex-wrap gap-3">
                <span v-for="skill in ['Vue/Nuxt', 'NodeJS', 'Tailwind', 'UI/UX', 'Figma', 'TypeScript']" :key="skill"
                  class="px-5 py-2.5 bg-white/5 border border-primary/20 text-white rounded-xl text-sm hover:border-primary hover:shadow-glow-sm transition-all">
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Social Links -->
            <div class="grid grid-cols-2 gap-4">
              <a href="https://github.com" target="_blank"
                class="group flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all hover:shadow-glow-sm">
                <div class="p-3 bg-white/5 rounded-xl group-hover:bg-primary transition-all text-surface-muted group-hover:text-white">
                  <Icon name="uil:github" size="24" />
                </div>
                <div>
                  <div class="font-bold text-white group-hover:text-primary transition-colors">Github</div>
                  <div class="text-xs text-surface-muted">Xem mã nguồn</div>
                </div>
              </a>
              
              <a href="mailto:hello@example.com"
                class="group flex items-center gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-primary/50 transition-all hover:shadow-glow-sm">
                <div class="p-3 bg-white/5 rounded-xl group-hover:bg-primary transition-all text-surface-muted group-hover:text-white">
                  <Icon name="uil:envelope" size="24" />
                </div>
                <div>
                  <div class="font-bold text-white group-hover:text-primary transition-colors">Email</div>
                  <div class="text-xs text-surface-muted">Liên hệ ngay</div>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </Transition>

    <!-- Hero Section with Swiper -->
    <section class="h-screen relative overflow-hidden">
      <div class="absolute inset-0 cosmic-grid opacity-10"></div>

      <Swiper 
        :modules="swiperModules" 
        :slides-per-view="1" 
        :loop="true" 
        :effect="'fade'"
        :fade-effect="{ crossFade: true }" 
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true, dynamicBullets: true }" 
        :grab-cursor="true" 
        class="h-full w-full">
        
        <SwiperSlide v-for="project in featuredProjects" :key="project.id"
          class="relative bg-background overflow-hidden">

          <!-- Image -->
          <div class="absolute inset-0 w-full h-full md:w-4/5 md:ml-auto">
            <img :src="project.image" 
              class="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700" />
          </div>

          <!-- Gradients -->
          <div class="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent md:hidden"></div>

          <!-- Content -->
          <div class="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div class="max-w-3xl pt-24 md:pt-0">

              <!-- Badge -->
              <div class="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-primary/10 border border-primary/30 mb-8 group">
                <span class="relative flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
                <span class="text-primary text-xs font-bold tracking-widest uppercase">Featured Project</span>
                <Icon name="heroicons:star-solid" size="14" class="text-primary group-hover:rotate-180 transition-transform duration-500" />
              </div>

              <!-- Title -->
              <h2 class="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
                <span class="bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-primary">
                  {{ project.title }}
                </span>
              </h2>

              <!-- Description -->
              <p class="text-xl md:text-2xl text-surface-muted mb-12 leading-relaxed max-w-2xl">
                {{ project.description }}
              </p>

              <!-- CTA Button -->
              <NuxtLink :to="`/project/${project.id}`"
                class="group relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-2xl overflow-hidden shadow-glow-sm hover:shadow-glow-md transition-all hover:scale-105">
                
                <span class="relative z-10 group-hover:text-white transition-colors">
                  Khám Phá Ngay
                </span>
                
                <Icon name="heroicons:arrow-right" class="w-6 h-6 relative z-10 group-hover:translate-x-2 group-hover:text-white transition-all" />
                
                <div class="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </NuxtLink>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span class="text-surface-muted text-xs font-semibold uppercase tracking-wider">Cuộn xuống</span>
        <Icon name="heroicons:chevron-double-down" size="32" class="text-primary" />
      </div>
    </section>

    <!-- Intro Section -->
    <section id="intro" class="section-spacing bg-background border-t border-white/5 relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-glow"></div>

      <div class="container mx-auto px-6 text-center relative z-10">
        <h2 class="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
          Không chỉ là Code, <br/>
          <span class="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
            đó là Nghệ thuật
          </span>
        </h2>
        
        <p class="text-surface-muted max-w-3xl mx-auto text-xl leading-relaxed">
          Ngoài những dự án lớn, tôi dành thời gian nghiên cứu công nghệ mới và xây dựng 
          các tiện ích sáng tạo trong vũ trụ công nghệ bao la.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <div v-for="stat in [
            { label: 'Dự án', value: '20+' },
            { label: 'Khách hàng', value: '15+' },
            { label: 'Năm kinh nghiệm', value: '3+' },
            { label: 'Giải thưởng', value: '5+' }
          ]" :key="stat.label"
            class="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/30 transition-all hover:-translate-y-2">
            <div class="text-4xl font-black text-primary mb-2">{{ stat.value }}</div>
            <div class="text-surface-muted text-sm font-medium uppercase tracking-wider">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid Section -->
    <section id="apps" class="section-spacing bg-background relative overflow-hidden">
      <div class="absolute inset-0 cosmic-grid opacity-5"></div>
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-glow"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 class="text-4xl md:text-5xl font-black text-white flex items-center gap-4 mb-3">
              <div class="p-3 bg-primary/10 rounded-2xl">
                <Icon name="heroicons:squares-2x2" class="text-primary" size="32" />
              </div>
              Ứng dụng & Mini Projects
            </h2>
            <p class="text-surface-muted text-lg">Các dự án nhỏ để rèn luyện kỹ năng và khám phá công nghệ mới</p>
          </div>
          
          <NuxtLink to="/projects" 
            class="group flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 hover:border-primary/30 rounded-xl transition-all text-white font-semibold">
            Xem tất cả
            <Icon name="heroicons:arrow-right" class="group-hover:translate-x-1 transition-transform" />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink v-for="p in otherProjects" :key="p.id" :to="`/project/${p.id}`"
            class="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-sm">
            
            <!-- Image -->
            <div class="h-64 overflow-hidden relative">
              <img :src="p.image"
                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              
              <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
              
              <!-- Hover Icon -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all shadow-glow-md">
                <Icon name="heroicons:arrow-right" size="28" class="text-white" />
              </div>
            </div>

            <!-- Content -->
            <div class="p-8 space-y-4">
              <div class="flex justify-between items-center">
                <span class="text-xs font-bold text-primary px-4 py-1.5 bg-primary/10 rounded-lg uppercase tracking-wider border border-primary/20">
                  {{ p.category }}
                </span>
                <Icon name="heroicons:arrow-up-right"
                  class="text-surface-muted group-hover:text-primary group-hover:rotate-45 transition-all" size="20" />
              </div>
              
              <h3 class="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {{ p.title }}
              </h3>
              
              <p class="text-surface-muted text-sm line-clamp-2 leading-relaxed">
                {{ p.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="section-spacing bg-background relative overflow-hidden border-t border-white/5">
      <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-glow"></div>

      <div class="container mx-auto px-6 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-black text-white mb-4 flex items-center justify-center gap-4">
            <div class="p-3 bg-primary/10 rounded-2xl">
              <Icon name="heroicons:trophy" class="text-primary" size="32" />
            </div>
            Thành tựu & Chứng chỉ
          </h2>
          <p class="text-surface-muted text-lg">Những cột mốc đáng nhớ trong hành trình phát triển</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <NuxtLink v-for="item in achievements" :key="item.id" :to="`/project/${item.id}`"
            class="group relative rounded-2xl overflow-hidden aspect-square border border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-sm hover:-translate-y-2">
            
            <img :src="item.image"
              class="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110" />

            <div class="absolute inset-0 bg-gradient-to-t from-background to-transparent group-hover:from-background/50 transition-all"></div>

            <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary mb-4 scale-75 group-hover:scale-100 group-hover:bg-primary group-hover:text-white transition-all shadow-lg">
                <Icon name="heroicons:academic-cap" size="32" />
              </div>
              
              <h4 class="font-bold text-white text-lg translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                {{ item.title }}
              </h4>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Section Spacing */
.section-spacing {
  padding-top: 8rem;
  padding-bottom: 8rem;
}

/* Blur Glow */
.blur-glow {
  filter: blur(120px);
}

/* Custom Scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(168, 85, 247, 0.3);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(168, 85, 247, 0.6);
}

/* Starfield Animation */
@keyframes twinkle {
  0%, 100% { 
    opacity: 0.2;
    transform: scale(1);
  }
  50% { 
    opacity: 1;
    transform: scale(1.5);
  }
}

.star {
  position: absolute;
  width: 2px;
  height: 2px;
  background: white;
  border-radius: 50%;
  animation: twinkle 3s ease-in-out infinite;
}

/* Modal Enter Animation */
@keyframes modalEnter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-enter {
  animation: modalEnter 0.3s ease-out;
}

/* Swiper Pagination */
:deep(.swiper-pagination) {
  bottom: 30px !important;
}

:deep(.swiper-pagination-bullet) {
  width: 12px;
  height: 12px;
  background: rgba(168, 85, 247, 0.3);
  opacity: 1;
  transition: all 0.3s;
}

:deep(.swiper-pagination-bullet-active) {
  width: 32px;
  border-radius: 6px;
  background: linear-gradient(90deg, #a855f7, #3b82f6);
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.6);
}
</style>