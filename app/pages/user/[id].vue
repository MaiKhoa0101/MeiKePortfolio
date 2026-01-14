<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {
  // Animation cho nút explore button (đã có)
  gsap.to(".explore-button .arrow", {
    x: 8,
    duration: 0.8,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut",
  });

  // Animation cho gallery mockups - cập nhật cho layout mới
  const deviceMockups = gsap.utils.toArray<HTMLElement>(".device-mockup");

  deviceMockups.forEach((device, index) => {
    // Thiết lập ban đầu
    gsap.set(device, {
      opacity: 0,
      y: 100,
      rotationX: 15,
      rotationY: gsap.utils.random(-30, 30),
      scale: 0.8,
    });

    // Animation khi vào viewport
    gsap.to(device, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      scale: 1,
      duration: 1.2,
      delay: index * 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: device,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        // Sau khi animation vào hoàn thành, bắt đầu float animation
        startFloatingAnimation(device, index);
      },
    });

    // Thêm hiệu ứng hover nâng cao
    device.addEventListener("mouseenter", () => {
      gsap.to(device, {
        y: -30,
        rotationX: 5,
        rotationY: 5,
        scale: 1.08,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    device.addEventListener("mouseleave", () => {
      gsap.to(device, {
        y: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });

  // Function để tạo floating animation
  function startFloatingAnimation(element: HTMLElement, index: number) {
    // Tạo độ lệch khác nhau cho mỗi element
    const offsetY = index % 2 === 0 ? -15 : 15; // So le lên xuống
    const duration = 2 + index * 0.2; // Duration khác nhau
    const delay = index * 0.3; // Delay khác nhau để tạo wave effect

    gsap.to(element, {
      y: offsetY,
      duration: duration,
      delay: delay,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Thêm rotation nhẹ để tăng tính tự nhiên
    gsap.to(element, {
      rotationZ: index % 2 === 0 ? 2 : -2,
      duration: duration * 1.5,
      delay: delay + 0.5,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });
  }
});

type Project = {
  id: number;
  name: string;
  image?: string;
  images?: string[];
  description?: string;
  description2?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  teamMembers?: string[];
  tech?: string[];
  linkDemo?: string;
  linkGithub?: string;
};

const route = useRoute();
const projectId = route.params.id as string;

// Fetch dữ liệu từ API
const {
  data: project,
  pending,
  error,
} = await useFetch<Project>(`/api/projects/${projectId}`);

// Xử lý images - nếu API trả về image thì chuyển thành mảng images
const processedProject = computed(() => {
  if (!project.value) return null;

  return {
    ...project.value,
    images:
      project.value.images ||
      (project.value.image ? [project.value.image] : []),
    tech: project.value.tech || [],
    linkDemo: project.value.linkDemo || "#",
    linkGithub: project.value.linkGithub || "#",
  };
});

// Image slider logic
const currentIndex = ref(0);
function nextImage() {
  if (processedProject.value?.images) {
    currentIndex.value =
      (currentIndex.value + 1) % processedProject.value.images.length;
  }
}
function prevImage() {
  if (processedProject.value?.images) {
    currentIndex.value =
      (currentIndex.value - 1 + processedProject.value.images.length) %
      processedProject.value.images.length;
  }
}

// Reviews data - có thể fetch từ API riêng hoặc giữ tĩnh
const reviews = ref([
  {
    name: "Nguyễn Văn A",
    comment: "Dịch vụ rất chuyên nghiệp!",
    avatar: "https://wallpaperaccess.com/full/1104081.jpg",
    rating: 5,
    date: "14/08/2025 09:35",
  },
  {
    name: "Trần Thị B",
    comment: "Hỗ trợ nhanh chóng, nhiệt tình.",
    avatar:
      "https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-Thanos-dep-trong-vu-tru-dien-anh-Marvel.jpg",
    rating: 4,
    date: "13/08/2025 16:20",
  },
]);

const currentUser = ref({
  name: "Phạm Văn C",
  avatar:
    "https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-Thanos-dep-trong-vu-tru-dien-anh-Marvel.jpg",
});

const newComment = ref("");
const newRating = ref(0);

// Submit review function
async function submitReview() {
  if (!newComment.value || newRating.value === 0) {
    alert("Vui lòng nhập đánh giá và chọn số sao!");
    return;
  }

  const newReview = {
    name: currentUser.value.name,
    comment: newComment.value,
    avatar: currentUser.value.avatar,
    rating: newRating.value,
    date: new Date().toLocaleString("vi-VN"),
  };

  reviews.value.push(newReview);
  newComment.value = "";
  newRating.value = 0;
}

// Slider cho phần related projects
const relatedCurrentIndex = ref(0);
const relatedProjects = ref([
  {
    id: 1,
    title: "Website Bán Hàng",
    image:
      "https://img4.thuthuatphanmem.vn/uploads/2019/12/16/hinh-nen-4k-thien-nhien-dep_024352261.jpg",
    badge: "T18",
    type: "Website",
  },
  {
    id: 2,
    title: "Ứng Dụng Mobile",
    image:
      "https://hanoispiritofplace.com/wp-content/uploads/2017/12/hinh-nen-thien-nhien-4k-26.jpg",
    badge: "T18",
    type: "Mobile App",
  },
  {
    id: 3,
    title: "Hệ Thống Quản Lý",
    image:
      "https://vn-test-11.slatic.net/p/49f629287dcab5c35fcd946bc8ec9848.jpg",
    badge: "T18",
    type: "System",
  },
  {
    id: 4,
    title: "Game 2D Platform",
    image:
      "https://img4.thuthuatphanmem.vn/uploads/2019/12/16/hinh-nen-4k-thien-nhien-dep_024352261.jpg",
    badge: "T18",
    type: "Game",
  },
]);
</script>

<template>
  <div v-if="pending" class="loader-wrapper">
    <div class="loader"></div>
    <p>Đang tải thông tin dự án...</p>
  </div>

  <div v-else-if="error" class="error-container">
    <h2>Lỗi khi tải dữ liệu</h2>
    <p>{{ error.message }}</p>
    <button @click="">Thử lại</button>
  </div>

  <div v-else-if="!project" class="not-found">
    <h2>Không tìm thấy dự án</h2>
    <p>Dự án với ID {{ projectId }} không tồn tại.</p>
  </div>

  <div v-else class="detail-project">
    <section class="project-header">
      <div class="container">
        <div class="header-content">
          <div class="project-info">
            <h1 class="project-title">{{ project.name }}</h1>
            <p class="project-subtitle">{{ project.description }}</p>

            <div class="project-stats">
              <div class="stat-item">
                <span class="stat-number">2025</span>
              </div>
              <div class="stat-details">
                <p v-if="project.teamMembers">
                  {{ project.teamMembers.length }} trong 12.000+ thành viên
                </p>
                <p>tiêu biểu của <span class="brand">EzLife</span></p>
              </div>
            </div>

            <button class="explore-button">
              <span class="arrow">></span>
              <span>Trải nghiệm ngay</span>
            </button>
          </div>

          <div class="project-details">
            <div class="detail-grid">
              <div class="detail-column">
                <h3>Lĩnh vực</h3>
                <p v-if="processedProject?.tech">
                  {{ processedProject.tech.join(", ") }}
                </p>
                <p v-else>Website, ứng dụng</p>
              </div>
              <div class="detail-column">
                <h3>Loại dịch vụ</h3>
                <p>{{ "Website dự án" }}</p>
              </div>
            </div>

            <div class="detail-grid">
              <div class="detail-column">
                <h3>Năm</h3>
                <p>
                  {{
                    project.startDate
                      ? new Date(project.startDate).getFullYear()
                      : "2023"
                  }}
                </p>
              </div>
              <div class="detail-column">
                <h3>Nhân sự</h3>
                <p>
                  {{ project.teamMembers ? project.teamMembers.length : "6" }}
                  người
                </p>
              </div>
            </div>
          </div>
        </div>
        <video
          src="https://mona.media/wp-content/uploads/2024/01/video-tong-1.mp4"
          controls
          class="project-video"
          style="
            width: 100%;
            height: auto;
            border-radius: 12px;
            margin-top: 20px;
          "
        >
          <source
            src="https://mona.media/wp-content/uploads/2024/01/video-tong-1.mp4"
            type="video/mp4"
          />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </div>
      <!-- mô tả-->

      <div class="project-desc-container">
        <div class="left-projectDesc">
          <h2>{{ project.name }}</h2>
          <p>{{ project.description2 }}</p>
        </div>

        <div class="right-projectDesc">
          <img src="/mockup7.png" alt="" />
        </div>
      </div>

      <h2 class="section-title-1" style="text-align: center">
        Phù hợp với mọi thiết bị
      </h2>

      <div class="projectShowcase">
        <div class="showcase-grid">
          <div class="device-mockup tablet landscape">
            <div class="device-frame">
              <img src="/mockup1.png" alt="Mockup 1" />
            </div>
          </div>
          <div class="device-mockup mobile portrait">
            <div class="device-frame">
              <img src="/mockup2.png" alt="Mockup 2" />
            </div>
          </div>
          <div class="device-mockup tablet portrait">
            <div class="device-frame">
              <img src="/mockup3.png" alt="Mockup 3" />
            </div>
          </div>
          <div class="device-mockup mobile portrait">
            <div class="device-frame">
              <img src="/mockup4.png" alt="Mockup 4" />
            </div>
          </div>
          <div class="device-mockup mobile portrait">
            <div class="device-frame">
              <img src="/mockup6.png" alt="Mockup 5" />
            </div>
          </div>
          <div class="device-mockup tablet landscape">
            <div class="device-frame">
              <img src="/mockup1.png" alt="Mockup 6" />
            </div>
          </div>
          <div class="device-mockup tablet portrait">
            <div class="device-frame">
              <img src="/mockup3.png" alt="Mockup 7" />
            </div>
          </div>
          <div class="device-mockup mobile portrait">
            <div class="device-frame">
              <img src="/mockup2.png" alt="Mockup 8" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews section -->
    <section class="reviews">
      <div class="container">
        <h2>Đánh giá của khách hàng</h2>
        <div class="reviews-container">
          <div class="reviews-wrap">
            <div class="review-card" v-for="(r, i) in reviews" :key="i">
              <div class="review-header">
                <img :src="r.avatar" :alt="r.name" />
                <div class="review-info">
                  <strong class="review-name">{{ r.name }}</strong>
                  <span class="review-date">{{ r.date }}</span>
                </div>
              </div>
              <div class="stars">
                <span
                  v-for="n in 5"
                  :key="n"
                  class="star"
                  :class="{ active: n <= r.rating }"
                  >★</span
                >
              </div>
              <p class="comment">"{{ r.comment }}"</p>
            </div>
          </div>

          <!-- Review form -->
          <div class="review-form">
            <h3>Gửi đánh giá của bạn</h3>
            <div class="current-user">
              <img :src="currentUser.avatar" :alt="currentUser.name" />
              <strong>{{ currentUser.name }}</strong>
            </div>
            <textarea
              v-model="newComment"
              placeholder="Nhập nội dung đánh giá"
            ></textarea>
            <div class="rating">
              <span
                v-for="n in 5"
                :key="n"
                class="star"
                :class="{ active: n <= newRating }"
                @click="newRating = n"
                >★</span
              >
            </div>
            <button @click="submitReview">Gửi</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* PROJECT SHOWCASE - UNIFORM DEVICE GRID */
.section-title-1 {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 700;
  margin: clamp(20px, 4vw, 30px);
  color: rebeccapurple;
  text-align: center;
}

.projectShowcase {
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  padding: clamp(30px, 5vw, 50px) clamp(15px, 3vw, 20px);
  margin: clamp(40px, 6vw, 60px) 0;
  border-radius: clamp(12px, 2vw, 20px);
  position: relative;
  min-height: clamp(400px, 50vw, 600px);
  overflow: hidden;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
  gap: clamp(20px, 4vw, 40px);
  max-width: 1400px;
  margin: 0 auto;
  perspective: 1200px;
  padding: clamp(10px, 2vw, 20px);
}

/* UNIFORM DEVICE SIZING */
.device-mockup {
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  will-change: transform;
  margin: 0 auto;
  max-width: 100%;
}

/* Tablet Landscape - Wide format */
.device-mockup.tablet.landscape {
  width: 320px;
  height: 200px;
  transform: rotateY(-8deg) rotateX(3deg);
}

/* Tablet Portrait - Tall format */
.device-mockup.tablet.portrait {
  width: 240px;
  height: 320px;
  transform: rotateY(8deg) rotateX(-3deg);
}

/* Mobile Portrait - Standard mobile size */
.device-mockup.mobile.portrait {
  width: 180px;
  height: 320px;
  transform: rotateY(-5deg) rotateX(5deg);
}

/* DEVICE FRAMES - Uniform styling */
.device-frame {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 20px;
  padding: 8px;
  box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.3),
    0 0 0 2px rgba(255, 255, 255, 0.1), 0 8px 25px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.device-frame::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 2;
  border-radius: 20px;
}

.device-frame img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* HOVER EFFECTS */

.device-mockup:hover .device-frame {
  box-shadow: 0 30px 60px -10px rgba(0, 0, 0, 0.4),
    0 0 0 2px rgba(255, 255, 255, 0.2), 0 15px 35px rgba(0, 0, 0, 0.25);
}

.device-mockup:hover .device-frame img {
  transform: scale(1.02);
}

/* Desktop & Large Tablets */
@media (min-width: 1200px) {
  .device-mockup.tablet.landscape {
    width: 320px;
    height: 200px;
    transform: rotateY(-8deg) rotateX(3deg);
  }

  .device-mockup.tablet.portrait {
    width: 240px;
    height: 320px;
    transform: rotateY(8deg) rotateX(-3deg);
  }

  .device-mockup.mobile.portrait {
    width: 180px;
    height: 320px;
    transform: rotateY(-5deg) rotateX(5deg);
  }
}

/* Medium Screens */
@media (min-width: 900px) and (max-width: 1199px) {
  .device-mockup.tablet.landscape {
    width: 280px;
    height: 175px;
    transform: rotateY(-6deg) rotateX(2deg);
  }

  .device-mockup.tablet.portrait {
    width: 200px;
    height: 280px;
    transform: rotateY(6deg) rotateX(-2deg);
  }

  .device-mockup.mobile.portrait {
    width: 160px;
    height: 280px;
    transform: rotateY(-4deg) rotateX(4deg);
  }
}

/* Small Tablets */
@media (min-width: 600px) and (max-width: 899px) {
  .device-mockup.tablet.landscape {
    width: 240px;
    height: 150px;
    transform: rotateY(-4deg) rotateX(1deg);
  }

  .device-mockup.tablet.portrait {
    width: 170px;
    height: 240px;
    transform: rotateY(4deg) rotateX(-1deg);
  }

  .device-mockup.mobile.portrait {
    width: 140px;
    height: 240px;
    transform: rotateY(-3deg) rotateX(3deg);
  }
}

/* Mobile Phones */
@media (max-width: 599px) {
  .device-mockup.tablet.landscape,
  .device-mockup.tablet.portrait,
  .device-mockup.mobile.portrait {
    width: min(280px, 90vw);
    height: min(200px, 60vw);
    transform: rotateY(0deg) rotateX(0deg);
  }

  /* Make all devices uniform on mobile for better consistency */
  .device-mockup.tablet.portrait,
  .device-mockup.mobile.portrait {
    height: min(280px, 75vw);
  }
}

/* DEVICE FRAMES - Responsive */
.device-frame {
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: clamp(12px, 2vw, 20px);
  padding: clamp(4px, 1vw, 8px);
  box-shadow: 0 clamp(10px, 3vw, 20px) clamp(20px, 5vw, 40px) -10px rgba(0, 0, 0, 0.3),
    0 0 0 2px rgba(255, 255, 255, 0.1),
    0 clamp(4px, 1.5vw, 8px) clamp(12px, 3vw, 25px) rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.device-frame::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 60%
  );
  pointer-events: none;
  z-index: 2;
  border-radius: clamp(8px, 1.5vw, 12px);
}

.device-frame img {
  width: 100%;
  height: 100%;
  border-radius: clamp(8px, 1.5vw, 12px);
  display: block;
  object-fit: cover;
  transition: transform 0.3s ease;
}

/* HOVER EFFECTS - Responsive */
@media (hover: hover) and (pointer: fine) {
  .device-mockup:hover .device-frame {
    box-shadow: 0 clamp(15px, 4vw, 30px) clamp(30px, 6vw, 60px) -10px rgba(0, 0, 0, 0.4),
      0 0 0 2px rgba(255, 255, 255, 0.2),
      0 clamp(8px, 2vw, 15px) clamp(18px, 4vw, 35px) rgba(0, 0, 0, 0.25);
  }

  .device-mockup:hover .device-frame img {
    transform: scale(1.02);
  }
}

/* FLOATING ANIMATIONS - Reduced on mobile */
@keyframes floatPattern1 {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(-30px) rotate(1deg);
  }
  50% {
    transform: translateY(-50px) rotate(2deg);
  }
  75% {
    transform: translateY(-25px) rotate(1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

@keyframes floatPattern2 {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  25% {
    transform: translateY(30px) rotate(-1deg);
  }
  50% {
    transform: translateY(50px) rotate(-2deg);
  }
  75% {
    transform: translateY(25px) rotate(-1deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

@keyframes floatPattern3 {
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-40px) rotate(1.5deg);
  }
  66% {
    transform: translateY(40px) rotate(-1.5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
}

/* Reduced animation on smaller screens */
@media (min-width: 768px) {
  .device-mockup:nth-child(1) {
    animation: floatPattern1 7s ease-in-out infinite;
    animation-delay: 0s;
  }
  .device-mockup:nth-child(2) {
    animation: floatPattern2 7s ease-in-out infinite;
    animation-delay: 1s;
  }
  .device-mockup:nth-child(3) {
    animation: floatPattern3 7s ease-in-out infinite;
    animation-delay: 2s;
  }
  .device-mockup:nth-child(4) {
    animation: floatPattern1 7s ease-in-out infinite;
    animation-delay: 3s;
  }
  .device-mockup:nth-child(5) {
    animation: floatPattern2 7s ease-in-out infinite;
    animation-delay: 4s;
  }
  .device-mockup:nth-child(6) {
    animation: floatPattern3 7s ease-in-out infinite;
    animation-delay: 5s;
  }
  .device-mockup:nth-child(7) {
    animation: floatPattern1 7s ease-in-out infinite;
    animation-delay: 6s;
  }
  .device-mockup:nth-child(8) {
    animation: floatPattern2 7s ease-in-out infinite;
    animation-delay: 0.5s;
  }
}

/* RESPONSIVE GRID LAYOUTS */
@media (min-width: 1400px) {
  .showcase-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
  }
}

@media (min-width: 1200px) and (max-width: 1399px) {
  .showcase-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
}

@media (min-width: 900px) and (max-width: 1199px) {
  .showcase-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 35px;
  }
}

@media (min-width: 600px) and (max-width: 899px) {
  .showcase-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 599px) {
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 25px;
    padding: 15px;
  }
}

.explore-button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #c519bcb7;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 8px;
}

.explore-button .arrow {
  display: inline-block;
}

.detail-project {
  background: #f5f5f5;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.loader-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  gap: 1rem;
  background: #f5f5f5;
}

.loader {
  border: 4px solid #e5e5e5;
  border-top: 4px solid #e50914;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.error-container,
.not-found {
  text-align: center;
  padding: 3rem;
  background: white;
  margin: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Project Header Section */
.project-header {
  background: white;
  padding: 40px 0;
  border-bottom: 1px solid #e5e5e5;
}

.header-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  align-items: flex-start;
}

.project-info {
  padding-right: 40px;
}

.project-title {
  font-size: 2rem;
  font-weight: 700;
  color: #6b46c1;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.project-subtitle {
  font-size: 1.1rem;
  color: #4a5568;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.project-stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.stat-item {
  background: #2d3748;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.1rem;
}

.stat-details p {
  margin: 0.5rem 0;
  color: #4a5568;
  line-height: 1.5;
}

.brand {
  font-weight: 600;
}

.project-details {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
}

.detail-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.detail-grid:last-child {
  margin-bottom: 0;
}

.detail-column h3 {
  font-size: 0.9rem;
  color: #718096;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.detail-column p {
  font-size: 1.1rem;
  color: #2d3748;
  font-weight: 500;
}

.project-desc-container {
  display: flex;
  align-items: center;
  gap: 48px;
  margin: 40px auto 0;
  padding: 48px 56px;
  background: wheat;
  max-width: 1200px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
}

/* Decor nhẹ để đỡ trống */
.project-desc-container::before {
  content: "";
  position: absolute;
  right: -140px;
  top: -140px;
  width: 520px;
  height: 520px;
  border-radius: 50%;
  background: radial-gradient(closest-side, #fff9, #fff0);
  filter: blur(6px);
  pointer-events: none;
}

/* Left (text)*/
.left-projectDesc {
  flex: 1 1 560px;
  max-width: 680px;
  backdrop-filter: blur(6px);
  border-radius: 20px;
  padding: 28px 28px;
}

.left-projectDesc h2 {
  margin: 0 0 12px;
  font-size: clamp(1.6rem, 1.2rem + 1.5vw, 2.4rem);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: 0.2px;
}

.left-projectDesc p {
  margin: 0;
  color: #4a5568;
  font-size: clamp(0.95rem, 0.9rem + 0.2vw, 1.1rem);
  line-height: 1.7;
}

.right-projectDesc {
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-projectDesc img {
  width: min(520px, 38vw);
  height: auto;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  outline: 1px solid #ffffff66;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}
.right-projectDesc img:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 14px 34px rgba(0, 0, 0, 0.16);
}

/* 1200px xuống: giảm gap, co ảnh */
@media (max-width: 1200px) {
  .project-desc-container {
    gap: 36px;
    padding: 40px 44px;
  }
  .right-projectDesc img {
    width: min(580px, 45vw);
  }
}

/* 992px xuống: xếp cột, căn giữa */
@media (max-width: 992px) {
  .project-desc-container {
    flex-direction: column;
    text-align: left; /* để headline vẫn gọn, đổi thành center nếu muốn */
    gap: 28px;
    padding: 36px 24px;
  }
  .left-projectDesc {
    width: 100%;
    padding: 22px 20px;
  }
  .right-projectDesc img {
    width: 100%;
    max-width: 640px;
  }
}

/* 768px xuống: chữ lớn vừa, bo viền nhỏ hơn */
@media (max-width: 768px) {
  .project-desc-container {
    border-radius: 16px;
  }
  .left-projectDesc {
    border-radius: 14px;
  }
  .left-projectDesc h2 {
    font-size: clamp(1.4rem, 3.8vw, 1.9rem);
  }
  .left-projectDesc p {
    font-size: 1rem;
  }
}

/* 480px xuống: thu padding, khoảng cách */
@media (max-width: 480px) {
  .project-desc-container {
    padding: 22px 16px;
    gap: 18px;
  }
  .left-projectDesc {
    padding: 16px;
  }
}

/* Featured Projects Section */
.featured-projects {
  background: #1a202c;
  padding: 60px 0;
  color: white;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  letter-spacing: 2px;
}

.projects-slider {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
}

.slider-btn {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.slider-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.1);
}

.projects-container {
  flex: 1;
  overflow: hidden;
}

.projects-track {
  display: flex;
  gap: 20px;
  transition: transform 0.5s ease;
}

.project-card {
  min-width: calc(25% - 15px);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.card-image {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #e50914;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .card-overlay {
  opacity: 1;
}

.play-button {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #1a202c;
}

.card-info {
  padding: 1rem 0;
}

.card-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-type {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

/* Reviews Section */
.reviews {
  background: white;
  padding: 60px 0;
}

.reviews h2 {
  text-align: center;
  color: #2d3748;
  font-size: 2.2rem;
  margin-bottom: 3rem;
  font-weight: 700;
}

.reviews-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
}

.reviews-wrap {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
  border: 1px solid;
}

.review-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.review-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.review-header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

.review-info {
  display: flex;
  flex-direction: column;
}

.review-name {
  font-weight: 600;
  color: #2d3748;
}

.review-date {
  font-size: 0.8rem;
  color: #718096;
}

.stars {
  color: #e2e8f0;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.star.active {
  color: #ffc107;
}

.comment {
  color: #4a5568;
  line-height: 1.6;
}

.review-form {
  flex: 0 0 350px;
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid;
}

.review-form h3 {
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.current-user {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
}

.current-user img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.review-form textarea {
  width: 100%;
  min-height: 100px;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  resize: vertical;
  font-family: inherit;
}

.review-form textarea:focus {
  outline: none;
  border-color: #6b46c1;
}

.rating {
  font-size: 1.5rem;
  color: #e2e8f0;
  cursor: pointer;
}

.rating .star:hover,
.rating .star.active {
  color: #ffc107;
}

.review-form button {
  background: #6b46c1;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s ease;
}

.review-form button:hover {
  background: #553c9a;
}

/* Responsive */
@media (max-width: 768px) {
  .showcase-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  .header-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .project-info {
    padding-right: 0;
    text-align: center;
  }
  .project-details {
    margin-top: 20px;
  }
  .detail-grid {
    grid-template-columns: 1fr;
  }
  .reviews-container {
    flex-direction: column;
  }
  .review-form {
    flex: 1;
    min-width: auto;
  }
  .project-desc-container {
    flex-direction: column;
  }
  .right-projectDesc {
    margin-top: 20px;
  }
}
</style>
