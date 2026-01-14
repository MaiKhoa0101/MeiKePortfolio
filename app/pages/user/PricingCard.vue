<template>
  <div class="pricing-card">
    <img :src="icon" alt="" class="pricing-icon" />
    <h3 class="pricing-title">{{ title }}</h3>
    <ul class="pricing-list">
      <li v-for="(item, index) in features" :key="index">{{ item }}</li>
    </ul>
    <div class="pricing-price"><span class="currency">$</span> {{ price }}</div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  features: Array,
  price: String,
});
</script>

<style scoped>
.section-title {
  text-align: center;
  font-size: 34px;
  font-weight: 800;
  margin: 50px 0 30px;
  color: #00faff;
}

.pricing-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
}

.pricing-card {
  width: 31%;
  background: #fff;
  border-radius: 12px;
  padding: 2%;
  border: 2px solid #0d4f7c;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  text-align: center;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.pricing-card img {
  width: 25%;
  margin: 0 auto 1rem;
}

.pricing-card h3 {
  font-size: 24px;
  font-weight: bold;
  color: #00799b;
  margin-bottom: 1rem;
}

.pricing-card ul {
  list-style-type: disc;
  text-align: left;
  padding-left: 8%;
  margin-bottom: 5%;
  font-size: 18px;
  color: #333;
}

.pricing-price {
  margin-top: auto;
  font-size: 1.1rem;
  font-weight: bold;
  color: #0d4f7c;
}

@media (max-width: 1024px) {
  .pricing-card {
    width: 48%;
  }
}

@media (max-width: 600px) {
  .pricing-card {
    width: 98%;
  }
}
</style>
