<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-md border-b border-border transition-all duration-300">
    <div class="container mx-auto px-6 h-20 flex justify-between items-center">
      
      <NuxtLink to="/" class="text-2xl font-black tracking-tighter group flex items-center gap-1">
        <span class="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Dev</span>
        <span class="text-white group-hover:text-primary transition-colors duration-300">Profile.</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-surface-content/90">
        <a href="#intro" class="hover:text-primary transition-colors py-2">Giới thiệu</a>
        <a href="#featured" class="hover:text-primary transition-colors py-2">Dự án</a>
        <a href="#apps" class="hover:text-primary transition-colors py-2">Apps & Game</a>
        
        <NuxtLink to="/contact" class="px-6 py-2.5 bg-primary/10 text-primary border border-primary/50 rounded-full font-bold hover:bg-primary hover:text-white transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] active:scale-95">
          Liên hệ ngay
        </NuxtLink>
      </nav>
      
      <button class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors">
        <Icon name="heroicons:bars-3-bottom-right" size="28" />
      </button>

    </div>
  </header>
</template>