<script setup>
import { ref, onMounted } from 'vue'

const showScrollTop = ref(false)

onMounted(() => {
  if (process.client) {
    window.addEventListener('scroll', () => {
      showScrollTop.value = window.scrollY > 500
    })
  }
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-surface-content font-sans selection:bg-primary selection:text-white antialiased">
    
    <!-- Topbar -->
    <Topbar />

    <!-- Main Content -->
    <main class="flex-grow pt-20">
      <slot />
    </main>

    <!-- Scroll to Top Button -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 left-8 z-40 p-4 bg-primary hover:bg-primary-hover text-white rounded-2xl shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <Icon name="heroicons:arrow-up" size="24" class="group-hover:-translate-y-1 transition-transform" />
      </button>
    </Transition>

    <!-- Footer -->
    <footer class="bg-background-soft border-t border-border relative overflow-hidden">
      <!-- Decorative Background -->
      <div class="absolute inset-0 cosmic-grid opacity-5"></div>
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]"></div>

      <div class="container mx-auto px-6 py-20 relative z-10">
        
        <!-- Main Footer Content -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <!-- Brand Section -->
          <div class="space-y-6">
            <div class="flex items-center gap-3">
              <div class="relative w-12 h-12">
                <div class="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
                <div class="absolute inset-2 bg-gradient-to-br from-primary to-blue-500 rounded-full shadow-glow-sm"></div>
              </div>
              <div>
                <h3 class="text-2xl font-black bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  DevProfile
                </h3>
                <p class="text-xs text-surface-muted uppercase tracking-wider">Cosmic Portfolio</p>
              </div>
            </div>
            <p class="text-surface-muted leading-relaxed">
              Tạo ra những trải nghiệm web độc đáo và đầy cảm hứng từ vũ trụ công nghệ.
            </p>
            
            <!-- Social Links -->
            <div class="flex gap-3">
              <a href="#" class="group p-3 bg-surface/40 hover:bg-primary border border-border hover:border-primary rounded-xl transition-all duration-300 hover:-translate-y-1">
                <Icon name="uil:github" size="20" class="text-surface-muted group-hover:text-white transition-colors" />
              </a>
              <a href="#" class="group p-3 bg-surface/40 hover:bg-primary border border-border hover:border-primary rounded-xl transition-all duration-300 hover:-translate-y-1">
                <Icon name="uil:linkedin" size="20" class="text-surface-muted group-hover:text-white transition-colors" />
              </a>
              <a href="#" class="group p-3 bg-surface/40 hover:bg-primary border border-border hover:border-primary rounded-xl transition-all duration-300 hover:-translate-y-1">
                <Icon name="uil:twitter" size="20" class="text-surface-muted group-hover:text-white transition-colors" />
              </a>
              <a href="#" class="group p-3 bg-surface/40 hover:bg-primary border border-border hover:border-primary rounded-xl transition-all duration-300 hover:-translate-y-1">
                <Icon name="uil:envelope" size="20" class="text-surface-muted group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="text-white font-bold mb-6 flex items-center gap-2">
              <Icon name="heroicons:link" class="text-primary" />
              Liên kết nhanh
            </h4>
            <ul class="space-y-3">
              <li v-for="link in [
                { name: 'Giới thiệu', href: '#intro' },
                { name: 'Dự án', href: '#featured' },
                { name: 'Ứng dụng', href: '#apps' },
                { name: 'Blog', href: '/blog' },
                { name: 'Liên hệ', href: '/contact' }
              ]" :key="link.name">
                <a :href="link.href" 
                  class="text-surface-muted hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                  <Icon name="heroicons:chevron-right" size="16" class="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  {{ link.name }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Newsletter -->
          <div>
            <h4 class="text-white font-bold mb-6 flex items-center gap-2">
              <Icon name="heroicons:envelope" class="text-primary" />
              Nhận tin mới nhất
            </h4>
            <p class="text-surface-muted mb-6 text-sm">
              Đăng ký để nhận thông tin về các dự án và bài viết mới nhất.
            </p>
            <form class="space-y-3">
              <div class="relative">
                <input 
                  type="email" 
                  placeholder="Email của bạn"
                  class="w-full px-4 py-3 bg-surface/40 border border-border rounded-xl text-white placeholder-surface-muted focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button 
                type="submit"
                class="w-full px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-bold rounded-xl hover:shadow-glow-md transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Đăng ký</span>
                <Icon name="heroicons:paper-airplane" size="18" />
              </button>
            </form>
          </div>

        </div>

        <!-- CTA Section -->
        <div class="text-center py-16 mb-16 relative">
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-3xl"></div>
          
          <div class="relative z-10 space-y-6">
            <h3 class="text-3xl md:text-5xl font-black text-white">
              Sẵn sàng biến ý tưởng thành 
              <span class="bg-gradient-to-r from-primary via-purple-400 to-blue-400 bg-clip-text text-transparent">
                hiện thực
              </span>
              ?
            </h3>
            <p class="text-surface-muted text-lg max-w-2xl mx-auto">
              Hãy cùng tôi tạo ra những sản phẩm tuyệt vời cho dự án tiếp theo của bạn.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <NuxtLink to="/contact" 
                class="group relative px-10 py-4 bg-white text-black font-bold rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-all duration-500 hover:scale-105">
                <span class="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                  Bắt đầu dự án
                  <Icon name="heroicons:arrow-right" class="group-hover:translate-x-1 transition-transform" />
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </NuxtLink>

              <a href="mailto:hello@example.com"
                class="px-10 py-4 bg-surface/40 border border-border hover:border-primary text-white font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
                <Icon name="heroicons:envelope" />
                Email tôi
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-surface-muted">
          <p>
            © 2024 DevProfile. Thiết kế & phát triển với 
            <span class="text-primary font-semibold">❤️</span> và 
            <span class="text-blue-400 font-semibold">☕</span>
          </p>
          
          <div class="flex gap-6">
            <a href="#" class="hover:text-primary transition-colors">Chính sách bảo mật</a>
            <a href="#" class="hover:text-primary transition-colors">Điều khoản</a>
            <a href="#" class="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Cosmic Grid Background */
.cosmic-grid {
  background-image: 
    linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Shadow Glow */
.shadow-glow-sm {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
}

.shadow-glow-md {
  box-shadow: 0 0 30px rgba(168, 85, 247, 0.4);
}

.shadow-glow-lg {
  box-shadow: 0 0 40px rgba(168, 85, 247, 0.5);
}

/* Spin Animation */
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 20s linear infinite;
}
</style>