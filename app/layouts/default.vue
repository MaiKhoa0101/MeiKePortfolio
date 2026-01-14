<script setup>
import Topbar from "~/components/topbar.vue";

// layout mặc định cho mọi trang
</script>

<template>
  <div class="layout">
    <main class="page-body">
      <Topbar />

      <slot />
      <!-- Nội dung từng page sẽ render tại đây -->
    </main>
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  max-width: 300vh;
  display: flex;
  flex-direction: column;
}
.page-body {
  flex: 1;
  background: linear-gradient(to bottom, #091429 3%, transparent 25%),
    url("/land.png") center 50% no-repeat,
    linear-gradient(
      to bottom,
      #6fe5ff 30%,
      #ffeb7a 50% 66%,
      #6fe5ff 66%,
      #0b1f48
    );

  background-size: cover, 100%, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  min-height: 100vh;
  font-family: "Inter", Arial, sans-serif;
}
</style>
