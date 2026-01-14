<template>
  <div class="card">
    <img :src="icon" alt="" class="card__icon" />
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__desc">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
})
</script>

