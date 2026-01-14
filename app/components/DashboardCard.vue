<script setup>
defineProps(['project']) // Nhận dữ liệu từ cha truyền vào
</script>

<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
    <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover">
    <div class="p-4">
      <span class="text-xs text-blue-500 font-semibold">{{ project.category }}</span>
      <h3 class="text-lg font-bold mt-1">{{ project.title }}</h3>
      <p class="text-gray-600 text-sm mt-2">{{ project.description }}</p>
    </div>
  </div>
</template>