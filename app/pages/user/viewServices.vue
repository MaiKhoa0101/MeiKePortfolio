<script setup>
import { ref, onMounted } from "vue";
import ServiceCard from "~/pages/user/ServiceCard.vue";
import PricingCard from "~/pages/user/PricingCard.vue";
import smartphone from "@/assets/images/smartphone.png";
import laptop from "@/assets/images/laptop.png";
import appdevelopment from "@/assets/images/app-development.png";

const cards = ref([]);
let currentIndex = 0;
let total = 0;

onMounted(() => {
  cards.value = document.querySelectorAll(".services-carousel .service-card");
  total = cards.value.length;
  updateCarousel();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % total;
    updateCarousel();
  }, 2000);
});

function updateCarousel() {
  cards.value.forEach((card, i) => {
    const diff = (i - currentIndex + total) % total;
    if (diff === 0) {
      card.style.transform = `translateX(0) scale(1)`;
      card.style.opacity = 1;
      card.style.zIndex = 3;
    } else if (diff === 1 || diff === total - 1) {
      const offset = diff === 1 ? 110 : -110;
      card.style.transform = `translateX(${offset}%) scale(0.8)`;
      card.style.opacity = 0.4;
      card.style.zIndex = 2;
    } else {
      card.style.transform = `translateX(${diff * 110}%) scale(0.8)`;
      card.style.opacity = 0;
      card.style.zIndex = 1;
    }
  });
}
</script>

<template>
  <div class="services-page">
    <h1 class="services-title">CÁC DỊCH VỤ</h1>
    <div class="services-carousel">
      <ServiceCard
        class="service-card"
        :icon="smartphone"
        title="Thiết kế App Mobile"
        description="Thiết kế và lập trình mọi loại App cho điện thoại di động cả 2 hệ điều hành Android & IOS. Giá thành tốt, chất lượng và chuyên nghiệp."
      />
      <ServiceCard
        class="service-card"
        :icon="laptop"
        title="Thiết kế Website"
        description="Mọi giải pháp về Website, thiết kế Web & lập trình chuyên sâu, uy tín, chất lượng, hỗ trợ bạn tận tình, không vẽ vời chi phí."
      />
      <ServiceCard
        class="service-card"
        :icon="appdevelopment"
        title="Thiết kế WebApp"
        description="Giải pháp tuyệt vời cho một dự án đa nền tảng, tất cả dữ liệu đều được đồng bộ hóa, luôn hỗ trợ nếu có bất kì lỗi mà không màn đến chi phí."
      />
    </div>

    <h1 class="section-title-1">Bảng giá tham khảo</h1>
    <div class="pricing-grid">
      <PricingCard
        :icon="smartphone"
        title="Thiết kế 1 web/app cơ bản"
        :features="[
          'Bảo hành trọn đời',
          'Giảm giá nếu là sinh viên',
          'Phí thuê duy trì = Phí cơ bản + 10%',
        ]"
        price="1tr500 - 2tr"
      />
      <PricingCard
        :icon="laptop"
        title="Thiết kế cả web và app cơ bản"
        :features="[
          'Bảo hành trọn đời',
          'Giảm giá nếu là sinh viên',
          'Phí thuê duy trì = Phí cơ bản + 15%',
        ]"
        price="3tr500 - 4tr"
      />
      <PricingCard
        :icon="appdevelopment"
        title="Xây dựng ứng dụng đặc thù độc quyền"
        :features="[
          'Bảo hành trọn đời',
          'Giảm giá nếu là sinh viên',
          'Phí thuê duy trì = Phí cơ bản + 20%',
        ]"
        price="8tr - 12tr"
      />
    </div>
  </div>
</template>

<style>
.bg-cyan-700 {
  background: #009ee3;
  min-height: 100vh;
}

.text-center {
  text-align: center;
}
.text-white {
  color: #fff;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 1.2;
}
.font-bold {
  font-weight: bold;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.services-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
}

.service-card {
  transition: transform 0.5s ease, opacity 0.5s ease;
  opacity: 0.4;
  transform: scale(0.9);
}

.service-card.active {
  opacity: 1;
  transform: scale(1);
}

/* Service Card */
.card {
  width: 320px;
  max-width: 90vw;
  min-width: 260px;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
  padding: 24px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.18);
}

.card__icon {
  width: 56px;
  height: 56px;
  object-fit: contain;
  margin: 0 auto 16px;
  filter: drop-shadow(0 2px 0 rgba(13, 128, 145, 0.15));
}

.card__title {
  font-size: 20px;
  font-weight: 800;
  color: #009ee3;
  margin-bottom: 10px;
  letter-spacing: 0.2px;
}

.card__desc {
  font-size: 15px;
  line-height: 1.6;
  color: #444;
}
.services-page {
  background: #009ee3;
  min-height: 100vh;
  padding-bottom: 2rem;
}

.services-title,
.section-title {
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-weight: 800;
  padding: 2.5rem 0;
}
.section-title-1 {
  color: #fff;
  text-align: center;
  font-size: 36px;
  font-weight: 800;
  padding: 2.5rem 0;
}
.services-carousel {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 380px;
}

.services-wrap {
  background: #009ee3;
  padding: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.service-card {
  position: absolute;
  width: 320px;
  max-width: 90vw;
  height: 300px;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.pricing-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

@media (max-width: 640px) {
  .services-title,
  .section-title {
    font-size: 1.5rem;
  }
  .service-card {
    width: 90%;
  }
}
</style>
