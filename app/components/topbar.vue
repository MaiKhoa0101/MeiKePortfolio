<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
    
    <div class="absolute inset-0 bg-background/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"></div>

    <div class="container mx-auto px-6 h-20 flex justify-between items-center relative z-10">
      
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="relative w-10 h-10">
            <img src="" alt="Planet" class="w-full h-full object-contain animate-spin-slow drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <div class="absolute inset-0 border border-primary/30 rounded-full animate-ping opacity-20"></div>
        </div>

        <div class="flex flex-col">
            <span class="text-2xl font-black tracking-tighter leading-none bg-gradient-to-r from-white via-primary-content to-primary bg-clip-text text-transparent group-hover:to-purple-400 transition-all duration-500">
                DevProfile
            </span>
            <span class="text-[10px] uppercase tracking-[0.2em] text-surface-muted group-hover:text-primary transition-colors">
                Cosmic Portfolio
            </span>
        </div>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-1 text-sm font-medium text-surface-content/80">
        
        <a v-for="(item, index) in ['Giới thiệu', 'Dự án', 'Apps & Game']" :key="index" 
           :href="['#intro', '#featured', '#apps'][index]"
           class="relative px-5 py-2 group overflow-hidden rounded-full hover:bg-white/5 transition-all"
        >
          <span class="relative z-10 group-hover:text-primary transition-colors">{{ item }}</span>
          <span class="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></span>
        </a>

        <NuxtLink to="/contact" class="ml-6 group relative px-1 py-1">
          <div class="absolute inset-0 bg-gradient-to-r from-primary via-orange-500 to-purple-600 rounded-full opacity-70 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500 animate-pulse-glow"></div>
          
          <div class="relative flex items-center gap-2 bg-surface px-6 py-2.5 rounded-full border border-white/10 group-hover:border-white/30 transition-colors">
            <span class="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 transition-all">
                Liên hệ
            </span>
            <img src="" class="w-6 h-6 animate-float group-hover:rotate-12 transition-transform duration-500" />
          </div>
        </NuxtLink>

      </nav>
      
      <button class="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors border border-transparent hover:border-white/10">
        <Icon name="heroicons:bars-3-bottom-right" size="28" />
      </button>

    </div>
  </header>
</template>