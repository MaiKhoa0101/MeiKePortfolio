<template>
  <div class="min-h-screen flex flex-col bg-background text-surface-content font-sans selection:bg-primary selection:text-white">
    
    <topbar/>

    <main class="flex-grow pt-16">
      <slot />
    </main>

    <footer class="bg-background-soft py-12 border-t border-border text-center relative z-10">
      <div class="container mx-auto px-6">
        <h3 class="text-2xl font-bold text-white mb-6">Sẵn sàng hợp tác?</h3>
        
        <NuxtLink to="/contact" class="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
          Liên hệ với tôi
        </NuxtLink>
        
        <p class="text-surface-muted text-sm mt-10">
          © 2024 DevProfile. Designed & Built with <span class="text-primary">Passion</span>.
        </p>
      </div>
    </footer>
  </div>
</template>