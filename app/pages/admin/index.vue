<template>
  <div>
    <h2>Dashboard</h2>
    <p>Xin chào, đây là trang tổng quan.</p>
    <div class="cards">
      <div class="card">Tổng user: 120</div>
      <div class="card">Đơn hàng hôm nay: 15</div>
      <div class="card">Tỷ lệ chuyển đổi: 3.2%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports' 
definePageMeta({ layout: 'admin', middleware: 'admin-auth' })
</script>

<style scoped>
.cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-top:12px}
.card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;padding:16px}
</style>