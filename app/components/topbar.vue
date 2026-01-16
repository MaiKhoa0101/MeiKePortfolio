<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navItems = [
  { name: 'Giới thiệu', href: '#intro', icon: 'heroicons:information-circle' },
  { name: 'Dự án', href: '#featured', icon: 'heroicons:rocket-launch' },
  { name: 'Apps & Game', href: '#apps', icon: 'heroicons:puzzle-piece' }
]
</script>

<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="isScrolled ? 'py-2' : 'py-4'"
  >
    <!-- Background with glow effect -->
    <div 
      class="absolute inset-0 transition-all duration-500"
      :class="isScrolled 
        ? 'bg-background/95 backdrop-blur-2xl border-b border-primary/30 shadow-[0_8px_32px_rgba(168,85,247,0.15)]' 
        : 'bg-background/60 backdrop-blur-xl border-b border-white/5'"
    >
      <!-- Animated gradient line -->
      <div class="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="flex justify-between items-center h-16">
        
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-3 group">
          <div class="relative w-12 h-12">
            <!-- Orbiting rings -->
            <div class="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow"></div>
            <div class="absolute inset-1 border border-primary/40 rounded-full animate-spin-slow" style="animation-duration: 15s; animation-direction: reverse;"></div>
            
            <!-- Planet core -->
            <div class="absolute inset-2 bg-gradient-to-br from-primary via-purple-500 to-blue-500 rounded-full shadow-glow-md group-hover:shadow-glow-lg transition-shadow duration-300">
              <div class="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-full"></div>
            </div>
            
            <!-- Glow effect -->
            <div class="absolute inset-0 bg-primary/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300 -z-10"></div>
          </div>

          <div class="flex flex-col">
            <span class="text-2xl font-black tracking-tight leading-none bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent group-hover:from-primary group-hover:to-pink-400 transition-all duration-500">
              DevProfile
            </span>
            <span class="text-[9px] uppercase tracking-[0.3em] text-surface-muted group-hover:text-primary transition-colors font-semibold">
              Cosmic Portfolio
            </span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-2">
          <a 
            v-for="item in navItems" 
            :key="item.name" 
            :href="item.href"
            class="relative px-6 py-2.5 group overflow-hidden rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            <span class="relative z-10 flex items-center gap-2 text-sm font-medium text-surface-content/80 group-hover:text-white transition-colors">
              <Icon :name="item.icon" size="16" class="opacity-0 group-hover:opacity-100 transition-opacity" />
              {{ item.name }}
            </span>
            
            <!-- Hover effect -->
            <span class="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
            
            <!-- Bottom border -->
            <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500"></span>
          </a>

          <!-- CTA Button -->
          <NuxtLink to="/contact" class="ml-4 group relative">
            <!-- Animated glow -->
            <div class="absolute -inset-1 bg-gradient-to-r from-primary via-pink-500 to-orange-500 rounded-xl opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse-glow"></div>
            
            <div class="relative flex items-center gap-2 bg-gradient-to-r from-primary to-purple-600 px-6 py-2.5 rounded-xl font-bold text-white shadow-lg hover:shadow-glow-md transition-all duration-300 hover:scale-105">
              <Icon name="heroicons:paper-airplane" size="18" class="group-hover:rotate-45 transition-transform duration-300" />
              <span>Liên hệ</span>
              
              <!-- Shine effect -->
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 skew-x-12"></div>
            </div>
          </NuxtLink>
        </nav>

        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen"
          class="md:hidden relative p-2 text-white hover:bg-white/10 rounded-xl transition-all duration-300 border border-white/10 hover:border-primary/50 group"
        >
          <Icon 
            :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" 
            size="24"
            class="transition-transform duration-300 group-hover:scale-110"
          />
        </button>

      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-6 space-y-2">
          <a 
            v-for="item in navItems" 
            :key="item.name" 
            :href="item.href"
            @click="isMobileMenuOpen = false"
            class="flex items-center gap-3 px-4 py-3 bg-surface/40 backdrop-blur-xl rounded-xl border border-white/10 hover:border-primary/50 hover:bg-surface/60 transition-all duration-300 group"
          >
            <Icon :name="item.icon" size="20" class="text-primary group-hover:scale-110 transition-transform" />
            <span class="font-medium text-white">{{ item.name }}</span>
          </a>

          <NuxtLink 
            to="/contact"
            @click="isMobileMenuOpen = false"
            class="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-primary to-purple-600 rounded-xl font-bold text-white shadow-glow-sm hover:shadow-glow-md transition-all duration-300"
          >
            <Icon name="heroicons:paper-airplane" size="20" />
            <span>Liên hệ ngay</span>
          </NuxtLink>
        </div>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.shadow-glow-sm {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.shadow-glow-md {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
}

.shadow-glow-lg {
  box-shadow: 0 0 40px rgba(168, 85, 247, 0.5);
}
</style>