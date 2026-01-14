<script lang="ts" setup>
type Project = {
  id: number;
  name: string;
  image?: string;
};

const {
  data: projects,
  error,
  pending,
} = await useFetch<Project[]>("/api/projects/projects", {
  lazy: true,
});

const viewProjectDetail = (id: number) => {
  navigateTo("/user/" + id);
};

const viewMoreProjects = () => {
  alert("Xem thêm dự án clicked");
};
</script>

<template>
  <div class="container">
    <div class="stats-grid">
      <div class="stat-card card-1">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" >
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>500+</h3>
          <p>Dự án<br />EzLife</p>
        </div>
      </div>

      <div class="stat-card card-2">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>9689+</h3>
          <p>Dự án<br />Website</p>
        </div>
      </div>

      <div class="stat-card card-3">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M9 11H7v9a2 2 0 002 2h6a2 2 0 002-2v-9h-2m1-4V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M7 7h10"
            />
          </svg>
        </div>
        <div class="content">
          <h3>500+</h3>
          <p>Dự án<br />Mobile App</p>
        </div>
      </div>

      <div class="stat-card card-4">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>600+</h3>
          <p>Phần mềm<br />đang vận hành</p>
        </div>
      </div>

      <div class="stat-card card-5">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>50+</h3>
          <p>Dự án <br />triển khai thành công</p>
        </div>
      </div>

      <div class="stat-card card-6">
        <div class="icon">
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
            />
          </svg>
        </div>
        <div class="content">
          <h3>250+</h3>
          <p>Dự án <br />ấn tượng</p>
        </div>
      </div>
    </div>

    <!-- Search -->
    <div class="search-section">
      <div class="search-container">
        <div class="search-icon-input">
          <svg
            class="search-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            viewBox="0 0 24 24"
            fill="blue"
          >
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C8.01 14 6 11.99 6 9.5S8.01 5 10.5 5 15 7.01 15 9.5 12.99 14 10.5 14z"
            />
          </svg>
          <input
            type="text"
            placeholder="Tìm kiếm dự án chất lượng"
            class="search-input"
          />
        </div>

        <div class="search-select-wrapper">
          <select class="search-select">
            <option>Tất cả các ngành</option>
            <option>Website Premium</option>
            <option>Ứng dụng di động</option>
            <option>Phần mềm ERP</option>
            <option>SEO Marketing</option>
            <option>E-learning</option>
            <option>Media & Design</option>
          </select>
        </div>

        <button class="search-button">Tìm kiếm dự án</button>
      </div>
    </div>

    <!-- Project List -->
    <div class="project-list-container">
      <div v-if="error">
        <p style="color: red">Lỗi khi tải dữ liệu: {{ error.message }}</p>
      </div>

      <div v-if="pending" class="loader-wrapper">
        <div class="loader"></div>
      </div>

      <div v-if="!pending && projects?.length === 0">
        <p>Không có dự án nào.</p>
      </div>

      <div
        v-for="project in projects"
        :key="project.id"
        class="project-item"
        @click="viewProjectDetail(project.id)"
      >
        <img
          :src="
            project.image ||
            'https://mona.media/wp-content/uploads/2024/01/Wolfoo-4.png'
          "
          alt="project image"
          class="project-image"
        />

        <div class="project-info">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="view-project-button">Chi tiết dự án ></p>
        </div>
      </div>
    </div>

    <button
      v-if="!pending"
      class="view-more-projects-button"
      @click="viewMoreProjects()"
    >
      Xem thêm dự án
    </button>
  </div>
</template>
<style>
.container {
  margin: clamp(20px, 3vw, 30px) clamp(20px, 6vw, 80px);
}

/* Header Section */

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(10px, 2vw, 15px);
  margin-bottom: clamp(30px, 5vw, 40px);
  max-width: 800px;
}

@media (min-width: 1200px) {
  .stats-grid {
    grid-template-columns: repeat(6, 1fr);
    max-width: none;
  }
}

.stat-card {
  background: linear-gradient(135deg, var(--start-color), var(--end-color));
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: clamp(12px, 2vw, 10px);
  transition: all 0.3s ease;
  cursor: pointer;
  min-height: clamp(90px, 8vw, 100px);
  min-width: 0;
  padding: 10px;
  position: relative;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.stat-card .icon {
  position: absolute;
  top: 8px;
  left: 8px;
  width: clamp(20px, 2vw, 35px);
  height: clamp(20px, 2vw, 35px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-card .icon svg {
  width: clamp(18px, 3vw, 24px);
  height: clamp(18px, 3vw, 24px);
}

.stat-card .content h3 {
  font-weight: 700;
  margin-bottom: 4px;
  text-align: center;
}

.stat-card .content p {
  opacity: 0.9;
  line-height: 1.3;
  text-align: left;
  font-weight: bold;
  text-align: center;
}

.stat-card .content {
  font-size: 14px;
  line-height: 22px;
}

.card-1 {
  --start-color: #ff9a56;
  --end-color: #ff6b9d;
}

.card-2 {
  --start-color: #667eea;
  --end-color: #764ba2;
}

.card-3 {
  --start-color: #f093fb;
  --end-color: #f5576c;
}

.card-4 {
  --start-color: #4facfe;
  --end-color: #00f2fe;
}

.card-5 {
  --start-color: #8360c3;
  --end-color: #2ebf91;
}

.card-6 {
  --start-color: #ff6b9d;
  --end-color: #c44569;
}

/* Search Section */

.search-section {
  background: white;
  border-radius: 16px;
  margin-bottom: clamp(20px, 3vw, 30px);
}

.search-container {
  display: flex;
  align-items: stretch;
  background: #f8f9fa;
  border-radius: 12px;
  overflow: hidden;
  height: clamp(45px, 6vw, 55px);
  border: lightgray 1px solid;
  transition: all 0.3s ease;
}

.search-container:focus-within {
  background: white;
}

.search-icon-input {
  display: flex;
  align-items: center;
  padding: 0 clamp(12px, 2vw, 20px);
  flex: 1;
  min-width: 0;
}

.search-icon {
  width: clamp(30px, 1.5vw, 30px);
  height: clamp(30px, 1.5vw, 30px);
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input {
  border: none;
  outline: none;
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  color: #333;
  width: 100%;
  height: 100%;
  background: transparent;
}

.search-input::placeholder {
  color: #888;
  font-weight: 400;
}

.search-select-wrapper {
  border-left: 1px solid #e0e0e0;
  position: relative;
  min-width: clamp(150px, 20vw, 200px);
}

.search-select {
  border: none;
  outline: none;
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  color: #555;
  background: transparent;
  padding: 0 clamp(30px, 4vw, 40px) 0 clamp(12px, 2vw, 20px);
  height: 100%;
  width: 100%;
  cursor: pointer;
  appearance: none;
}

.search-select-wrapper::after {
  content: "▼";
  position: absolute;
  right: clamp(8px, 2vw, 16px);
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: clamp(0.7rem, 1.5vw, 0.8rem);
  pointer-events: none;
}

.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  padding: 0 clamp(16px, 3vw, 28px);
  font-size: clamp(0.8rem, 2vw, 0.95rem);
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #ff9a56, #ff6b9d);
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: clamp(120px, 15vw, 160px);
}

.search-button:hover {
  background: linear-gradient(135deg, #ff6b9d, #f5576c);
  transform: scale(1.02);
}

.search-button:active {
  transform: scale(0.98);
}

/* Projects Section */

.project-info {
  padding: 10px 5px 10px 10px;
}

.project-list-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(15px, 3vw, 25px);
  margin-top: clamp(30px, 5vw, 40px);
}

@media (min-width: 825px) {
  .project-list-container {
    grid-template-columns: repeat(4, 1fr);
  }
  .project-title {
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .project-list-container {
    gap: clamp(10px, 3vw, 15px);
  }
}

.project-item {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background: white;
  cursor: pointer;
}

.project-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(58, 116, 224, 0.893);
  .view-project-button {
    text-decoration: underline;
  }
}

.project-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

.project-title {
  font-size: 14px;
  margin-top: clamp(8px, 1.5vw, 12px);
  color: #333;
  line-height: 1.4;
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Số dòng muốn hiển thị */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.view-project-button {
  margin-top: clamp(4px, 1vw, 8px);
  color: rgb(32, 32, 255);
  border-radius: 8px;
  text-decoration: none;
  font-size: clamp(0.8rem, 2vw, 0.9rem);
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    max-width: none;
    gap: clamp(10px, 3vw, 15px);
  }
}

@media (max-width: 480px) {
  .search-container {
    flex-direction: column;
    height: auto;
  }

  .search-icon-input {
    padding: 16px 20px;
    border-bottom: 1px solid #e0e0e0;
  }

  .search-select-wrapper {
    border-left: none;
    border-bottom: 1px solid #e0e0e0;
    min-width: auto;
  }

  .search-select {
    padding: 16px 40px 16px 20px;
  }

  .search-button {
    padding: 16px 28px;
    min-width: auto;
  }

  .stat-card {
    padding: clamp(10px, 2vw, 16px);
    min-height: clamp(80px, 10vw, 100px);
  }

  .stat-card .content h3 {
    font-size: 16px;
    line-height: 24px;
  }

  .stat-card .content p {
    font-size: clamp(0.7rem, 2vw, 0.9rem);
  }

  .project-item img {
    height: clamp(120px, 15vw, 160px);
  }

  .project-title {
    font-size: 14px;
  }
}

.view-more-projects-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto 0;
  padding: 15px 50px;
  color: white;
  font-size: 16px;
  background: linear-gradient(45deg, #f59738, #e3540c);
  border-radius: 10px;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1 / -1;
  min-height: 200px;
}
</style>
