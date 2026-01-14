<template>
  <div class="rounded-2xl shadow p-4 bg-white">
    <div class="mb-2 font-medium">{{ title }}</div>
    <div><slot /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>();
</script>
