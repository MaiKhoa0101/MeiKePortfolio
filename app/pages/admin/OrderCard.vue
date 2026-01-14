<script setup lang="ts">
defineProps<{
  order: Order;
}>();
</script>

<template>
  <div class="dash-card">
    <div class="card-content">
      <div class="card-left">
        <p><b>Tên:</b> {{ order.name }}</p>
        <p><b>Sđt:</b> {{ order.phone }}</p>
        <p><b>Email:</b> {{ order.email }}</p>
        <p><b>Thời gian đặt:</b> {{ order.orderTime }}</p>
      </div>

      <div class="card-right">
        <p class="font-bold">Đơn đặt: {{ order.orderItem }}</p>
        <p><b>Yêu cầu khách hàng:</b> {{ order.customerRequest }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dash-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  padding: 10px;
  margin-bottom: 32px;
}

.card-content {
  display: flex;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
}

.card-left,
.card-right {
  flex: 1;
  min-width: 250px;
}

.card-right .font-bold {
  font-weight: bold;
}
</style>
